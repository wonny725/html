document.addEventListener("DOMContentLoaded", () => {
  //이미지 가져오기
  // const imgs = document.querySelectorAll(".dice-container img");
  //바로 아래 자료 > //그냥 하위 폴더 공백
  const bts = document.querySelectorAll("button");
  const comDice = document.getElementById("computer-dice");
  const userDice = document.getElementById("user-dice");
  const judge = document.getElementById("judge");

  //버튼 클릭 let 변수설정 of 배열
  for (let bt of bts) {
    bt.addEventListener("click", () => {
      //컴퓨터 랜덤수
      let comN = Math.floor(Math.random() * 6) + 1;

      //사용자 선택수
      // console.log(bt.textContent.charAt(0));
      let userN = parseInt(bt.textContent.charAt(0));

      comDice.setAttribute("src", `../img/${comN}.png`);
      comDice.setAttribute("alt", `컴퓨터 주사위 ${comN}`);
      userDice.setAttribute("src", `../img/${userN}.png`);
      userDice.setAttribute("alt", `사용자 주사위 ${userN}`);

      //결과출력
      // == true 반환 , === 자료형까지 같아야 반환
      if (comN === userN) {
        judge.textContent = "맞음";
      } else {
        judge.textContent = "틀림";
      }
    });
  }
});
