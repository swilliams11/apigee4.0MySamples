This is provided AS-IS.

There are two items contained in this folder.

1) apiproxy folder - which contains the javascript callout and policies.

2) SimpleJavaScript_rev22_2013_09_12.zip - which is a zipped file of the apiproxy folder and it can be used to deploy to the 4.0 platform.


This api uses the yahoo weather api as a target services and performs the following:

1) makes a Javascript callout to add headers to a response

2) converts the XML response to JSON

3) makes a Javascript callout to return a small JSON object


For example, step 2 returns the following:

{"rss":{"#namespaces":{"yweather":"http:\/\/xml.weather.yahoo.com\/ns\/rss\/1.0","geo":"http:\/\/www.w3.org\/2003\/01\/geo\/wgs84_pos#"},"#attrs":{"@version":"2.0"},"channel":{"title":"Yahoo! Weather - Sunnyvale, CA","link":"http:\/\/us.rd.yahoo.com\/dailynews\/rss\/weather\/Sunnyvale__CA\/*http:\/\/weather.yahoo.com\/forecast\/USCA1116_f.html","description":"Yahoo! Weather for Sunnyvale, CA","language":"en-us","lastBuildDate":"Thu, 12 Sep 2013 12:55 pm PDT","ttl":"60","yweather_location":{"#attrs":{"@city":"Sunnyvale","@region":"CA","@country":"United States"}},"yweather_units":{"#attrs":{"@temperature":"F","@distance":"mi","@pressure":"in","@speed":"mph"}},"yweather_wind":{"#attrs":{"@chill":"71","@direction":"360","@speed":"8"}},"yweather_atmosphere":{"#attrs":{"@humidity":"63","@visibility":"10","@pressure":"29.96","@rising":"2"}},"yweather_astronomy":{"#attrs":{"@sunrise":"6:46 am","@sunset":"7:19 pm"}},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http:\/\/weather.yahoo.com","url":"http:\/\/l.yimg.com\/a\/i\/brand\/purplelogo\/\/uh\/us\/news-wea.gif"},"item":{"title":"Conditions for Sunnyvale, CA at 12:55 pm PDT","geo_lat":"37.37","geo_long":"-122.04","link":"http:\/\/us.rd.yahoo.com\/dailynews\/rss\/weather\/Sunnyvale__CA\/*http:\/\/weather.yahoo.com\/forecast\/USCA1116_f.html","pubDate":"Thu, 12 Sep 2013 12:55 pm PDT","yweather_condition":{"#attrs":{"@text":"Fair","@code":"34","@temp":"71","@date":"Thu, 12 Sep 2013 12:55 pm PDT"}},"description":"\n<img src=\"http:\/\/l.yimg.com\/a\/i\/us\/we\/52\/34.gif\"\/><br \/>\n<b>Current Conditions:<\/b><br \/>\nFair, 71 F<BR \/>\n<BR \/><b>Forecast:<\/b><BR \/>\nThu - Sunny. High: 72 Low: 60<br \/>\nFri - Partly Cloudy. High: 76 Low: 60<br \/>\nSat - Partly Cloudy. High: 73 Low: 59<br \/>\nSun - Partly Cloudy. High: 75 Low: 61<br \/>\nMon - Sunny. High: 75 Low: 59<br \/>\n<br \/>\n<a href=\"http:\/\/us.rd.yahoo.com\/dailynews\/rss\/weather\/Sunnyvale__CA\/*http:\/\/weather.yahoo.com\/forecast\/USCA1116_f.html\">Full Forecast at Yahoo! Weather<\/a><BR\/><BR\/>\n(provided by <a href=\"http:\/\/www.weather.com\" >The Weather Channel<\/a>)<br\/>\n","yweather_forecast":[{"#attrs":{"@day":"Thu","@date":"12 Sep 2013","@low":"60","@high":"72","@text":"Sunny","@code":"32"}},{"#attrs":{"@day":"Fri","@date":"13 Sep 2013","@low":"60","@high":"76","@text":"Partly Cloudy","@code":"30"}},{"#attrs":{"@day":"Sat","@date":"14 Sep 2013","@low":"59","@high":"73","@text":"Partly Cloudy","@code":"30"}},{"#attrs":{"@day":"Sun","@date":"15 Sep 2013","@low":"61","@high":"75","@text":"Partly Cloudy","@code":"30"}},{"#attrs":{"@day":"Mon","@date":"16 Sep 2013","@low":"59","@high":"75","@text":"Sunny","@code":"32"}}],"guid":{"#attrs":{"@isPermaLink":"false"},"#text":"USCA1116_2013_09_16_7_00_PDT"}}}}}


Step 3 converts it to the following:

{"city":"Sunnyvale","state":"CA","country":"United States","temperature":"72","conditions":"Fair","windSpeed":"10"}
