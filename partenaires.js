const images = document.querySelectorAll(".partner-image img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const bigImg = document.createElement("img");
        bigImg.src = img.src;

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target.querySelector(".partner-text");
            const image = entry.target.querySelector(".partner-image");

            text.classList.add("show");

            setTimeout(() => {
                image.classList.add("show");
            }, 200); 
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll(".partner-row").forEach(row => {
    observer.observe(row);
});
document.querySelectorAll(".partner-row").forEach(row => {
    const text = row.querySelector(".partner-text");
    const image = row.querySelector(".partner-image");

    if (row.classList.contains("reverse")) {
        text.style.transform = "translateX(50px)";
        image.style.transform = "translateX(-50px)";
    }
});