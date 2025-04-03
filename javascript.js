
// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.innerHTML = menu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('active', window.scrollY > 300);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Gallery lightbox
const viewButtons = document.querySelectorAll('.view-btn');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const galleryItem = e.target.closest('.gallery-item');
        const imgSrc = galleryItem.querySelector('img').src;
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For demo, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

function animateNumbers() {
const stats = document.querySelectorAll('.stat-number');
stats.forEach(stat => {
    let target = +stat.getAttribute('data-target');
    let count = 0;
    let increment = Math.ceil(target / 100); // Adjust speed
    let interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        stat.textContent = count + (target > 10 ? "+" : ""); // Add + sign if needed
    }, 20);
});
}

// Trigger animation when scrolling to stats section
function checkScroll() {
const statsSection = document.querySelector('.stats');
const position = statsSection.getBoundingClientRect().top;
if (position < window.innerHeight && !statsSection.dataset.animated) {
    statsSection.dataset.animated = true;
    animateNumbers();
}
}

window.addEventListener('scroll', checkScroll);
