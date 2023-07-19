/*
    [JSON - Asynchronous vs Synchronous] L173
    <To understand Ajax, Fetch, Promises/>
        Synchronous {
            => Opertaions run in sequence
            => Each operation must wait for the previous one to complete
            => Story from real time
        }
        Asynchronous {
            => Opertaions run in parallel
            => This means that an operation may occur while another one is still being processed
            => Story from real time
        }
        Search {
            => Javascript is a single threaded
            => Multi threaded languages
    => Javascript is primarily a single-threaded language, meaning it can only execute one piece
        of code at a time. This is because it follows an event-driven, non-blocking I/O model.
        However, it does support multi-threading indirectly through the use of Web Workers.
        Web Workers allow developers to run scripts in the background, separate from the main
        execution thread, enabling concurrent processing and improving performance for certain
        tasks.
        }
*/


// Synchronous
// console.log(1);
// console.log(2);
// window.alert("Processing Operation");
// console.log(3);

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Asynchronous
console.log(1);
console.log(2);
setTimeout(() => console.log("Processing Operation"), 3000);
console.log(3);

