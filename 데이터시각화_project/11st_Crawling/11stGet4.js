
// 비동기 sleep 함수
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getReviewsData(numOfReviews) {

let reviewList = new Array();

// 리뷰 20개씩 반복하는 반복문
for (let i = 0; i < numOfReviews; i++) {
  reviews = getReviewsFromHTML(i);

  // NodeList => Array
  reviews_arr = Array.prototype.slice.call(reviews);

  // 리뷰 Array 반복
  for (value in reviews_arr) {
    // 배열에 리뷰객체 저장
    reviewList.push(createReviewDataObject(reviews, value));
  }

  // 2초 대기     
  await sleep(2000);
  // 다음 페이지 버튼 클릭
  try {
    clickNextPageButton();
  } catch (e) {
    console.log(e);
  }
  await sleep(4000);
}

function clickNextPageButton() {
  document.querySelector('#ifrmReview').contentDocument.querySelector(
    '#review-list-page-area > div > button'
    )
    .click();
} 

function createReviewDataObject(reviews, value) {
  let reviewData = Object();
  // 이름
  reviewData.name = getNameFromReview(value);
  // 작성일
  reviewData.date = getDateFromReview(value);
  // 별점
  reviewData.rating = getRatingFromReview(value);
  // 리뷰 내용
  reviewData.text = getTextFromReview(value);

  return reviewData;

  function getNameFromReview(value) {
    return reviews[value].querySelector(
      'dl > dt'
    ).textContent;
  }

  function getDateFromReview(value) {
    return reviews[value].querySelector(
      'div > p.side > span'
    ).textContent;
  }

  function getRatingFromReview(value) {
    return reviews[value].querySelector(
      'div > p.grade > span > em'
    ).textContent;
  }

  function getTextFromReview(value) {
    return reviews[value].querySelector(
      'div > div > div.cont_text_wrap > p.cont_text'
    ).textContent;
  }
}

function getReviewsFromHTML(i) {
  return reviews = document.querySelector('#ifrmReview').contentDocument.querySelectorAll(`#review-list-page-area > ul:nth-child(${i+1}) > li`);
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

