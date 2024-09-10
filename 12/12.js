//OPEN API 데이터 가져오기
const getData = (setDt, ul) => {
  console.log(setDt);
  const testAPI = "82ca741a2844c5c180a208137bb92bd7";
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?";
  url = `${url}key=${testAPI}&targetDt=${setDt}`;

  console.log(url);
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList);

      let tm = dailyBoxOfficeList.map(
        (item) =>
          `<li class="mvli">
              <span class="rank">${item.rank}</span>
              <span class="movieNm">${item.movieNm}</span>
            </li>`
      );
      tm = tm.join("");
      ul.innerHTML = tm;
      console.log(tm);
    })
    .catch((err) => console.error(err));
};

//어제 날짜 구하기 함수
const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  let day = yesterday.getDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  return `${year}-${month}-${day}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const dt = document.querySelector("#dt");
  const ul = document.querySelector(".sec > ul");
  //어제 날짜 구하기
  let yesterday = getYesterday();
  console.log("yesterday : ", yesterday);

  dt.max = yesterday;

  dt.addEventListener("change", () => {
    getData(dt.value.replaceAll("-", ""), ul);
  });
});
