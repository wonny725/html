document.addEventListener("DOMContentLoaded", () => {
  const txt1 = document.querySelector("#txt1");
  const secBt1 = document.querySelectorAll(".secBt1");
  const secBt2 = document.querySelectorAll(".secBt2");
  const secBt3 = document.querySelectorAll(".secBt3");
  const secBt41 = document.querySelectorAll(".secBt41");
  const secBt42 = document.querySelectorAll(".secBt42");

  let obj = {
    apple: "🍎",
    carrot: "🥕",
    banana: "🍌",
  };

  let jsonDt;
  secBt41.addEventListener("click", (e) => {
    e.preventDefault();

    jsonDt = JSON.stringify(obj);

    console.log("obj = ", obj);
    console.log("obj = ", obj["apple"]);
    console.log("jsonDt = ", jsonDt);
    console.log("jsonDt = ", jsonDt["apple"]);
  });

  secBt42.addEventListener("click", (e) => {
    e.preventDefault();

    let obj2 = JSON.parse(jsonDt);

    console.log("obj2 = ", obj2);
    console.log("obj2 = ", obj2["apple"]);
  });

  //추가
  for (let bt of secBt1) {
    bt.addEventListener("click", (e) => {
      e.preventDefault();

      let addItem = bt.innerHTML.replace("추가", "");
      txt1.value = txt1.value + addItem;
      console.log(bt.innerHTML);
    });
  }

  //삭제
  for (let bt of secBt2) {
    bt.addEventListener("click", (e) => {
      e.preventDefault();

      let addItem = bt.innerHTML.replace("삭제", "");
      // case 1
      // txt1.value = txt1.value.replaceAll(addItem, '') ;

      let tmArr = Array.from(txt1.value); //이모지형태로 분리
      // let tmArr = txt1.value.split('') ; //유니코드로 분리

      // case 2
      // for(let i =0 ; i < tmArr.length ; i++) {
      //   if (tmArr[i] == addItem ) tmArr[i] = '' ;
      //  }

      // case 3
      tmArr = tmArr.filter((item) => item != addItem);

      tmArr = tmArr.join("");
      txt1.value = tmArr;
      console.log(tmArr);
    });
  }

  //변경
  for (let bt of secBt3) {
    bt.addEventListener("click", (e) => {
      e.preventDefault();

      let items = bt.innerHTML.split("→");
      console.log("items = ", items);
      // txt1.value = txt1.value.replaceAll(items[0], items[1]) ;

      let tmArr = Array.from(txt1.value);
      tmArr = tmArr.map((item) => (item == items[0] ? items[1] : item));
      txt1.value = tmArr.join("");

      console.log(tmArr);
    });
  }
});
