context.setVariable("myResponse", response.content);
var orig = JSON.parse(response.content);
var channel = orig.rss.channel;
//context.setVariable("test", channel.yweather_location.city);

var nr = { city: channel.yweather_location.city,
           state: channel.yweather_location.region,
           country: channel.yweather_location.country,
           temperature: channel.item.yweather_condition.temp,
           conditions: channel.item.yweather_condition.text,
           windSpeed: channel.yweather_wind.speed };
response.content = JSON.stringify(nr);
