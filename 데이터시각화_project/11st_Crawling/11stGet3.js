
// 비동기 sleep 함수
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

async function getTime() {

  let input = prompt('');
  input = Number(input);

  let reviewList = new Array();

  for (let j = 0; j < input; j++){
    var frame = document.querySelector('#ifrmReview').contentDocument
    reviews = frame.querySelectorAll(`#review-list-page-area > ul:nth-child(${j}) > li`);
    
    for (let i = 0 ; i < reviews.length ; i++){
      //name
      console.log(reviews[i].querySelector('dl > dt').textContent);
      //rate
      console.log(reviews[i].querySelector('div > p.grade > span > em').textContent);
      //date
      console.log(reviews[i].querySelector('div > p.side > span').textContent);
      //text
      console.log(reviews[i].querySelector('div > div > div.cont_text_wrap > p.cont_text').textContent);
    }

  frame.querySelector('#review-list-page-area > div > button').click();
  await sleep(2000)
  }


function createReviewDataObject(reviews, value) {
  let reviewData = Object();
  // 이름
  reviewData.name = getRatingFromReview(value);
  // 작성일
  reviewData.date = getRatingFromReview(value);
  // 별점
  reviews.rating = getRatingFromReview(value);
  // 리뷰 내용
  reviewData.text = getRatingFromReview(value);

  return reviewData;

  function getNameFromReview(value) {
    return reviews[value].querySelector(
      'dl > dt'
    ).dataset.rating;
  }

  function getDateFromReview(value) {
    return reviews[value].querySelector(
      'div > p.side > span'
    ).dataset.rating;
  }

  function getRatingFromReview(value) {
    return reviews[value].querySelector(
      'div > p.grade > span > em'
    ).dataset.rating;
  }

  function getTextNameFromReview(value) {
    return reviews[value].querySelector(
      'div > div > div.cont_text_wrap > p.cont_text'
    ).dataset.rating;
  }
}

function getReviewsFromHTML() {
  var frame = document.querySelector('#ifrmReview').contentDocument
  return reviews = frame.querySelectorAll(`#review-list-page-area > ul:nth-child(${j}) > li`);
}
}