// function job() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {

//             resolve(2);
//         }, 1000);
//         });
// }

// let myPromise = job();

// myPromise
//     .then((res)=>
//     console.log('success'+res)
// )
// .then((res)=>
// console.log('success1'+res)
// )
// .then((res)=>
// console.log('success2'+res)
// )
//     .catch(() =>
//     console.log('error')
// )

// const result = async () => {
//     console.log('print')
//     const massage = await job();
//     console.log(massage);
//     console.log('print')
//     console.log('print')
//     console.log('print')
// }
// result()

// Hoisting exp
// var a = 2;

// var fun = function () {
//     console.log(a)
//     var a = 3
// }

// fun()

// map() Polyfill

// Array.prototype.myMap = function (cb) {
//     let temp = []

//     for (let i = 0; i < this.length; i++){
//         temp.push(cb(this[i], i, this));
//     }

//     return temp;

// }

// const nums = [1, 2, 3, 4]

// const polyMapRes = nums.myMap((num, i, arr) => {
//     return num * 3;

// })

// console.log(polyMapRes)

// // filter() polyfill

// Array.prototype.myFilter = function (cb) { // Object.prototype can also work but will be universal data types
//     let temp = []

//     for (let i = 0; i < this.length; i++){
//         if(cb(this[i], i, this)) temp.push(this[i]);
//     }

//     return temp;

// }

// // const nums = [1, 2, 3, 4]

// const polyFilterRes = nums.myFilter((num, i, arr) => {
//     return num > 2;

// })

// console.log(polyFilterRes)

// // reduce polyfill

// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue;

//     for (let i = 0; i < this.length; i++){
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[0];
//     }

//     return accumulator;
// }

// const polyReduceres = nums.myReduce((acc, num, i, arr) => {
//     return num + acc;
// }
// ,5)

// console.log(polyReduceres)

// Currying

// Evaluate("sum")(2)(3);
// Evaluate("multiply")(2)(3);
// Evaluate("divide")(2)(3);
// Evaluate("substract")(2)(3);

// function Evaluate(op) {
//     return function (a) {
//         return function (b) {
//             if (op == "sum") console.log(a + b);
//             else if (op == "multiply") console.log(a * b);
//             else if (op == "divide") console.log(a / b);
//             else if (op == "substract") console.log(a - b);

//         }

//     }
// }

// shadowing
// var count = 0;

//     (function printCount() {
//         if (count === 0) {
//             let count = 1;
//             console.log(count);
//         }

//         console.log(count);

//     })();

// function leapyear(year) {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

// function string_reverse(str) {
//     a = 10
//     return str.split("").reverse().join("");
// }

// console.log(string_reverse("jsresource"));
// console.log(string_reverse("www"),a);

// $('body').click(function () {
//     $(this).toggle().css({ "background-color": "green" })

//     console.log(this)

// });

// var myElement = $('ul').each(function() {
//     var childElement = this.parent().nextSibling();
//     console.log(childElement)
// });
$(".tweet").click(function () {
  // $('*').css({ "background-color": "green" });  // * universal selector
  // $(this).attr({'href':'me.com','disabled':true});
  $("i").toggleClass("toggle", "newtogle");
  $("i").toggle();

  console.log(childElement);
});
$("div").css("width", "500px").css("background-color", "yellow");
$("div").add("p")
