//데이터 가져오기
const getData = (ul) => {
  console.log("getData");
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240908";

  fetch(url)
    .then((resp) => resp.json())
    // .then( data => console.log(data.boxOfficeResult['dailyBoxOfficeList']))
    .then((data) => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

      let tm = dailyBoxOfficeList.map((item) => `<li>${item.movieNm}</li>`);
      console.log(tm);
      ul.innerHTML = tm.join("");
    })
    .catch((err) => console.error(err));
};

document.addEventListener("DOMContentLoaded", () => {
  //요소 가져오기
  const ul = document.querySelector(".sec > ul");
  getData(ul);
});
