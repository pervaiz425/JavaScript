//Version 1:
// (function () {
//     document.getElementById("redirect").addEventListener("click", function(evt){
//         window.location = "redirection.html";
//         evt.preventDefault();
//         // return false;
//     });
// })();

// Version 2:

(() => {
    document.getElementById("redirect").onclick = inIT; 
    //If I assign the onclick command to false directly, it doesn't work. Why?
    // document.getElementById("redirect").onclick = false;
    // It doesn't work because the onclick event is not a boolean. It is a function. It 
    //expects a function to be executed when the event is triggered.

    function inIT()
    {
        window.location = "redirection.html";
        // return false; //return false makes the default action not to be taken.
        return false;
    }
})();


// Version 3:
// function redirect() {
//     const element = document.querySelector("#redirect");
//     if (element) {
//       element.addEventListener("click", (evt) => {
//         window.location = "redirection.html";
//         evt.preventDefault();
//       });
//     }
//   }
  
//   redirect();
  

// evt.preventDefault();

// what happens if I don't add the preventDefault ?
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// If you don't add evt.preventDefault(); to your event handler when dealing with a click event 
// on an anchor <a> tag or other clickable elements that have default behaviors associated with 
// them, the default behavior will occur in addition to the custom behavior you've defined in your event handler.

// For example, if your "redirect" element is an anchor <a> tag without evt.preventDefault();, clicking 
// on it will perform the following actions:

// It will execute your custom event handler code, which is the redirection to "redirection.html."

// After that, it will follow the link specified in the anchor's href attribute, causing the browser 
// to load a new page or navigate to the URL specified in the href.

// Adding evt.preventDefault(); prevents the default behavior (in this case, following the link) from 
// occurring. This is useful when you want to perform some custom action with JavaScript without 
// triggering the usual behavior associated with the HTML element. In the context of your code, 
// you likely want to prevent the default behavior to ensure that the page doesn't navigate to
//  a different URL when the "redirect" element is clicked and instead only performs the redirection 
//  specified in your JavaScript code.