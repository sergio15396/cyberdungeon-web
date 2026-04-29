document.addEventListener('DOMContentLoaded', function () {
    setupTabListeners();
    initializeMonsterFiltering();
});

// Inicializa el filtrado de monstruos por nivel
function initializeMonsterFiltering() {
    filterMonstersByLevel(1);
}

// Filtra los monstruos por nivel y actualiza la interfaz
function filterMonstersByLevel(level) {
    const monsterCards = document.querySelectorAll('.monster-card');

    // Mostrar monstruos según el nivel
    monsterCards.forEach(card => {
        const cardLevel = parseInt(card.dataset.level);
        if (cardLevel === level) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Cambio de pestañas
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Mostrar la pestaña seleccionada
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Actualizar enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.dataset.tab === tabName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    closeMobileMenu();

    // Hacer scroll al inicio de la página
    window.scrollTo(0, 0);
}

// Configurar los eventos de las pestañas
function setupTabListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
}

// Menú móvil: abrir/cerrar
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const currentDisplay = window.getComputedStyle(mobileMenu).display;

    if (currentDisplay === 'none') {
        mobileMenu.style.display = 'flex';
        mobileMenu.classList.add('active');
    } else {
        mobileMenu.style.display = 'none';
        mobileMenu.classList.remove('active');
    }
}

// Cerrar el menú móvil
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('active');
}

// Cerrar el menú móvil al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuLinks = document.querySelectorAll('.nav-link-mobile');
    mobileMenuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMobileMenu();
        });
    });

    // Cerrar el menú móvil al hacer clic fuera de él
    document.addEventListener('click', function (event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuToggle = document.querySelector('.mobile-menu-toggle');

        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                closeMobileMenu();
            }
        }
    });
});