window.addEventListener('DOMContentLoaded', function () {
    let img = document.getElementById('corgi');
    img.addEventListener('pointerdown', function (e) {
        img.style.opacity = '50%';
    })
    img.addEventListener('pointerup', function () {
        img.style.opacity = '100%';
    })
});