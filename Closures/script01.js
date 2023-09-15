// global scope
const e = 10;
function sum() {
const a = 1;
  return function () {
    const b = 2;
    return function () {
       const c = 3;
      // outer functions scope
      return function () {
        const d = 4;
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum()()()());

// A common mistake is not realizing that in the case where the outer function 
// is itself a nested function, access to the outer function's scope includes 
// the enclosing scope of the outer function—effectively creating a chain of function scopes.
//The innermost function will have access to variables in all outer scopes.
//This is another example of a closure.