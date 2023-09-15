// const makeWithdraw = (balance) =>
// {
//    let myBalance = balance;
//   ((copyBalance) => {
//     let balance = copyBalance; // This variable is private
//     const doBadThings = () => {
//       console.log("I will do bad things with your money");
//     };
//     doBadThings();
//     return {
//       withdraw(amount) {
//         if (balance >= amount) {
//           balance -= amount;
//           return balance;
//         }
//         return "Insufficient money";
//       }
//     };
//   })(myBalance);
// };


// //   function myFunction(testVar)
// const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// console.log(firstAccount);
// console.log(firstAccount.balance); // undefined
// console.log(firstAccount.withdraw(20)); // 80
// console.log(firstAccount.withdraw(30)); // 50
// console.log(firstAccount.doBadThings); // undefined; this method is private
// const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
// console.log(secondAccount.withdraw(30)); // "Insufficient money"
// console.log(secondAccount.withdraw(20)); // 0

//The above script won't work because the function makeWithdraw doesn't return anything.

const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0

// const makeWithdraw = (balance) => {
//     let myBalance = balance;
//     return ((copyBalance) => {
//       let balance = copyBalance; // This variable is private
//       const doBadThings = () => {
//         console.log("I will do bad things with your money");
//       };
//       doBadThings();
//       return {
//         withdraw(amount) {
//           if (balance >= amount) {
//             balance -= amount;
//             return balance;
//           }
//           return "Insufficient money";
//         }
//       };
//     })(myBalance);
//   };
  
//   const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
//   console.log(firstAccount.balance); // undefined
//   console.log(firstAccount.withdraw(20)); // 80
//   console.log(firstAccount.withdraw(30)); // 50
//   console.log(firstAccount.doBadThings); // undefined; this method is private
//   const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
//   console.log(secondAccount.withdraw(30)); // "Insufficient money"
//   console.log(secondAccount.withdraw(20)); // 0

  //If you use curly braces after an arrow function, you need to use the return keyword to return a value.
  //If you use parentheses after an arrow function, you don’t need to use the return keyword to return a value.
  //The braces can only be omitted if the function directly returns an expression. and IIFE is an expression.
  //we can use IIFE to create private variables and methods.

  const obj = () => (function () {console.log("Muhammad Umar");});
  //In this code, I didn't use curly braces because the anonymous function is an expression.
  