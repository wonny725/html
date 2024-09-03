//document.addEventListener("DOMContentLoaded", () => {}); 기본 형태 다써야 안헷갈림

document.addEventListener("DOMContentLoaded", () => {
  const bt = document.querySelector("button");
  const img = document.querySelector("#msg > img");

  bt.addEventListener("click", () => {
    let n = Math.floor(Math.random() * 6) + 1; //1~6

    //백틱 (``) 안에 달러기호 -> 변수나 표현식 가능
    img.setAttribute("src", `../img/${n}.png`);
    img.setAttribute("alt", `${n}`);
  });
});
