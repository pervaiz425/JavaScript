// Simulating an asynchronous function to fetch data from a server using Promises
//We can also only specify resolve or reject function in the Promise constructor

function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(function() {
            const data = "Hello, this is the fetched data!";
            resolve(data);
        }, 2000);
    });
}

// Function to handle the fetched data using Promises
function processDataPromise(data) {
    console.log("Processed data: " + data);
}

// Initiating the asynchronous operation with Promises
fetchDataPromise().then(processDataPromise);
