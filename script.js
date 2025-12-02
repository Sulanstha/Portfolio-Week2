// ======= MENU TOGGLE SCRIPT =======
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('open');
    
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

// Close menu when clicking on a link (for mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});

// ======= CONTACT FORM VALIDATION =======
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();
        
        if (nameInput === '' || emailInput === '' || messageInput === '') {
            formMessage.textContent = 'Please fill out all required fields.';
            formMessage.style.color = 'red';
        } else {
            // Form submission successful
            formMessage.textContent = 'Thank you for your message! I will be in touch shortly.';
            formMessage.style.color = 'green';
            
            // Clear form fields
            contactForm.reset();
        }
    });
}

// ======= OPTIONAL: SCROLL INDICATOR =======
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // Create or update progress bar
    let progressBar = document.getElementById('scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.height = '4px';
        progressBar.style.backgroundColor = '#3a6ff7';
        progressBar.style.zIndex = '1000';
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
});