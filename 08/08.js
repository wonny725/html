document.addEventListener("DOMContentLoaded", () => {
  //요소가져오기
  const bt = document.querySelector("button");
  const txt = document.querySelector("#txt");
  const upDown = document.getElementById("udGame");
  const newGameSection = document.getElementById("newGameSection");
  const newGameButton = document.getElementById("newGameButton");

  let n = Math.floor(Math.random() * 99) + 1;
  let flag = false;

  console.log(`정답: ${n}`);

  bt.addEventListener("click", (e) => {
    e.preventDefault();

    const userInput = parseInt(txt.value);

    if (txt.value == "") {
      alert("숫자를 입력해주세요!");
      return;
    }

    if (txt.value < 1 || txt.value > 100) {
      alert("1과 100 사이의 숫자를 입력해주세요!");
      return;
    }

    if (!flag) {
      if (userInput < n) {
        upDown.setAttribute("src", "../img/up.png");
      } else if (userInput > n) {
        upDown.setAttribute("src", "../img/down.png");
      } else {
        upDown.setAttribute("src", "../img/good.png");
        alert("정답!!!!!!!!!!!!!!!!!!");
        txt.style.display = "none";
        bt.style.display = "none";
        flag = true;
        newGameSection.style.display = "block";
      }
    }
  });
  // const userInput = parseInt(txt.value);
  // if (txt.value) alert("새로운 게임 시작하기를 눌러주세요.");
  // return;

  newGameButton.addEventListener("click", () => {
    location.reload(); // 페이지 새로고침
  });
});
