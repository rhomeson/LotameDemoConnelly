package com.lotame.controller;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.ModelMap;

/**
 * Unit test for AudienceController.
 */
public class AudienceControllerTest 
    extends TestCase
{
    public void testGetAudiences()
    {
	ModelMap modelMap = new ModelMap();
	AudienceController audienceController = new AudienceController();
	String audiences = audienceController.getAudiences(modelMap); 
	System.out.println(audiences);
	assertNotNull(audiences);
    }
}
