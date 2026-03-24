/*
https://video.google.uk:8080/videoplay?doc=-01&hl=er#hello
protocol: https
hostname: video.google.uk
    sub-domain: Video
    domain: google.uk:8080
port: 8080
pathname: /videoplay
Query: ?doc=-01&hl=er
route: #hello

url.parse(urlString, [parseQueryString], [slashesDenoteHost])

[parseQueryString], [slashesDenoteHost] are optional parameters.
If parseQueryString is true, the query property will always be set to an object returned by the querystring module's parse() method.
If false, the query property will be an unparsed string. The default value is false.
*/

var url = require('url');
var a = "https://user123@video.google.uk:8080/videoplay?doc=-01&hl=er#hello";
var b = url.parse(a,false);
console.log(b);
process.noDeprecation = true;