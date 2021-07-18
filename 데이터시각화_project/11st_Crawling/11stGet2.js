//
// var reviews = document.querySelectorAll('#review-list-page-area > ul > li');

// var reviewList = [];

// var reviews_arr = Array.prototype.slice.call(reviews);

// for(value in reviews_arr){
//   reviewList.push(reviews[value].querySelector('div > p.grade > span > em').textContent);
// }

// for(value in reviews_arr){
//   reviewList.push(reviews[value].querySelector('div > p.side > span').textContent);
// }

// for(value in reviews_arr){
//   reviewList.push(reviews[value].querySelector('div > div > div.cont_text_wrap > p.cont_text').textContent);
// }

// for(value in reviews_arr){
//   reviewList.push(reviews[value].querySelector('dl > dt').textContent);
// }

// for (let i = 0; i < //더보기버튼; i++) {

// function button() {
//   document
//   .querySelector('#review-list-page-area > div > button').click();
// }

frame.contentDocument.querySelectorAll('#review-list-page-area > ul > li')

var frame = document.querySelector('#ifrmReview').contentDocument

var reviewList = [];

var reviews_arr = Array.prototype.slice.call(reviews);

var reviews = frame.contentDocument.querySelectorAll('#review-list-page-area > ul > li');

for(value in reviews_arr){
  reviewList.push(reviews[value].querySelector('div > p.grade > span > em').textContent);
}

for(value in reviews_arr){
  reviewList.push(reviews[value].frame.contentDocument.querySelector('div > p.side > span').textContent);
}

for(value in reviews_arr){
  reviewList.push(reviews[value].frame.contentDocument.querySelector('div > div > div.cont_text_wrap > p.cont_text').textContent);
}

for(value in reviews_arr){
  reviewList.push(reviews[value].frame.contentDocument.querySelector('dl > dt').textContent);
}

// name
// #review-list-page-area > ul > li:nth-child(1) > dl > dt

// rate
// #review-list-page-area > ul > li:nth-child(1) > div > p.grade > span > em

// date
// #review-list-page-area > ul > li:nth-child(1) > div > p.side > span

// text
// #review-list-page-area > ul > li:nth-child(1) > div > div > div.cont_text_wrap > p.cont_text

var frame = document.querySelector('#ifrmReview').contentDocument

var reviews = frame.querySelectorAll(`#review-list-page-area > ul:nth-child(${i}) > li`);

for (let i = 0 ; i < reviews.length ; i++){
  console.log(reviews[i].querySelector('div > div > div.cont_text_wrap > p.cont_text').textContent);
}