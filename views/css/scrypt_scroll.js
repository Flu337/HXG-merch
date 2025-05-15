const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// событие прокрутки
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 300) {
        // кнопка появилась
        scrollToTopBtn.classList.add("show");

        // ограничение
        const maxTranslateY = 0; 
        const translateY = Math.min(scrollY / 10, maxTranslateY);
        scrollToTopBtn.style.transform = `translateY(${translateY}px)`;
    } else {
        // кнопки нету а вот она есть
        scrollToTopBtn.classList.remove("show");
        scrollToTopBtn.style.transform = `translateY(0px)`;
    }
});

// на вверх улетает
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
