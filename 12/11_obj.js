let obj = {
  apple: "🍎",
  carrot: "🥕",
  banana: "🍌",
};

// object 접근
console.log(obj["apple"]);
console.log(obj.apple);

// object 순회
for (let k in obj) {
  console.log(`${k} => ${obj[k]}`);
}
// 11.js:13 apple => 🍎
// 11.js:13 carrot => 🥕
// 11.js:13 banana => 🍌
for (let k of Object.keys(obj)) {
  console.log(`${k} => ${obj[k]}`);
}
// 11.js:18 apple => 🍎
// 11.js:18 carrot => 🥕
// 11.js:18 banana => 🍌

for (let k of Object.values(obj)) {
  console.log(`${k}`);
}
// 11.js:24 🍎
// 11.js:24 🥕
// 11.js:24 🍌

for (let [k, item] of Object.entries(obj)) {
  console.log(`${k} => ${item}`);
}
// 11.js:30 apple => 🍎
// 11.js:30 carrot => 🥕
// 11.js:30 banana => 🍌

// 자료 추가
obj["수박"] = "🍉";
console.log(obj);

// 자료 수정
obj["수박"] = "🥚";
console.log(obj);

//자료 삭제
delete obj["수박"];
console.log(obj);

// object 병합
obj2 = { orange: "🍊" };
obj = { ...obj2, ...obj };
console.log(obj);

obj2 = { orange: "🍊" };
obj = { ...obj, ...obj2 };
console.log(obj);
