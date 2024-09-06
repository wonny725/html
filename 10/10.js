document.addEventListener("DOMContentLoaded", () => {
  const bt = document.getElementById("bt");
  const bt1 = document.getElementById("bt1");

  bt.addEventListener("click", (e) => {
    e.preventDefault();

    function generateLottoNumbers() {
      const numbers = [];

      while (numbers.length < 7) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
          numbers.push(randomNum); // 중복이 아니면 배열에 추가
        }
      }

      const lottoNumbers = numbers.slice(0, 6).sort((a, b) => a - b); // 처음 6개는 로또 번호
      const bonusNumber = numbers[6]; // 마지막 1개는 보너스 번호

      return { lottoNumbers, bonusNumber };
    }

    // 로또 번호 및 보너스 번호 생성
    const { lottoNumbers, bonusNumber } = generateLottoNumbers();

    // 번호를 각 <span> 요소에 삽입
    lottoNumbers.forEach((number, index) => {
      document.querySelector(`.sp${index}`).textContent = number;
    });

    // 보너스 번호 삽입
    document.querySelector(".spBonus").textContent = bonusNumber;
    bt1.style.display = "block";
  });
});
bt1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://dhlottery.co.kr/gameResult.do?method=byWin");
});
