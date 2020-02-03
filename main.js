window.addEventListener('DOMContentLoaded', function () {
    let img = document.getElementById('corgi');
    img.addEventListener('touchstart', function (ev) {
        ev.preventDefault();
        ev.target.style.opacity = '50%';
    }, false)
    img.addEventListener('touchend', function (ev) {
        ev.preventDefault();
        ev.target.style.opacity = '100%';
    }, false)
});