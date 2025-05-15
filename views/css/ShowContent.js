document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector('.overlay');

    // в муссорку хайден
    setTimeout(() => {
        overlay.classList.add('hidden');
        
        // в муссорку
        setTimeout(() => {
            overlay.style.display = 'none'; //пропал
        }, 2000); //время
    }, 3000); // ичезает
});
