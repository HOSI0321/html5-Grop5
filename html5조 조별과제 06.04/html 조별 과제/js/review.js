document.addEventListener("DOMContentLoaded", function () {
  const loadMorePhotosButton = document.getElementById("loadMorePhotos");
  const photoImages = document.querySelectorAll("#imageGallery img");
  let visiblePhotoCount = 9;

  // 초기 9개 이미지 표시
  for (let i = 0; i < visiblePhotoCount; i++) {
    if (photoImages[i]) {
      photoImages[i].classList.add("visible");
    }
  }

  // 포토후기 더보기 버튼 클릭 이벤트
  loadMorePhotosButton.addEventListener("click", function (event) {
    event.preventDefault();
    const nextVisiblePhotoCount = visiblePhotoCount + 9;
    for (let i = visiblePhotoCount; i < nextVisiblePhotoCount; i++) {
      if (photoImages[i]) {
        photoImages[i].classList.add("visible");
      }
    }
    visiblePhotoCount = nextVisiblePhotoCount;

    // 모든 이미지를 다 보여주면 버튼 숨김
    if (visiblePhotoCount >= photoImages.length) {
      loadMorePhotosButton.style.display = "none";
    }
  });

  const loadMoreReviewsButton = document.getElementById("loadMoreReviews");
  const reviewItems = document.querySelectorAll("#reviewList .review-item");
  let visibleReviewCount = 8;

  // 초기 8개 리뷰 표시
  for (let i = 0; i < visibleReviewCount; i++) {
    if (reviewItems[i]) {
      reviewItems[i].classList.add("visible");
    }
  }

  // 생생리뷰 더보기 버튼 클릭 이벤트
  loadMoreReviewsButton.addEventListener("click", function (event) {
    event.preventDefault();
    const nextVisibleReviewCount = visibleReviewCount + 8;
    for (let i = visibleReviewCount; i < nextVisibleReviewCount; i++) {
      if (reviewItems[i]) {
        reviewItems[i].classList.remove("hidden");
        reviewItems[i].classList.add("visible");
      }
    }
    visibleReviewCount = nextVisibleReviewCount;

    // 모든 리뷰를 다 보여주면 버튼 숨김
    if (visibleReviewCount >= reviewItems.length) {
      loadMoreReviewsButton.style.display = "none";
    }
  });
});
