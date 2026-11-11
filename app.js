
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer to handle the slow, dreadful fade-in of elements
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after revealing to keep the tension static once loaded
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    elements.forEach(el => observer.observe(el));

    // Rare, subtle darkness pulses: the page briefly dims as if something passed
    const dreadPulse = () => {
        document.body.classList.add('dread');
        setTimeout(() => document.body.classList.remove('dread'), 400 + Math.random() * 400);
        setTimeout(dreadPulse, 8000 + Math.random() * 12000);
    };
    setTimeout(dreadPulse, 5000 + Math.random() * 5000);
});
