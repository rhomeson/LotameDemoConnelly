package com.lotame.controller;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.ModelMap;

/**
 * Unit test for AppController.
 */
public class AppControllerTest 
    extends TestCase
{
    public void testStartApp()
    {
	ModelMap modelMap = new ModelMap();
	AppController appController = new AppController();
	String testString = appController.startApp(modelMap); 
	System.out.println(testString);
	assertNotNull(testString);
    }
}
