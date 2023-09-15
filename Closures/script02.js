
function outer() {
    let getY;
    {
      const y = 6;
      getY = () => y;
    }
    console.log(y); // ReferenceError: y is not defined
    console.log(typeof y); // undefined
    console.log(getY()); // 6
  }
  
  outer();

  // In the above example, calling outer creates a local variable y which can only be called from within the function outer.
  