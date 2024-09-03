// dom이 생성된 후 이벤트 감지
document.addEventListener("DOMContentLoaded", () => {
  //버튼 요소 가져오기
  const bt1 = document.getElementById("bt1");
  //selcetor로 찾기 #id
  const bt2 = document.querySelector("#bt2");
  const bt3 = document.querySelector("#bt3");
  const msg = document.querySelector("#msg");
  //버튼 이벤트 달기
  bt1.addEventListener("click", () => {
    alert(bt1.innerHTML);
  });

  bt2.addEventListener("click", () => {
    alert(bt2.textContent);
  });

  bt3.addEventListener("click", () => {
    // msg.innerHTML = "<h2>랜덤수생성</h2>";
    let n = Math.floor(Math.random() * 6) + 1;
    console.log("n", n);
    msg.innerHTML = `<h2>${bt3.textContent}:<span>${n}</span></h2>`;
  });
});
