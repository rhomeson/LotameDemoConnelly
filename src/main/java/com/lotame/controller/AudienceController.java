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
import javax.net.ssl.HttpsURLConnection;
import java.net.URLEncoder;
import java.io.*;
import org.json.XML;
import org.json.JSONObject;

@Controller
@RequestMapping("/audiences")
public class AudienceController 
{
    private static String authorization;
    @RequestMapping(method= RequestMethod.GET )
    public String getAudiences(ModelMap audienceMap)
    {
	System.out.println("AuthenticationController - getAuthentication");
	String audiences = getAudiencesFromLotame();
	
	audiences = audiences.replace("ns3:", "");
	audienceMap.addAttribute("audiences", audiences);
	
	return "audiences";
    }

    private String getAudiencesFromLotame()
    {
 	authorization = getAuthorizationFromLotame(true);
	String audiences = "";
	HttpsURLConnection conn = null;
	
	System.out.println("Attempting to get Audiences from Lotame");
	try
	{
	    // this should go in applicationContext.xml file
	    java.net.URL lotameURL = new java.net.URL("https://api.lotame.com/audstats/reports/topAudiences?page_count=20&page_num=1");
	    conn = (HttpsURLConnection)lotameURL.openConnection();
	    conn.setRequestMethod("GET");
	    conn.setRequestProperty("Authorization", authorization);
	    conn.setDoInput(true); 
	    BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	    String inputLine;
	    StringBuffer response = new StringBuffer();
	    
	    while ((inputLine = in.readLine()) != null) {
		response.append(inputLine);
	    }
	    in.close();
	    
	    //print result
	    String xmlAudiences = response.toString();
	    JSONObject jsonAudience = XML.toJSONObject(xmlAudiences);
	    audiences = jsonAudience.toString();

	    //audiences = xmlAudiences;
	    System.out.println("Audiences = " + audiences);
	    
	}
	catch(Exception e)
	{
	    e.printStackTrace();
	}
	return audiences;
    }

 

    private String getAuthorizationFromLotame(boolean refresh)
    {
	if (!refresh && this.authorization != "") 
	    { return this.authorization; }
	HttpsURLConnection conn = null;
	System.out.println("Attempting to get Authorization Token from Lotame");
	try
	{
	    java.net.URL lotameURL = new java.net.URL("https://api.lotame.com");
	    conn = (HttpsURLConnection)lotameURL.openConnection();
	//request.ContentType = "application/x-www-form-urlencoded";

	    String userString = "rhomeson@hotmail.com";
	    String encodeUserString = java.net.URLEncoder.encode(userString, "UTF-8");
	    String passString = "jul2013JC";
	    String encodePassString = java.net.URLEncoder.encode(passString, "UTF-8");
	    String query = "email="+URLEncoder.encode("rhomeson@hotmail.com","UTF-8"); 
	    query += "&";
	    query += "password="+URLEncoder.encode("jul2013JC","UTF-8") ;

	    conn.setRequestProperty("Content-length", String.valueOf(query.length())); 
	    conn.setDoOutput(true); 
	    conn.setDoInput(true); 

	    conn.setRequestMethod("POST");
	    DataOutputStream output = new DataOutputStream(conn.getOutputStream());  
	    output.writeBytes(query);
	    output.close();
	  
  
	    BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	    String inputLine;
	    StringBuffer response = new StringBuffer();
	    
	    while ((inputLine = in.readLine()) != null) {
		response.append(inputLine);
	    }
	    in.close();
	    
	    //print result
	    authorization = response.toString();
	    System.out.println(authorization);
	}
	catch(Exception e)
	{
	    e.printStackTrace();
	}
	return authorization;
    }


}
