const disp = (divNum, divplus, divBonus, dsp) => {
  divNum.style.display = dsp;
  divplus.style.display = dsp;
  divBonus.style.display = dsp;
};

document.addEventListener("DOMContentLoaded", () => {
  const divNum = document.querySelector("#divNum");
  const divplus = document.querySelector(".divplus");
  const divBonus = document.querySelector("#divBonus");
  const bt = document.getElementById("bt");
  const bt1 = document.getElementById("bt1");

  disp(divNum, divplus, divBonus, "none");

  bt.addEventListener("click", (e) => {
    e.preventDefault();

    // function generateLottoNumbers() {
    //   const numbers = [];

    //   while (numbers.length < 7) {
    //     const randomNum = Math.floor(Math.random() * 45) + 1;
    //     if (!numbers.includes(randomNum)) {
    //       numbers.push(randomNum); // 중복이 아니면 배열에 추가
    //     }
    //   }

    //   const lottoNumbers = numbers.slice(0, 6).sort((a, b) => a - b); // 처음 6개는 로또 번호
    //   const bonusNumber = numbers[6]; // 마지막 1개는 보너스 번호

    //   return { lottoNumbers, bonusNumber };
    // }

    // // 로또 번호 및 보너스 번호 생성
    // const { lottoNumbers, bonusNumber } = generateLottoNumbers();

    // // 번호를 각 <span> 요소에 삽입
    // lottoNumbers.forEach((number, index) => {
    //   document.querySelector(`.sp${index}`).textContent = number;
    // });

    // // 보너스 번호 삽입
    // document.querySelector(".spBonus").textContent = bonusNumber;
    // bt1.style.display = "block";

    let arr = [];
    while (arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1; //1~45
      if (!arr.includes(n)) arr.push(n);
    }

    let arrBonus = arr.splice(6, 1);
    arr.sort((a, b) => a - b);
    console.log(arrBonus);

    arr = arr.map(
      (item) => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`
    );
    arr = arr.join("");
    divNum.innerHTML = arr;
    console.log(arr);

    arrBonus = arrBonus.map(
      (item) => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`
    );
    arrBonus = arrBonus.join("");
    divBonus.innerHTML = arrBonus;

    //요소 숨기기
    // divNum.style.display = 'block';
    // divplus.style.display = 'block';
    // divBonus.style.display = 'block';
    disp(divNum, divplus, divBonus, "block");
    bt1.style.display = "block";
  });
});

bt1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://dhlottery.co.kr/gameResult.do?method=byWin");
});
