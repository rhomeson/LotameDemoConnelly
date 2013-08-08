This is the demo app for Jim Connelly's interview with Lotame.

To compile, you will need Apache Maven in your path (the bin directory). 
Type "mvn clean install". This will compile, run the Unit tests and create a war file
entitled "Lotame.war".

To view the app, you will need Apache Tomcat running. Drop Lotame.war in the webapps directory. Tomcat will automatically deploy the servlet.

To view the app, bring up a browser go the url
http:localhost:8080/Lotame/demo

If Tomcat is running on a server other than your local machine, change the server name and port to the appropriate values.
