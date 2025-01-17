function openFullscreen(img) {
    var fullscreenImg = document.getElementById("fullscreen");
    var fullscreenImage = document.getElementById("fullscreen-image");
    fullscreenImage.src = img.src;
    fullscreenImg.style.display = "flex";
}

function closeFullscreen() {
    var fullscreenImg = document.getElementById("fullscreen");
    fullscreenImg.style.display = "none";
}

function toggleMenu() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('active');
}
