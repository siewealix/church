document.addEventListener('DOMContentLoaded', function() {
    // Header transparent au scroll
    const header = document.querySelector('.header-transparent');
    const headerHeight = header.offsetHeight;

    function updateHeader() {
        if (window.scrollY > headerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader();

    // Menu mobile toggle avec animation
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const spans = menuToggle.querySelectorAll('span');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animation du hamburger
        spans[0].classList.toggle('rotate-45');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-negative-45');
    });

    // Fermer le menu mobile lors du clic sur un lien
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            spans[0].classList.remove('rotate-45');
            spans[1].classList.remove('opacity-0');
            spans[2].classList.remove('rotate-negative-45');
        });
    });

    // Smooth scroll avec offset pour le header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation des éléments au scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Éléments à animer
    const animatedElements = document.querySelectorAll(
        '.service-card, .horaire-card, .location-card, .feature'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        animateOnScroll.observe(element);
    });

    // Parallax effect pour le hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

    // Animation du texte du hero
    const heroTitle = document.querySelector('.hero-content h1');
    const words = heroTitle.textContent.split(' ');
    heroTitle.innerHTML = words.map(word => 
        `<span class="word">${word}</span>`
    ).join(' ');

    // Ajouter une classe pour déclencher l'animation des mots
    setTimeout(() => {
        document.querySelectorAll('.word').forEach((word, index) => {
            word.style.animationDelay = `${index * 0.2}s`;
            word.classList.add('animate');
        });
    }, 500);
}); 