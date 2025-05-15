const socialLinks = [
    { url: "https://www.facebook.com/homixidegang", tooltip: "Мы в Facebook" },  // Facebook
    { url: "https://twitter.com/homixidemechie", tooltip: "Мы в Twitter" },     // Twitter
    { url: "https://www.instagram.com/homixidemechie", tooltip: "Мы в Instagram" }, // Instagram
    { url: "https://www.youtube.com/@homixidegang55555", tooltip: "Смотреть YouTube" }, // YouTube
    {url: "https://music.apple.com/us/artist/homixide-gang/1565025798", tooltip: "Слушать в Apple"},//apple
    { url: "https://open.spotify.com/artist/2ojqsY1ycYzZOpLDBBwHPU?si=w3sGiRjrQTGPFvguu1H5KA", tooltip: "Слушать в Spotify" }  // Spotify
];

// ищет все ссылки
const socialIcons = document.querySelectorAll(".social-icons a");

// дает каждой svg ссылку
socialIcons.forEach((link, index) => {
    if (socialLinks[index]) { 
        // Добавляем ссылку
        link.href = socialLinks[index].url;
        link.target = "_blank"; // он откроет новое окно

        // вроде сосздает элемент подсказки
        const tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        tooltip.textContent = socialLinks[index].tooltip;

        // подсказака
        link.appendChild(tooltip);
    }
});
