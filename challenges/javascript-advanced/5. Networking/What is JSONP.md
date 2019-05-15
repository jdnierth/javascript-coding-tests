#What is JSONP?
* Is something that predates CORS

#When is it supposed to be used?
* Solution to the Same origin policy of the browser in order to bend the rules.
* Was created as a sudo-standard way to retrieve data from a different domain. 
* Solve the same problem that CORS solves but with limitations
* It only works with GET request, it doesn't work with PUT, POST, DELETE
* API requires to support JSONP

#JSONP Response
* Example of what you would receive from a Server that supports JSONP
```
myFunction(
[
    {
        "id": 1,
        "product": "Sample product"
    }
])
```
* `myFunction` derives from the client that is requesting it
* A script tag does not have any limitation as to which domain it can pull down a script from. It doesn't to adhere 
to the same origin policy
 
#JSONP request without a framework such as jQuery
```
<script>
function myFunction(json) {
    console.log(json)
}
</script>

<script src="<js-file-on-different-domain">
    myFunction(
    [
        {
            "id": 1,
            "product": "Sample product"
        }
    ])
</script>
```

#Gotchas
* You will see the jsonp request in the js tab, not XHR!