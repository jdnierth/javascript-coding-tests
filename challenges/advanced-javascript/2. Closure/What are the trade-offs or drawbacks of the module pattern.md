#What are the trade-offs or drawbacks of the module pattern
1. Testing: It is either hard or impossible to test private functions
2. Everytime you make an instance of your module you are copying your code unless you make use of the prototype chain.