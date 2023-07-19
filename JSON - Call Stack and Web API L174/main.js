/*
    [JSON - Call Stack and Web API] L 174
    Call Stack || Stack Trace
        => Javascript engine uses a call stack to manage execution contexts
        => Mechanism to make to make the interpreter track your calls
        => When function called it added to the stack
        => When function executed it removed from the stack
        => After function is finished executing the interpreter continue from the last point
        => Work using LIFO principle => Last In - First Out
        => Code execution is synchronous
        => Call stack detect web API methods and leave it to the browser to handle it
    Web API {
        => Methods available from the environment => Browser (setTiomeOut())
        , etc...)
        => The Web API is a set of functionalities provided by the browser environment,
        such as timers, DOM manipulation, and AJAX requests.
        => The console object, while not a core part of the Web API, is a built-in object
        provided by the JavaScript runtime environment within the browser.
        => Therefore, both the DOM API and the console object are part of the browser's Web API,
        which provides JavaScript with access to browser functionality beyond the core JavaScript
        language features.
    }
    {
        => In JavaScript, the execution of code is generally synchronous by default.
    }
*/

setTimeout(() => {
    console.log("Web API");
}, 0);
/*
    => Even though the delay is set to 0 milliseconds, the function provided as the first
    argument to setTimeout will still be executed asynchronously. 
    
    => so it will be added to the event loop and executed after the synchronous code
    that follows it.

    => . The event loop is responsible for handling various events and tasks, including the
    execution of asynchronous operations.
    
    => The crucial point to understand is that even though the delay is set to 0 milliseconds,
    the callback is still scheduled asynchronously and added to the event loop, ensuring that
    it executes after the synchronous code has completed.

    =================================================

    - Web API
    => it schedules the callback to be executed asynchronously after a minimum delay
    of 0 milliseconds. 

    => This scheduling is done by the Web API, which is responsible for handling timer-related
    operations.
*/
function one () {
    console.log("Hello One");
};
function two () {
    one();
    console.log("Hello Two");
};
function three () {
    two();
    console.log("Hello Three");
};
three();
console.log("#".repeat(10));

console.log("Hello One");
console.log("Hello Two");
console.log("Hello Three");


/*
    The Main Differences Between setTimeOut and console {
        setTimeOut {
            => setTimeout is a function provided by the Web API in browsers.
            => When you call setTimeout, it registers a callback function to
            be executed asynchronously after the specified delay has passed.
            => The callback function is typically used to perform tasks or actions
            that need to be delayed or executed at a later time.
            => The callback function provided to setTimeout is not executed immediately,
            but rather scheduled for future execution in the event loop.
        }
        console {
            =>  is not part of the Web API specifically but is a built-in object provided
            by the browser's JavaScript runtime environment
            => It provides a set of methods for logging information, debugging,
            and interacting with the browser's developer console.It provides a set of methods for logging information, debugging, and interacting with the browser's developer console.
            => The console object's methods, such as console.log(), console.info(), etc.,
            typically synchronous operations. 
            => So, while the console methods themselves are synchronous,
            they do not directly affect the overall nature of code execution.
        }
    }

 */