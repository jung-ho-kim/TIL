// 비동기 sleep 함수
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // 11 리뷰 데이터 크롤링 함수
async function getReviewsData(numOfReviews) {
    // 리뷰객체들이 저장될 배열
    let reviewList = new Array();

    // 리뷰 20개씩 반복하는 반복문
    for (20) {
        // 리뷰 20개를 담고있는 article 태그 리스트 가져오기
        try {
            review = getReviewsFromHTML(); 
        }   catch (e) {
            console.log(e);
            return reviewList;
        }

        // NodeList => Array
        reviews_arr = Array.prototype.slice.call(reviews);

        // 리뷰 Array 반복
        for (value in reviews_arr) {
            // 리뷰 개수를 
        }

        // 2초 대기
        await sleep(2000);
        // 다음 페이지 버튼 클릭
        try {
            clickNextPageButton(i);
        }   catch (e) {
            console.log(e);
            return reviewList;
        }
        await sleep(1000);
    }

    return reviewList;

    





}