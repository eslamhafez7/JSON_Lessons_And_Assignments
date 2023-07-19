/*
    [What Is AJAX and Network Information] L176
    => AJAX stands for Asynchronous Javascript and XML
    => Approach to use many of technologies togeather [HTML, CSS, JS, DOM]
    => You can fetch data or send data without page refresh
    Test new XMLHttpRequest();
    Status code 
*/
/*
    => 200 OK = success
    => 404 Not Found
    => 403 Forbidden
*/
let req = new XMLHttpRequest();
console.log(req);
console.log(req.onabort);
console.log(req.LOADING);
console.log(req.withCredentials);
console.log(req.status);
