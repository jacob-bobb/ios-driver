package org.uiautomation.ios.multiTouch;

import com.google.common.base.Splitter;
import com.google.common.base.Throwables;
import com.google.common.collect.ImmutableList;
import org.apache.http.*;
import org.apache.http.HttpResponse;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.Point;
import org.openqa.selenium.UnsupportedCommandException;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.profiler.HttpProfilerLogEntry;
import org.openqa.selenium.net.Urls;
import org.openqa.selenium.remote.*;
import org.openqa.selenium.remote.http.*;
import org.openqa.selenium.remote.http.HttpRequest;
import org.openqa.selenium.remote.internal.HttpClientFactory;
import org.openqa.selenium.remote.internal.JsonToWebElementConverter;
import org.uiautomation.ios.communication.WebDriverLikeCommand;

import java.io.IOException;
import java.net.BindException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import static com.google.common.base.Charsets.UTF_8;
import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Strings.nullToEmpty;
import static com.google.common.net.HttpHeaders.CACHE_CONTROL;
import static com.google.common.net.HttpHeaders.CONTENT_LENGTH;
import static com.google.common.net.HttpHeaders.CONTENT_TYPE;
import static com.google.common.net.MediaType.JSON_UTF_8;
import static org.apache.http.protocol.ExecutionContext.HTTP_TARGET_HOST;
import static org.openqa.selenium.remote.DriverCommand.GET_ALL_SESSIONS;
import static org.openqa.selenium.remote.DriverCommand.NEW_SESSION;
import static org.openqa.selenium.remote.DriverCommand.QUIT;


/**
 * Created by jaybobb710 on 5/4/15.
 */
public class MultiTouch extends RemoteWebDriver {

    private JsonToWebElementConverter converter;

    public MultiTouch(URL remoteAddress, Capabilities desiredCapabilities) {
        super(remoteAddress, desiredCapabilities);
    }

    public static enum Action {
        POINTER_UP("pointerUp"),
        POINTER_MOVE("pointerMove"),
        POINTER_DOWN("pointerDown"),
        PAUSE("pause");

        private String name;

        private Action(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public String toString() {
            return "Action[" + name + "]";
        }
    }

    public static final class TouchAction {
        private final Action name;
        private final Long duration; //in milliseconds
        private final String element;
        private final Point point;

        private TouchAction(Action name) {
            this.name = name;
            this.duration = null;
            this.element = null;
            this.point = null;
        }

        private TouchAction(Action name, long duration) {
            this.name = name;
            this.duration = new Long(duration);
            this.element = null;
            this.point = null;
        }

        private TouchAction(Action name, String element) {
            this.name = name;
            this.duration = null;
            this.element = element;
            this.point = null;
        }

        private TouchAction(Action name, Point point) {
            this.name = name;
            this.duration = null;
            this.element = null;
            this.point = point;
        }

        public Action getName() {
            return this.name;
        }

        public Long getDuration() {
            return this.duration;
        }

        public String getElement() {
            return this.element;
        }

        public int getX() {
            return this.point.getX();
        }

        public int getY() { return this.point.getY();}

        public static TouchAction pointerUp() {
            return new TouchAction(Action.POINTER_UP);
        }

        public static TouchAction pointerDown(String element) {
            return new TouchAction(Action.POINTER_DOWN, element);
        }

        public static TouchAction pointerDown(Point point) {
            return new TouchAction(Action.POINTER_DOWN, point);
        }

        public static TouchAction pointerMove(String element) {
            return new TouchAction(Action.POINTER_MOVE, element);
        }

        public static TouchAction pointerMove(Point point) {
            return new TouchAction(Action.POINTER_MOVE, point);
        }

        public static TouchAction pause(long duration) {
            return new TouchAction(Action.PAUSE, duration);
        }

    }

    public static final class TouchActions {
        public final List<TouchAction> actions;
        public final String source = "touch";

        public TouchActions(List<TouchAction> actions) {
            this.actions = actions;
        }

        public List<TouchAction> getActions() {
            return actions;
        }

        public String getSource() {
            return source;
        }
    }

    public void multiTouch(List<TouchActions> actions) {
        //List<TouchActions> touchActions = new ArrayList<TouchActions>();
        //touchActions.add(actions);

        execute("action", actions);
    }

    private Response execute(String driverCommand, List<TouchActions> parameters) {
//        Command command = new Command(getSessionId(), driverCommand, parameters);
        BeanToJsonConverter beanToJsonConverter = new BeanToJsonConverter();
        Response response = null;

        long start = System.currentTimeMillis();
        String currentName = Thread.currentThread().getName();
        Thread.currentThread().setName(
                String.format("Forwarding %s on session %s to remote", driverCommand, getSessionId()));
        try {
            log(getSessionId(), driverCommand, parameters, When.BEFORE);
            //replace with execute code
//            response = getCommandExecutor().execute(command);
            log(getSessionId(), driverCommand, parameters, When.AFTER);

            if (response == null) {
                return null;
            }

            // Unwrap the response value by converting any JSON objects of the form
            // {"ELEMENT": id} to RemoteWebElements.
            Object value = getElementConverter().apply(response.getValue());
            response.setValue(value);
        } catch (SessionNotFoundException e) {
            throw e;
        } catch (Exception e) {
            log(getSessionId(), driverCommand, parameters, When.EXCEPTION);
            String errorMessage = "Error communicating with the remote browser. " +
                    "It may have died.";
            if (driverCommand.equals(DriverCommand.NEW_SESSION)) {
                errorMessage = "Could not start a new session. Possible causes are " +
                        "invalid address of the remote server or browser start-up failure.";
            }
            throw new UnreachableBrowserException(errorMessage, e);
        } finally {
            Thread.currentThread().setName(currentName);
        }

        try {
            getErrorHandler().throwIfResponseFailed(response, System.currentTimeMillis() - start);
        } catch (WebDriverException ex) {
            ex.addInfo(WebDriverException.DRIVER_INFO, this.getClass().getName());
            if (getSessionId() != null) {
                ex.addInfo(WebDriverException.SESSION_ID, getSessionId().toString());
            }
            if (getCapabilities() != null) {
                ex.addInfo("Capabilities", getCapabilities().toString());
            }
            Throwables.propagate(ex);
        }
        return response;
    }

    private Response execute(String driverCommand, SessionId sessionId, List<TouchActions> parameters) throws IOException {
        HttpContext context = new BasicHttpContext();

        if (sessionId == null) {
            if (QUIT.equals(driverCommand)) {
                return new Response();
            }
            if (!GET_ALL_SESSIONS.equals(driverCommand)
                    && !NEW_SESSION.equals(driverCommand)) {
                throw new SessionNotFoundException(
                        "Session ID is null. Using WebDriver after calling quit()?");
            }
        }

        HttpRequest request = encode(driverCommand, parameters);

        CommandExecutor executor = getCommandExecutor();
        HttpCommandExecutor httpExecutor = (HttpCommandExecutor)executor;

        String requestUrl = httpExecutor.getAddressOfRemoteServer().toExternalForm().replaceAll("/$", "")
                + request.getUri();

        HttpUriRequest httpMethod = createHttpUriRequest(request.getMethod(), requestUrl);
        for (String name : request.getHeaderNames()) {
            // Skip content length as it is implicitly set when the message entity is set below.
            if (!"Content-Length".equalsIgnoreCase(name)) {
                for (String value : request.getHeaders(name)) {
                    httpMethod.addHeader(name, value);
                }
            }
        }

        if (httpMethod instanceof HttpPost) {
            ((HttpPost) httpMethod).setEntity(new ByteArrayEntity(request.getContent()));
        }

        HttpClientFactory httpClientFactory = null;
        HttpClient client = null;

        synchronized (HttpCommandExecutor.class) {
            if (httpClientFactory == null) {
                httpClientFactory = new HttpClientFactory();
            }
        }

        if (httpExecutor.getAddressOfRemoteServer() != null && httpExecutor.getAddressOfRemoteServer().getUserInfo() != null) {
            // Use HTTP Basic auth
            UsernamePasswordCredentials credentials = new
                    UsernamePasswordCredentials(httpExecutor.getAddressOfRemoteServer().getUserInfo());
            client = httpClientFactory.createHttpClient(credentials);
        } else {
            client = httpClientFactory.getHttpClient();
        }

        try {
            //log(getSessionId(), LogType.PROFILER, new HttpProfilerLogEntry(driverCommand, true));
            HttpResponse response = fallBackExecute(client, httpExecutor, context, httpMethod);
            //log(getSessionId(), LogType.PROFILER, new HttpProfilerLogEntry(command.getName(), false));

            URL remoteServer = httpExecutor.getAddressOfRemoteServer();
            String host = remoteServer.getHost().replace(".localdomain", "");
            HttpHost targetHost = new HttpHost(host, remoteServer.getPort(),
                    remoteServer.getProtocol());

            response = followRedirects(client, targetHost, context, response, /* redirect count */0);

            return createResponse(response, context);
        } catch (UnsupportedCommandException e) {
            if (e.getMessage() == null || "".equals(e.getMessage())) {
                throw new UnsupportedOperationException(
                        "No information from server. Command name was: " + driverCommand,
                        e.getCause());
            }
            throw e;
        }
    }

    private HttpRequest encode(String driverCommand, List<TouchActions> parameters) {
//        CommandSpec spec = nameToSpec.get(command.getName());
//        if (spec == null) {
//            throw new UnsupportedCommandException(command.getName());
//        }

        BeanToJsonConverter beanToJsonConverter = new BeanToJsonConverter();

        String uri = buildUri(driverCommand, parameters);

        HttpRequest request = new HttpRequest(HttpMethod.POST, uri);

        if (HttpMethod.POST == request.getMethod()) {
            String content = beanToJsonConverter.convert(parameters);
            byte[] data = content.getBytes(UTF_8);

            request.setHeader(CONTENT_LENGTH, String.valueOf(data.length));
            request.setHeader(CONTENT_TYPE, JSON_UTF_8.toString());
            request.setContent(data);
        }

        if (HttpMethod.GET == request.getMethod()) {
            request.setHeader(CACHE_CONTROL, "no-cache");
        }

        return request;
    }

    private String buildUri(String driverCommand, List<TouchActions> parameters) {
        String path = WebDriverLikeCommand.ACTION.path();
        Splitter PATH_SPLITTER = Splitter.on('/').omitEmptyStrings();
        List<String> pathSegments = ImmutableList.copyOf(PATH_SPLITTER.split(path));
        {
            StringBuilder builder = new StringBuilder();

            for (String part : pathSegments) {
                if (part.isEmpty()) {
                    continue;
                }

                builder.append("/");
                if (part.startsWith(":")) {
                    builder.append(getParameter(part.substring(1), driverCommand, parameters));
                } else {
                    builder.append(part);
                }
            }
            return builder.toString();
        }
    }

    private URI buildUri(HttpContext context, String location) throws URISyntaxException {
        URI uri;
        uri = new URI(location);
        if (!uri.isAbsolute()) {
            HttpHost host = (HttpHost) context.getAttribute(HTTP_TARGET_HOST);
            uri = new URI(host.toURI() + location);
        }
        return uri;
    }

    private String getParameter(String parameterName, String driverCommand, List<TouchActions> parameters) {
        if ("sessionId".equals(parameterName)) {
            SessionId id = getSessionId();
            checkArgument(id != null, "Session ID may not be null for command %s", driverCommand);
            return id.toString();
        }

        Object value = null;

        for(int i = 0; i < parameters.size(); ++i) {
            List<TouchAction> actions = parameters.get(i).getActions();
            for(int j = 0; j < actions.size(); ++j) {
                if(actions.get(i).getName().equals(parameterName)) {
                    value = actions.get(i);
                    break;
                }
            }
        }


        checkArgument(value != null,
                "Missing required parameter \"%s\" for command %s", parameterName, driverCommand);
        return Urls.urlEncode(String.valueOf(value));
    }

    private static HttpUriRequest createHttpUriRequest(HttpMethod method, String url) {
        switch (method) {
            case DELETE:
                return new HttpDelete(url);
            case GET:
                return new HttpGet(url);
            case POST:
                return new HttpPost(url);
        }
        throw new AssertionError("Unsupported method: " + method);
    }

    private HttpResponse fallBackExecute(HttpClient client, HttpCommandExecutor executor ,HttpContext context, HttpUriRequest httpMethod)
            throws IOException {
        URL remoteServer = executor.getAddressOfRemoteServer();
        String host = remoteServer.getHost().replace(".localdomain", "");
        HttpHost targetHost = new HttpHost(host, remoteServer.getPort(),
                                            remoteServer.getProtocol());
        try {
            return client.execute(targetHost, httpMethod, context);
        } catch (BindException e) {
            // If we get this, there's a chance we've used all the local ephemeral sockets
            // Sleep for a bit to let the OS reclaim them, then try the request again.
            try {
                Thread.sleep(2000);
            } catch (InterruptedException ie) {
                throw Throwables.propagate(ie);
            }
        } catch (NoHttpResponseException e) {
            // If we get this, there's a chance we've used all the remote ephemeral sockets
            // Sleep for a bit to let the OS reclaim them, then try the request again.
            try {
                Thread.sleep(2000);
            } catch (InterruptedException ie) {
                throw Throwables.propagate(ie);
            }
        }
        return client.execute(targetHost, httpMethod, context);
    }

    private HttpResponse followRedirects(
            HttpClient client, HttpHost targetHost, HttpContext context, HttpResponse response, int redirectCount) {

        final int MAX_REDIRECTS = 10;

        if (!isRedirect(response)) {
            return response;
        }

        try {
            // Make sure that the previous connection is freed.
            HttpEntity httpEntity = response.getEntity();
            if (httpEntity != null) {
                EntityUtils.consume(httpEntity);
            }
        } catch (IOException e) {
            throw new WebDriverException(e);
        }

        if (redirectCount > MAX_REDIRECTS) {
            throw new WebDriverException("Maximum number of redirects exceeded. Aborting");
        }

        String location = response.getFirstHeader("location").getValue();
        URI uri;
        try {
            uri = buildUri(context, location);

            HttpGet get = new HttpGet(uri);
            get.setHeader("Accept", "application/json; charset=utf-8");
            HttpResponse newResponse = client.execute(targetHost, get, context);
            return followRedirects(client, targetHost, context, newResponse, redirectCount + 1);
        } catch (URISyntaxException e) {
            throw new WebDriverException(e);
        } catch (ClientProtocolException e) {
            throw new WebDriverException(e);
        } catch (IOException e) {
            throw new WebDriverException(e);
        }
    }

    private boolean isRedirect(HttpResponse response) {
        int code = response.getStatusLine().getStatusCode();

        return (code == 301 || code == 302 || code == 303 || code == 307)
                && response.containsHeader("location");
    }

    private Response createResponse(HttpResponse httpResponse, HttpContext context)
            throws IOException {
        org.openqa.selenium.remote.http.HttpResponse internalResponse =
                new org.openqa.selenium.remote.http.HttpResponse();

        internalResponse.setStatus(httpResponse.getStatusLine().getStatusCode());
        for (Header header : httpResponse.getAllHeaders()) {
            for (HeaderElement headerElement : header.getElements()) {
                internalResponse.addHeader(header.getName(), headerElement.getValue());
            }
        }

        HttpEntity entity = httpResponse.getEntity();
        if (entity != null) {
            try {
                internalResponse.setContent(EntityUtils.toByteArray(entity));
            } finally {
                EntityUtils.consume(entity);
            }
        }

        Response response = decode(internalResponse);
        if (response.getSessionId() == null) {
            HttpHost finalHost = (HttpHost) context.getAttribute(HTTP_TARGET_HOST);
            String uri = finalHost.toURI();
            String sessionId = HttpSessionId.getSessionId(uri);
            response.setSessionId(sessionId);
        }

        return response;
    }

    public Response decode(org.openqa.selenium.remote.http.HttpResponse encodedResponse) {
        ErrorCodes errorCodes = new ErrorCodes();
        JsonToBeanConverter jsonToBeanConverter = new JsonToBeanConverter();

        String contentType = nullToEmpty(encodedResponse.getHeader(CONTENT_TYPE));
        String content = encodedResponse.getContentString();
        try {
            return jsonToBeanConverter.convert(Response.class, content);
        } catch (JsonException e) {
            if (contentType.startsWith("application/json")) {
                throw new IllegalArgumentException(
                        "Cannot decode response content: " + content, e);
            }
        } catch (ClassCastException e) {
            if (contentType.startsWith("application/json")) {
                if (content.isEmpty()) {
                    // The remote server has died, but has already set some headers.
                    // Normally this occurs when the final window of the firefox driver
                    // is closed on OS X. Return null, as the return value _should_ be
                    // being ignored. This is not an elegant solution.
                    return new Response();
                }
                throw new IllegalArgumentException(
                        "Cannot decode response content: " + content, e);
            }
        }

        Response response = new Response();
        int statusCode = encodedResponse.getStatus();
        if (statusCode < 200 || statusCode > 299) {
            // 4xx represents an unknown command or a bad request.
            if (statusCode > 399 && statusCode < 500) {
                response.setStatus(ErrorCodes.UNKNOWN_COMMAND);
            } else {
                response.setStatus(ErrorCodes.UNHANDLED_ERROR);
            }
        }

        if (encodedResponse.getContent().length > 0) {
            response.setValue(content);
        }

        if (response.getValue() instanceof String) {
            // We normalise to \n because Java will translate this to \r\n
            // if this is suitable on our platform, and if we have \r\n, java will
            // turn this into \r\r\n, which would be Bad!
            response.setValue(((String) response.getValue()).replace("\r\n", "\n"));
        }
        response.setState(errorCodes.toState(response.getStatus()));
        return response;
    }

}
