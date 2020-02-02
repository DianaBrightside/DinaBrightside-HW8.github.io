window.addEventListener('DOMContentLoaded', function () {
    let img = document.getElementById('corgi');
    img.addEventListener('touchstart', handleStart, function (e) {
        img.style.opacity = '50%';
    })
    img.addEventListener('touchend', handleEnd, function () {
        img.style.opacity = '100%';
    })
});