package com.lotame.controller;

/*
Controller for the AJAX request from Client to get the top 20 audiences for Lotame Demo
This class will need to call the Lotame site to receive information as JSON
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import java.util.HashMap;
import org.springframework.ui.ModelMap;

@Controller
@RequestMapping("/demo")
public class AppController 
{
    @RequestMapping(method= RequestMethod.GET )
    public String startApp(ModelMap appMap)
    {
	System.out.println("AppController - getApp");
	appMap.addAttribute("test", "Test Successful");
	return "index";
    }

}
