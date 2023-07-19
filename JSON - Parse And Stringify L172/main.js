/*
    [JSON - Parse And Stringify] L172
        JSON.parse(key) => Convert text data to javascript object 
        JSON.stringify(key) => Convert javascript object to json object 
*/
// create json object
const myJsonObjectFromServer = '{"username": "Eslam", "age": 21}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// convert jsonobject to javascript object
const myJavascriptObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJavascriptObject);
console.log(myJavascriptObject);

// update javascript content 
myJavascriptObject["username"] = "Eslam Hafez";
myJavascriptObject["age"] = 20;

// convert javascript object to json object
const myJsonObjectToServer = JSON.stringify(myJavascriptObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
