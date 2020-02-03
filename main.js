window.addEventListener('load', function () {
    let img = document.getElementById('corgi');
    img.addEventListener('touchstart', function (ev) {
        ev.preventDefault();
        ev.target.style.opacity = '50%';
    }, true)
    img.addEventListener('touchend', function (ev) {
        ev.preventDefault();
        ev.target.style.opacity = '100%';
    }, true)
});