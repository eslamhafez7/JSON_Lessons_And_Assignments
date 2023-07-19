/*
    [Request And Response From Real API] L 177
        AJAX{
        Ready state => status of the request
        [0] => Request Not initialized 
        [1] => Server connection established
        [2] => Request received
        [3] => Processing request
        [4] => Request is finish and response is ready
    }
    {
        [200] => Response is successful
        [404] => Not found
    }
*/


let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/eslamhafez7", true); // by default true
request.send();

request.onreadystatechange = function() {
    console.log(request.readyState);
    console.log(request.status);

    if(this.readyState === 4 && this.status === 200) {
        console.log(request.responseText);
    }
}

console.log(request);