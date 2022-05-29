// let i;
// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// const fizzBuzz = (n) => {
//   let i;
//   for (i = n; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("Fizz Buzz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(1)
const fizzBuzz2 = (i) => {
  if (i / 15 === 0) {
    return "Fizz Buzz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else {
    return i;
  }
};
const forWord = (t) => {
  for (let x = t; x <= 100; x++) {
    console.log(fizzBuzz2(x));
  }
};
forWord(1);
