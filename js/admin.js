// Menu Dinámico - Admin Dashboard Core
document.addEventListener('DOMContentLoaded', () => {
    console.log('Admin Dashboard: Initialized');

    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500);
        }
    }, 1000);

    // Sidebar Navigation Switching
    const navItems = document.querySelectorAll('.nav-item');
    const viewTitle = document.getElementById('view-title');
    const viewSubtitle = document.getElementById('view-subtitle');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const view = item.getAttribute('data-view');
            
            // Update Active State
            document.querySelector('.nav-item.active').classList.remove('active');
            item.classList.add('active');

            // Update Header
            updateHeader(view);
            console.log(`Switched to view: ${view}`);
        });
    });

    function updateHeader(view) {
        const titles = {
            dashboard: { t: 'Resumen General', s: 'Bienvenido de nuevo, Admin.' },
            orders: { t: 'Gestión de Pedidos', s: 'Controla y actualiza los pedidos en tiempo real.' },
            products: { t: 'Catálogo de Productos', s: 'Añade, edita o elimina platos de tu carta.' },
            analytics: { t: 'Estadísticas y Reportes', s: 'Analiza el rendimiento de tu negocio.' },
            settings: { t: 'Configuración', s: 'Personaliza tu marca y opciones de la app.' }
        };

        if (titles[view]) {
            viewTitle.innerText = titles[view].t;
            viewSubtitle.innerText = titles[view].s;
        }
    }

    // Simple Order Status Mock Logic
    const orderRows = document.querySelectorAll('.order-row');
    orderRows.forEach(row => {
        row.addEventListener('click', () => {
            const id = row.querySelector('.order-id').innerText;
            alert(`Detalle del pedido ${id} (Próximamente con Firebase)`);
        });
    });
});
