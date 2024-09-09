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

  for (let bt1 of secBt1) {
    bt1.addEventListener("click", (e) => {
      e.preventDefault();

      let addItem = bt1.innerHTML.replace("추가", "");
      txt1.value = txt1.value + addItem;
      console.log(bt1.innerHTML);
    });
  }

  for (let bt2 of secBt2) {
    bt2.addEventListener("click", (e) => {
      e.preventDefault();
      let delItem = bt2.innerHTML.replace("삭제", "");
      // let tmArr = Array.from(txt1.value);
      // tmArr = tmArr.filter((item) => item != delItem);
      // txt1.value = tmArr.join("");
      // console.log(tmArr);
      // console.log(bt2.innerHTML);
      txt1.value = txt1.value.replaceAll(delItem, "");
    });
  }

  for (let bt3 of secBt3) {
    bt3.addEventListener("click", (e) => {
      e.preventDefault();
      let items = bt3.innerHTML.split("→");
      txt1.value = txt1.value.replaceAll(items[0], items[1]);
    });
  }
});
