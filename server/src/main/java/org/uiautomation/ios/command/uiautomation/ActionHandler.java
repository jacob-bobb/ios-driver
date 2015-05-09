package org.uiautomation.ios.command.uiautomation;

import org.json.JSONException;
import org.json.JSONObject;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import org.uiautomation.ios.IOSServerManager;
import org.uiautomation.ios.command.UIAScriptHandler;
import org.uiautomation.ios.communication.WebDriverLikeRequest;
import org.uiautomation.ios.drivers.RemoteIOSWebDriver;
import org.uiautomation.ios.utils.CoordinateUtils;
import org.uiautomation.ios.wkrdp.model.NodeId;
import org.uiautomation.ios.wkrdp.model.RemoteWebElement;
import org.uiautomation.ios.wkrdp.model.RemoteWebNativeBackedElement;

import java.util.logging.Logger;

/**
 * Created by jaybobb710 on 4/29/15.
 */
public class ActionHandler extends UIAScriptHandler {

    private final Logger log = Logger.getLogger(ActionHandler.class.getCanonicalName());

    public ActionHandler(IOSServerManager driver, WebDriverLikeRequest request) throws Exception {
        super(driver, request);

        log.info("handling /actions");
//        JSONObject payload = request.getPayload();
//        String elementId = payload.optString("element");
//        if (RemoteIOSWebDriver.isPlainElement(elementId)) {
//            NodeId nodeId = RemoteIOSWebDriver.plainNodeId(elementId);
//            setJS(plainTemplate.generate(request.getSession(), nodeId.getId()));
//        } else {
//            Dimension screenSize = getNativeDriver().getScreenSize();
//            RemoteWebNativeBackedElement element = (RemoteWebNativeBackedElement) getWebDriver().createElement(elementId);
//            Point tapPoint = element.getLocation(RemoteWebElement.ElementPosition.CENTER);
//            tapPoint = CoordinateUtils.forcePointOnScreen(tapPoint, screenSize);
//            setJS(nativeTemplate.generate(request.getSession(), tapPoint.getX(), tapPoint.getY()));
//        }

    }

    @Override
    public JSONObject configurationDescription() throws JSONException {
        return noConfigDefined();
    }
}
