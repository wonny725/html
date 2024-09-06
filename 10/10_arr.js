let arr = new Array();
let arr1 = [1, 2, 3, 4, 5];

console.log("arr : " + arr1);
console.log("arr  : ", arr1);
console.log("arr 개수 : ", arr1.length);

for (let i = 0; i < arr1.length; i++) {
  console.log(`${i + 1}번째 :  ${arr1[i]}`);
}

for (let i in arr1) {
  console.log(`${parseInt(i) + 1}번째 :  ${arr1[i]}`);
}

for (let item of arr1) {
  console.log(`${item} : ${item % 2 == 0 ? "짝" : "홀"}`);
}

for (let [i, item] of arr1.entries()) {
  console.log(
    `${parseInt(i) + 1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`
  );
}

console.log("forEach");
arr.forEach((item, i) => {
  console.log(
    `${parseInt(i) + 1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`
  );
});

// // arr1 = [];
// arr1.length = 0; // <- JS에서만 가능

// console.log("arr  : ", arr1);

arr1.push(6);
console.log("arr push : ", arr1);
arr1.pop(6);
console.log("arr pop : ", arr1);

arr1.unshift(6);
console.log("arr unshift : ", arr1);
arr1.shift();
console.log("arr shift : ", arr1);

// arr1.splice(2, 2); // [2] 부터, 2개 날리기
// console.log("arr splice : ", arr1);

//splice 로 삭제
let arr2 = arr1.splice(1, 1);
console.log("arr1 splice : ", arr1);
console.log("arr2 splice : ", arr2);

//splice 로 변경
arr1.splice(2, 1, "a");
console.log("arr1 splice : ", arr1);

//splice 로 추가
arr1.splice(2, 0, 3);
console.log("arr1 splice : ", arr1);

// arr = [1, 2, 3, 4, 5];
// let arr3 = arr.map((item) => {
//   let item2 = item * 2;

//   return item2;
// });

// console.log("arr map 결과 arr3 : ", arr3);

// => 생략version
// 1. callback 함수의 매개변수가 1개이면 ()생략가능
// 2. callback 함수의 body에 return만 있으면 {}와 return 생략가능

arr = [1, 2, 3, 4, 5];

let arr3 = arr.map((item) => item * 2);
console.log("arr map 결과 arr3 : ", arr3);

arr3 = arr.map((item) => (item % 2 == 0 ? "짝" : "홀"));
console.log("arr map 결과 arr3 : ", arr3);

arr3 = arr.filter((item) => item % 2 == 0);
console.log("arr map 결과 arr3 : ", arr3);

arr = [4, 5, 2, 1, 3];
console.log(`${arr} => 정렬 ${arr.sort((a, b) => b - a)}`);
