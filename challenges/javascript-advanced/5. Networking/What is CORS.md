#What is CORS?
* Cross origin resource sharing
* Allows you to break the same origin policy of the browser
* Lets you selectively unblock certain request.

#Scenario 1
* If there is the setup that foo.com is requesting data from bar.com this would fail because of the same origin 
policy of the browser
* Same origin policy is a security policy

#Scenario 2
* If foo.com and bar.com were owned by the same person then they could set up CORS so that foo.com could request data
 from bar.com
* Servers would let you access resources from different origins. 
 
#Important note on GET
* It is not the request that gets blocked if the `Access-Control-Allow-Origin` value doesn't match the Origin value 
of the request, it is the response that gets blocked by the browser.

#Important note Issue a PUT
* If the `Access-Control-Allow-Origin` value doesn't match the Origin value of the request on a `PUT` request, this 
will not  Will already have changed the value on the server as only the response will be blocked!!!
Solution: CORS gets around this by sending out a `pre-flight request` request. Is a HTTP request with the method `Option`

#Takeaway
* If you receive a CORS error and you don't have any control over the server there is nothing you can do.
* Whoever has control over the server needs to make sure they are sending the right headers with the 
`Allow-Access-Control-Origin` with the proper values in the response in correspondence your request. 