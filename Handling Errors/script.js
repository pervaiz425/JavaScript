
function inITAll() {
    var ans = prompt("Enter a number", "");

    try {
        if (!ans || isNaN(ans) || ans === "") {
            throw new Error("Not a number");
        }
        alert("The square root of " + ans + " is " + Math.sqrt(ans));
    }
    catch (err) {
        alert(err.message);
    }
}

inITAll();

// In JavaScript, you can use both throw Error and throw new Error to throw an Error object 
// and raise an exception. They are functionally equivalent and will produce the same result. 
// However, using new Error is more common and considered a best practice because it explicitly 
// demonstrates the intent to create a new Error object.