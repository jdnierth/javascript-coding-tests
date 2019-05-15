#If we were making a POST CORS request, what HTTP request does the browser send first?
* `OPTIONS`. The browser sends what's called a "pre-flight" options request first to check to see if it can send a POST 
request later on.