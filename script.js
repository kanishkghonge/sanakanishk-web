document.addEventListener('DOMContentLoaded', function() {
    // Relationship timer
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // Gallery slider
    initSlider();
});

// Relationship start date - February 1, 2018 at 6 PM
const startDate = new Date('2018-02-01T18:00:00');

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;
    
    // Calculate time units
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24) % 30.44); // Average days in a month
    
    // Calculate months and years based on the start date
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Update DOM elements
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('hours').textContent = hours;
    document.getElementById('days').textContent = days;
    document.getElementById('months').textContent = months;
    document.getElementById('years').textContent = years;
}

// Gallery slider functionality
function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!slider || !slides.length || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Set initial position
    updateSliderPosition();
    
    // Add event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSliderPosition();
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSliderPosition();
    });
    
    // Auto slide change
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSliderPosition();
    }, 5000);
    
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
} 