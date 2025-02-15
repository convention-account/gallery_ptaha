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

// Function to show the alert
function showAlert(message) {
    const alert = document.getElementById("simple-alert");
    const alertMessage = alert.querySelector(".alert-message");
    alertMessage.textContent = message;
    alert.style.display = "block";
}

// Function to close the alert
function closeAlert() {
    const alert = document.getElementById("simple-alert");
    alert.style.display = "none";
}

// Example usage: Show alert when the page loads
window.onload = () => {
    showAlert("Увага! Фото ще завантажуються на сайт, вибачте за незручності!");
};

