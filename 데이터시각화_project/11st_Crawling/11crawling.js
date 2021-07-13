// 비동기 sleep 함수
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

for() {

  for (20)
    리스트에 리뷰저장
1 if() 더보기를 몇번 누를것인가

}


// 쿠팡 리뷰 데이터 크롤링 함수
async function getReviewsData(numOfReviews) {
  // 리뷰객체들이 저장될 배열
  let reviewList = new Array();

  // 50개씩 반복하는 for문의 기준값이 될 변수값
  let fiftyReviewIndex = getFiftyReviewIndex();

  //5개씩 반복하는 for문의 기준값이 될 변수값
  let fiveReviewIndex = getFiveReviewIndex(fiftyReviewIndex);

  // 리뷰 50개씩 반복하는 반복문
  for (let j = 0; j < fiftyReviewIndex; j++) {
    //리뷰 개수가 50보다 많을때는 fiveReviewIndex값은 13이다
    //50으로 나눈 나머지만큼의 반복을 다시 해야하기 때문에 fiveReviewIndex값을 변경해준다
    fiveReviewIndex = changeFiveReviewIndexWhenLastLoop(
      j,
      fiftyReviewIndex,
      fiveReviewIndex
    );

    // 리뷰 5개씩 반복하는 반복문
    for (let i = 3; i < fiveReviewIndex; i++) {
      // 리뷰 5개를 담고있는 article 태그 리스트 가져오기
      try {
        reviews = getReviewsFromHTML();
      } catch (e) {
        console.log(e);
        return reviewList;
      }
    
      // NodeList => Array
      reviews_arr = Array.prototype.slice.call(reviews);
    
      // 리뷰개수를 5로 나눈 나머지만큼의 반복을 위한 변수
      let lastReviewsCount = 0;
    
      // 리뷰 Array 반복
      for (value in reviews_arr) {
        // 리뷰 개수를 5로 나눈 나머지 만큼 반복
        if (isLastLoop(j, i)) {
          lastReviewsCount++;
        }
    
        if (isLastElement(lastReviewsCount)) {
          break;
        }
    
        //배열에 리뷰객체 저장
        reviewList.push(createReviewDataObject(reviews, value));
      }
    
      //2초 대기
      await sleep(1000);
      // 다음 페이지 버튼 클릭
      try {
        clickNextPageButton(i);
      } catch (e) {
        console.log(e);
        return reviewList;
      }
      await sleep(1000);
    }
  }

  return reviewList;

  function isLastElement(lastReviewsCount) {
    return (
      lastReviewsCount == (numOfReviews % 5 == 0 ? 6 : (numOfReviews % 5) + 1)
    );
  }

  function isLastLoop(j, i) {
    return j == fiftyReviewIndex - 1 && i == fiveReviewIndex - 1;
  }

  function clickNextPageButton(i) {
    document
      .querySelector(
        `#review-list-page-area > div > button`
      )
      .click();
  }

  function createReviewDataObject(reviews, value) {
    let reviewData = Object();
    //작성자 이름
    reviewData.name = getNameFromReview(value);
    // 작성일
    reviewData.date = getDateFromReview(value);
    // 별점
    reviewData.rating = getRatingFromReview(value);
    // 리뷰 내용
    try {
      reviewData.text = getTextFromReview(value);
    } catch (e) {
      console.log(e);
      reviewData.text = "#review-list-page-area > ul > li:nth-child(1) > div > div > div.cont_text_wrap > p.cont_text";
    }

    return reviewData;
    
    function getTextFromReview(value) {
      return reviews[value].querySelector(
        "#review-list-page-area > ul > li:nth-child(1) > div > div > div.cont_text_wrap > p.cont_text"
      ).textContent;
    }
    
    function getRatingFromReview(value) {
      return reviews[value].querySelector(
        "#review-list-page-area > ul > li:nth-child(1) > div > p.grade > span > em"
      ).dataset.rating;
    }
    // #review-list-page-area > ul:nth-child(7) > li:nth-child(1) > div > div > div.cont_text_wrap > p
    function getDateFromReview(value) {
      return reviews[value].querySelector(
        "#review-list-page-area > ul > li:nth-child(1) > div > p.side > span"
      ).textContent;
    }
    
    function getNameFromReview(value) {
      return reviews[value].querySelector(
        "#review-list-page-area > ul > li:nth-child(1) > dl > dt"
      ).textContent;
    }
  }

  function getReviewsFromHTML() {
    return document.querySelectorAll(
      "#review-list-page-area > ul > li:nth-child(1)"
    );
  }

  function changeFiveReviewIndexWhenLastLoop(
    j,
    fiftyReviewIndex,
    fiveReviewIndex
  ) {
    if (j == fiftyReviewIndex - 1 && fiveReviewIndex == 13) {
      return getLastLoopFiveReviewIndex();
    } else {
      return fiveReviewIndex;
    }

    function getLastLoopFiveReviewIndex() {
      if (numOfReviews == 0) {
        return 3;
      }
      return parseInt(((numOfReviews - 1) % 50) / 5) + 1 + 3;
    }
  }

  function getFiveReviewIndex(fiftyReviewIndex) {
    //div list의 index == 3 => 첫번째 리뷰 페이지
    //따라서 3부터 인덱스가 시작한다
    if (fiftyReviewIndex > 1) {
      // 리뷰 개수가 50보다 많으면 13
      return 13;
    }
    if (fiftyReviewIndex == 1) {
      return parseInt(((numOfReviews - 1) % 50) / 5) + 1 + 3;
    }
  }

  function getFiftyReviewIndex() {
    return parseInt((numOfReviews - 1) / 50) + 1;
  }
}
// 리뷰 객체 배열을 json화 한 후 컴퓨터에 저장하는 함수
function getJSONFile(numOfReviews) {
  getReviewsData(numOfReviews).then(function (resolved) {
    let jsonReviews = JSON.stringify(resolved);
    console.log("review_count : " + resolved.length);
    console.save(jsonReviews);
  });
}

getJSONFile(100)
