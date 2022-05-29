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
// const fizzBuzz2 = (i) => {
//   if (i / 15 === 0) {
//     return "Fizz Buzz";
//   } else if (i % 5 === 0) {
//     return "Buzz";
//   } else if (i % 3 === 0) {
//     return "Fizz";
//   } else {
//     return i;
//   }
// };
// const forWord = (t) => {
//   for (let x = t; x <= 100; x++) {
//     console.log(fizzBuzz2(x));
//   }
// };
// forWord(1);
///////////////////////////////
// Object
///////////////////////////////
// const downtown = {
//   name: "douwntown",
//   boke: "matsumoto",
//   tukkomi: "hamada",
//   method() {
//     console.log(`コンビ名は${this.name}です。ボケは、${this.boke}、ツッコミは${this.tukkomi}です。`);
//   }
// };
// downtown.method();
/////////////////////////////
//配列
/////////////////////////////
// const arr = ["ふじ", "たか", "なす"];
// const secondArr = ["玉ねぎ", "じゃがいも"];
// arr[0] = "ズッキーニ";
// console.log(arr);
// arr.push("みかん");
// console.log(arr);

// const newArr = arr.slice(2);
// console.log(`sliceを使用${newArr}`);
// console.log(arr);

// const concatArry = arr.concat(secondArr);
// console.log(`concatを使用${concatArry}`);

// const kuku = [];
// for (let i = 0; i < 9; i++) {
//   kuku.push([]);
//   for (let j = 0; j < 9; j++) {
//     kuku[i].push((i + 1) * (j + 1));
//   }
// }
// console.table(kuku);
const array = [5, 7, 2, 4, 6];
const value = 1;
let included = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === value) {
    included = true;
    break;
  }
}
// if (included === true) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }
//三項演算子
// included ? console.log("Yes") : console.log("No");
const message = included ? "Yes" : "No";
console.log(message);
////////////
//map
///////////
const arr = [1, 2, 3, 4, 5];
// const f = (x) => {
//   return 100 * x;
// };

//mapの引数は「コールバック関数」
// const mapped = arr.map((x) =>{return 100 * x});
//省略記法↓
const mapped = arr.map((x) => 100 * x);
//mapの返り値はfへ、f(arr[0]),f(arr[1]),f(arr[2]),f(arr[3]),f(arr[4])
//const=fの引数へ配列の数値が入る
console.log(mapped);
//////////
// filter
//////////
const arrFilter = [1, 2, 3, 4, 5];

//filterの機能は、trueならそのまま、falseなら取り除く
//なので引数はboolean
const filtered = arrFilter.filter((x) => x % 2 !== 0);
console.log(filtered);
console.log(arrFilter);
//////////
// reduced
//////////
const arrReduced = [1, 2, 3, 4, 5, 6];
const f = (x, y) => {
  return x * y;
};
//reduceのコールバック関数は、２つ引数を取る
// const reduced = arrReduced.reduce(f);
//1x2,2x3,6x4,24x5,120x6結果を第一引数、次の値を第２引数
// console.log(reduced);

const num1000 = 1000;
const end = num1000 + 1;

for (let i = 2; i < end; i++) {
  for (let j = 2; j <= i; j++) {
    if (i === j) {
      console.log(i);
    }
    if (i % j === 0) {
      break;
    }
  }
}
