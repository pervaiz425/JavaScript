//In case of regular function call, this refers to how the function is being called or who has called the function.
//Or we can say that which object has called the function
//fpr instance if we call the function from window object then this will refer to window object
//and if we call the function as a method of object then this will refer to that object
//but if we declare a regular function inside a method of object then this will refer to window object
//beacuse the regular function is always called by window object no matter where it is declared
function regularFunction() {
    console.log(this);
  }
  
  const obj = {
    method: regularFunction
  };
  
  obj.method(); // 'this' inside regularFunction refers to 'obj'
  regularFunction(); // 'this' inside regularFunction refers to the global object (e.g., 'window' in a browser)
  

  //Arrow function on the other hand does not have its own this. It captures the this value of the enclosing context.
  const arrowFunction = () => {
    console.log(this);
  };
  
  const obj = {
    method: arrowFunction
  };
  
  obj.method(); // 'this' inside arrowFunction refers to the outer lexical scope, which is the 'this' of the enclosing context
  //In this case as the arrowFunction is declared in the widow object so the this inside arrowFuncton refers to window object
    arrowFunction(); // "this" inside wrrow function refers to the global "window" object