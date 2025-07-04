// Mobile sidebar toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileSidebar = document.getElementById('mobileSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

mobileToggle.addEventListener('click', function() {
    mobileSidebar.classList.add('show');
    sidebarOverlay.classList.add('show');
});

sidebarOverlay.addEventListener('click', function() {
    mobileSidebar.classList.remove('show');
    sidebarOverlay.classList.remove('show');
});

// Desktop navbar smooth scrolling
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Smooth scroll to section
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile sidebar navigation
document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close sidebar
        mobileSidebar.classList.remove('show');
        sidebarOverlay.classList.remove('show');
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetId === 'contact') {
            const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
            contactModal.show();
        } else if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter projects (simplified - in a real app you'd filter based on categories)
        const projects = document.querySelectorAll('.project-card');
        projects.forEach(project => {
            project.style.display = 'block';
        });
    });
});

// Scroll effect for navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Desktop navbar smooth scrolling
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Smooth scroll to section or open modal
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetId === 'contact') {
            const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
            contactModal.show();
        } else if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
