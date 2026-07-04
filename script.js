window.onload = function () {
    const music = document.getElementById("bgmusic");

    if (music) {
        music.play().catch(() => {});
    }
};
