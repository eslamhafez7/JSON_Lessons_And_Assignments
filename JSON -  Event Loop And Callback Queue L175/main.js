/*
    [JSON - Event Loop And Callback Queue] L175
    Exent Loop + Callback Queue

    {
        => Javascript is single threaded language("All operations will executed is single threaed")
        => Call stack track all calls
        => Every function is done it's poped out
        => When you call asynchronous function it sent to browser API
        => Asynchronous function like setTimeOut start it's own thread
        => Browser API act as a second thread
        => API finish waiting and second back the function for processing
        => Browser API add the callback to callback queue
        => Event loop wait for call stack to be empty
        => Event loop gets  callback from callback queue and add it to call stack
        => Callback queue follow FIFO "First In First Out" Rule
    }
    1- Event Loop: {
        => The Event Loop is a crucial part of JavaScript's runtime environment,
        responsible for managing the execution of code and handling asynchronous operations.
        =>It ensures that JavaScript remains single-threaded while allowing for non-blocking,
        asynchronous behavior. 
        => The Event Loop continuously checks for tasks to be executed and maintains the order
        of execution.
        => It consists of two main components: the Call Stack and the Callback Queue.
    }
    2- Call Stack: {
        => The Call Stack is a data structure that keeps track of function calls during code
        execution.
        => Whenever a function is invoked, a new frame is added to the top of the call stack.
        => The call stack operates in a Last-In-First-Out (LIFO) manner, meaning the last
        function that is pushed onto the stack will be the first to be executed and removed.
    }
    3- Callback Queue: {
        => (also known as the Task Queue) is a data structure that holds asynchronous tasks or
        events.
        => When an asynchronous operation (e.g., a setTimeout callback or an AJAX response)
        completes, its corresponding callback function is placed in the Callback Queue.
        => The Event Loop continuously checks the state of the Call Stack and, if it is empty,
        moves the oldest task from the Callback Queue to the Call Stack for execution.
    }
    4- يمكن تلخيص التدفق العام لحلقة الأحداث وطابور الاستدعاءات على النحو التالي:
    (The general flow of the Event Loop and Callback Queue can be summarized as follows): {
        => When an asynchronous task is encountered (e.g., a timer expires, an event occurs,
        or an AJAX request completes), its callback function is placed in the Callback Queue.
        => The Event Loop checks the state of the Call Stack. If it is empty, it moves the oldest
        mtask from the Callback Queue to the Call Stack.
        => The task in the Call Stack begins execution, and any synchronous code in the callback
        function is executed.
        => If additional asynchronous operations are encountered within the callback function,
        their corresponding callbacks are added to the Callback Queue.
        => The Event Loop continues this process, ensuring that the Call Stack is cleared before
        executing the next task from the Callback Queue.
    }
    {
        In summary, the Event Loop and Callback Queue work together to handle asynchronous
        operations in JavaScript, allowing non-blocking execution and ensuring that callbacks
        are executed in the appropriate order when the Call Stack is clear.
    }
*/
console.log("one");
setTimeout(() => console.log("three")); // First in first out
setTimeout(() => console.log("Four"));
console.log("Two");



// console.log(myvar); // error
setTimeout(() => console.log(myvar), 0); // First in first out
let myvar = 100;
myvar = myvar + 100;