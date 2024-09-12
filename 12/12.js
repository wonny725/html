document.addEventListener("DOMContentLoaded", () => {
  const dt = document.querySelector("input[type='date']"); // 날짜 선택 input
  const ul = document.querySelector(".sec > ul"); // 영화 목록이 표시될 ul
  const radios = document.querySelectorAll("input[name=mvGubun]"); // 라디오 버튼
  const yesterday = getYesterday(); // 어제 날짜 구하기

  // 날짜 input에 최대값과 기본값 설정
  dt.max = yesterday;
  dt.value = yesterday;

  // 첫 화면에 기본적으로 데이터를 표시
  getData(dt.value.replaceAll("-", ""), ul, getGubun());

  // 날짜가 변경될 때 데이터를 다시 불러오기
  dt.addEventListener("change", () => {
    getData(dt.value.replaceAll("-", ""), ul, getGubun());
  });

  // 라디오 버튼이 클릭되면 데이터를 다시 불러오기
  radios.forEach((radio) => {
    radio.addEventListener("click", () => {
      if (radio.checked) {
        getData(dt.value.replaceAll("-", ""), ul, radio.value);
      }
    });
  });
});

// 영화 상세정보 가져오기
const getDetail = (movieCd) => {
  const footer = document.getElementById("mvInfo"); // footer에서 상세 정보 표시할 div
  const apiKey = "82ca741a2844c5c180a208137bb92bd7";
  const detailUrl = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apiKey}&movieCd=${movieCd}`;

  fetch(detailUrl)
    .then((resp) => resp.json())
    .then((data) => {
      const movieInfo = data.movieInfoResult.movieInfo;
      const genres = movieInfo.genres.map((genre) => genre.genreNm).join(", ");
      console.log(movieInfo);
      const actors = movieInfo.actors
        .slice(0, 3)
        .map((actor) => actor.peopleNm)
        .join(", ");
      const companys = movieInfo.companys
        .slice(0, 3)
        .map((companys) => companys.companyNm)
        .join(", ");
      // footer에 영화 장르와 주연배우 출력
      footer.innerHTML = `
        <p><strong>장르:</strong> ${genres}</p>
        <p><strong>주연 배우:</strong> ${actors}</p>
        <p><strong>제작사 :</strong> ${companys}</p>
      `;
    })
    .catch((err) => console.error(err));

  console.log(detailUrl);
};

// 박스오피스 API에서 데이터 가져오기
const getData = (selDt, ul, gubun) => {
  const apiKey = "82ca741a2844c5c180a208137bb92bd7";
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${selDt}`;
  if (gubun !== "T") {
    url = `${url}&repNationCd=${gubun}`;
  }
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      const tm = dailyBoxOfficeList
        .map(
          (item) => `
        <li class='mvli'>
          <a href="#" onClick="getDetail(${item.movieCd})">
            <span class='rank'>${item.rank}</span>
            <span class='movieNm'>${item.movieNm}</span>
            <span class='openDt'>${item.openDt}</span>
            <span class='rankInten'>
              ${
                item.rankInten > 0
                  ? '<span class="spRed">▲</span>'
                  : item.rankInten < 0
                  ? '<span class="spBlue">▼</span>'
                  : "-"
              }
              ${item.rankInten !== 0 ? Math.abs(item.rankInten) : ""}
            </span>
        </a></li>`
        )
        .join("");
      ul.innerHTML = tm;
    })
    .catch((err) => console.error(err));
};

// 어제 날짜 구하기
const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const year = yesterday.getFullYear();
  const month = (yesterday.getMonth() + 1).toString().padStart(2, "0");
  const day = yesterday.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// 라디오 버튼의 선택된 값을 가져오기
const getGubun = () => {
  const gubun = document.querySelector("input[name=mvGubun]:checked");
  return gubun ? gubun.value : "T";
};
