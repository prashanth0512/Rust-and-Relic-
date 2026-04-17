document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tilt-card, .pricing-card');

    const handleTilt = (e, card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTilt = (card) => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => handleTilt(e, card));
        card.addEventListener('mouseleave', () => resetTilt(card));
        
        card.style.transition = 'transform 0.1s ease-out';
    });

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        
        const spheres = document.querySelectorAll('.sphere');
        spheres.forEach((sphere, index) => {
            const factor = (index + 1) * 0.5;
            sphere.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });

    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            if (moonIcon) moonIcon.style.display = 'none';
            if (sunIcon) sunIcon.style.display = 'block';
        } else {
            if (moonIcon) moonIcon.style.display = 'block';
            if (sunIcon) sunIcon.style.display = 'none';
        }
    }
});

if (document.querySelector('.countdown')) {
    const daysEl = document.querySelector('.days .count-val');
    const hoursEl = document.querySelector('.hours .count-val');
    const minutesEl = document.querySelector('.minutes .count-val');
    const secondsEl = document.querySelector('.seconds .count-val');

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        if (secondsEl) secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
}
