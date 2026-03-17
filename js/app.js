// Menu Dinámico - App Core
document.addEventListener('DOMContentLoaded', () => {
    console.log('Menu Dinámico: App Initialized');

    // Hide loading screen after 1.5s
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500);
        }
    }, 1500);

    // Category Navigation Interaction
    const catPills = document.querySelectorAll('.cat-pill');
    catPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const active = document.querySelector('.cat-pill.active');
            if (active) active.classList.remove('active');
            pill.classList.add('active');
            console.log(`Switched to category: ${pill.innerText}`);
        });
    });

    // Add to Cart Sim
    const addBtns = document.querySelectorAll('.add-btn');
    const cartBar = document.getElementById('floating-cart');

    addBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Product added to cart');
            // Visual feedback
            btn.style.transform = 'scale(0.8)';
            setTimeout(() => btn.style.transform = 'scale(1)', 100);
        });
    });
});
