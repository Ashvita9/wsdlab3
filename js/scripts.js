// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Custom scripts can be added here

    // Example: Parallax effect for a smoother scroll
    let parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', function () {
        let scrollPosition = window.pageYOffset;
        parallaxElements.forEach(function (element) {
            let speed = element.getAttribute('data-speed');
            element.style.backgroundPositionY = (scrollPosition * speed) + 'px';
        });
    });
});
