function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getReviewsData(numOfReviews) {
  let jsonData = new Array();

  let fiftyReviewIndex = 0;
  if (parseInt(numOfReviews / 50) >= 1 && numOfReviews % 50 == 0) {
    fiftyReviewIndex = parseInt(numOfReviews / 50);
  } else if (parseInt(numOfReviews / 50) >= 1 && numOfReviews % 50 != 0) {
    fiftyReviewIndex = parseInt(numOfReviews / 50) + 1;
  } else if (parseInt(numOfReviews / 50) == 0) {
    fiftyReviewIndex = 1;
  }

  let restItemsNum = numOfReviews % 5;
  let fiveReviewIndex = 0;
  if (fiftyReviewIndex > 1) {
    fiveReviewIndex = 13;
  } else if (parseInt(numOfReviews / 5) >= 1 && numOfReviews % 5 == 0) {
    fiveReviewIndex = parseInt((numOfReviews % 50) / 5) + 3;
  } else if (parseInt(numOfReviews / 5) >= 1 && numOfReviews % 5 != 0) {
    fiveReviewIndex = parseInt((numOfReviews % 50) / 5) + 4;
  } else if (parseInt(numOfReviews / 5) < 1 && numOfReviews % 5 != 0) {
    fiveReviewIndex = 4;
  } else {
    fiveReviewIndex = 3;
  }

  console.log(fiveReviewIndex);
  console.log(fiftyReviewIndex);

  for (let j = 0; j < fiftyReviewIndex; j++) {
    if (j == fiftyReviewIndex - 1 && fiftyReviewIndex == 13) {
      if (parseInt(numOfReviews / 5) >= 1 && numOfReviews % 5 == 0) {
        fiveReviewIndex = parseInt((numOfReviews % 50) / 5) + 3;
      } else if (parseInt(numOfReviews / 5) >= 1 && numOfReviews % 5 != 0) {
        fiveReviewIndex = parseInt((numOfReviews % 50) / 5) + 4;
      } else if (parseInt(numOfReviews / 5) < 1 && numOfReviews % 5 != 0) {
        fiveReviewIndex = 4;
      } else {
        fiveReviewIndex = 3;
      }
    }
    for (let i = 3; i < fiveReviewIndex; i++) {
      reviews = document.querySelectorAll(
        "#btfTab > ul.tab-contents > li.product-review > div > div.sdp-review__article.js_reviewArticleContainer > section.js_reviewArticleListContainer > article"
      );
      reviews_arr = Array.prototype.slice.call(reviews);

      let lastReviewsCount = 0;

      for (value in reviews_arr) {
        if (j == fiftyReviewIndex - 1 && i == fiveReviewIndex - 1) {
          lastReviewsCount++;
          if (lastReviewsCount == restItemsNum + 1) {
            break;
          }
        }
        let name = reviews[value].querySelector(
          "div.sdp-review__article__list__info > div.sdp-review__article__list__info__user > span"
        ).textContent;
        let date = reviews[value].querySelector(
          "div.sdp-review__article__list__info > div.sdp-review__article__list__info__product-info > div.sdp-review__article__list__info__product-info__reg-date"
        ).textContent;
        let rating = reviews[value].querySelector(
          "div.sdp-review__article__list__info > div.sdp-review__article__list__info__product-info > div.sdp-review__article__list__info__product-info__star-gray > div"
        ).dataset.rating;
        let text = reviews[value].querySelector(
          "div.sdp-review__article__list__review.js_reviewArticleContentContainer > div"
        ).textContent;
        let data = Object();
        data.name = name;
        data.date = date;
        data.rating = rating;
        data.text = text;
        jsonData.push(data);
      }
      await sleep(2000);
      document
        .querySelector(
          `#btfTab > ul.tab-contents > li.product-review > div > div.sdp-review__article.js_reviewArticleContainer > section.js_reviewArticleListContainer > div.sdp-review__article__page.js_reviewArticlePagingContainer > button:nth-child(${i})`
        )
        .click();
      await sleep(2000);
    }
  }
  return jsonData;
}
function getJSONFile(numOfReviews) {
  getReviewsData(numOfReviews).then(function (resolved) {
    let jsonReviews = JSON.stringify(resolved);
    console.log(jsonReviews.length);
    console.save(jsonReviews);
  });
}
