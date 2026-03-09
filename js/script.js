document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].clientWidth;

    let currentIndex = 0;

    function slideTo(index) {
        if (index < 0 || index >= slides.length) {
            return;
        }
        slider.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        slideTo(currentIndex);
    }, 3000); // Cambia de imagen cada 3 segundos
});


