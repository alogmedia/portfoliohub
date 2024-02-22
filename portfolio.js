document.addEventListener("DOMContentLoaded", function() {
    const portfolioSection = document.querySelector('.portfolio');
    const portfolioContent = document.querySelector('.portfolio-content');

    function checkVisibility() {
        const rect = portfolioSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if the portfolio section is within the viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            portfolioContent.classList.add('portfolio-visible');
        } else {
            portfolioContent.classList.remove('portfolio-visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the section is already in view
});
