document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let intervalId;

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    }

    function updateSlider() {
        slides.forEach(slide => slide.style.display = 'none');
        slides[currentIndex].style.display = 'block';

        // 현재 이미지에 해당하는 도트를 활성화합니다.
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 2000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    // 초기에 첫 번째 이미지만 보이도록 설정
    updateSlider();
    startAutoSlide();

    // 좌우 버튼 클릭 이벤트 처리
    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // 도트 클릭 이벤트 처리
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index
            updateSlider();
            startAutoSlide();
        });
    });

    // 마우스가 이미지 위에 올라가면 슬라이더를 멈춥니다.
    slider.addEventListener('mouseenter', () => {
        stopAutoSlide();
    });
    
    // 마우스가 이미지를 벗어나면 다시 시작합니다.
    slider.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});
