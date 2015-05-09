package org.uiautomation.ios.multiTouch;

/**
 * Created by jaybobb710 on 5/7/15.
 */

import com.sun.org.apache.xpath.internal.operations.Mult;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;
import org.uiautomation.ios.IOSCapabilities;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class MultiTouchTest {

    @Test
    public void doMultiTouch() throws Exception {
        IOSCapabilities caps_ios = IOSCapabilities.iphone("InternationalMountains");
        //caps_ios.setCapability("simulator", true);

        MultiTouch driver = new MultiTouch(new URL("http://0.0.0.0:4444/wd/hub"), caps_ios);

        List<MultiTouch.TouchAction> action1 = new ArrayList<MultiTouch.TouchAction>();
        action1.add(MultiTouch.TouchAction.pointerDown("element 1"));
        action1.add(MultiTouch.TouchAction.pause(5));
        action1.add(MultiTouch.TouchAction.pointerUp());

        MultiTouch.TouchActions finger1 = new MultiTouch.TouchActions(action1);

        List<MultiTouch.TouchActions> multiActions = new ArrayList<MultiTouch.TouchActions>();
        multiActions.add(finger1);

        List<MultiTouch.TouchAction> action2 = new ArrayList<MultiTouch.TouchAction>();
        action2.add(MultiTouch.TouchAction.pointerDown("element 2"));
        action2.add(MultiTouch.TouchAction.pointerMove("element 3"));
        action2.add(MultiTouch.TouchAction.pointerUp());

        MultiTouch.TouchActions finger2 = new MultiTouch.TouchActions(action2);

        multiActions.add(finger2);

        boolean success = false;
        driver.multiTouch(multiActions);
        success = true;
        Assert.assertEquals(success, true);
        driver.quit();
    }
}
