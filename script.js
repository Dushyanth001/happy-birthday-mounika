window.onload = function () {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "none";
    }, 3000);

    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(() => {});
    }
};
