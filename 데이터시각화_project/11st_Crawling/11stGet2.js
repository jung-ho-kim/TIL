var reviews = document.querySelectorAll('#review-list-page-area > ul > li');

var reviewList = [];

var reviews_arr = Array.prototype.slice.call(reviews);

for(value in reviews_arr){
  reviewList.push(reviews[value].querySelector('di > dt').textContent);
}
// #review-list-page-area > ul > li:nth-child(1) > dl > dt
#review-list-page-area > ul > li:nth-child(1) > div > p.grade > span > em