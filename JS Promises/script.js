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
watchTutorialPromise().then(message => {
    console.log('Success: ' + message);
}).catch(error => {
    console.log(error.name + ' ' + error.message);
});
