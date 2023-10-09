//How promises really works or why did we need promises

const userLeft = true;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        //Calling the callback function
        errorCallback(
            {
                name: 'User Left',
                message: ':('
            }
        );
    }
    else if (userWatchingCatMeme) {
        //Calling the callback function
        errorCallback(
            {
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            }
        );
    }
    else {
        //Calling the callback function
        callback('Thumbs up and Subscribe');
    }
}

//Calling the function
watchTutorialCallback(
    message => console.log('Success: ' + message),
    error => console.log(error.name + ' ' + error.message)
)


//Converting above callback hell into promises
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject(
                {
                    name: 'User Left',
                    message: ':('
                }
            );
        }
        else if (userWatchingCatMeme) {
            reject(
                {
                    name: 'User Watching Cat Meme',
                    message: 'WebDevSimplified < Cat'
                }
            );
        }
        else {
            resolve('Thumbs up and Subscribe');
        }
    });
}

//Calling the function
//Here the resolve and reject functions are the callback functions. 
//and they return the value to the then and catch functions
//Let's explain how the promises works.
//The promise function takes a callback function as an argument.
//The callback function takes two arguments resolve and reject.
//The resolve function is called when the promise is fulfilled.
//The reject function is called when the promise is rejected.
//The then function is called when the promise is fulfilled.
//The catch function is called when the promise is rejected.
//The then and catch functions takes a callback function as an argument.
//If the resolve function is being called then the then function is called.
//If the reject function is being called then the catch function is called.

watchTutorialPromise().then(message => console.log('Success: ' + message))
.catch(error => console.log(error.name + ' ' + error.message));


