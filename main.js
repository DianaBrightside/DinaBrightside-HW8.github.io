window.addEventListener('DOMContentLoaded', function () {
    let img = document.getElementById('corgi');
    img.addEventListener('touchstart', function () {
        event.target.style.opacity = '50%';
    })
    img.addEventListener('touchend', function () {
        event.target.style.opacity = '100%';
    })
});