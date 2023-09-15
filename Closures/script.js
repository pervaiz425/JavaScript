
// each closure had its own lexical environment. Here though, there is a single 
// lexical environment that is shared by the three functions: counter.increment, 
// counter.decrement, and counter.value.

// The shared lexical environment is created in the body of an anonymous function,
//  which is executed as soon as it has been defined (also known as an IIFE). The 
//  lexical environment contains two private items: a variable called privateCounter,
//   and a function called changeBy. You can't access either of these private members 
//   from outside the anonymous function. Instead, you can access them using the three 
//   public functions that are returned from the anonymous wrapper.

// Those three public functions form closures that share the same lexical environment. 
// Thanks to JavaScript's lexical scoping, they each have access to the privateCounter 
// variable and the changeBy function.

const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
