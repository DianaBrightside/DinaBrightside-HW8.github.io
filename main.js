window.addEventListener('DOMContentLoaded', function () {
    let img = document.getElementById('corgi');
    img.addEventListener('touchstart', function (e) {
        img.style.opacity = '50%';
    })
    img.addEventListener('touchend', function () {
        img.style.opacity = '100%';
    })
});