// ========================================
// Portfolio Script
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // ========================================
  // Navbar Scroll Effect
  // ========================================
  const navbar = document.getElementById('navbar');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
  const closeIcon = mobileMenuBtn.querySelector('.close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.add('active');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });

  // ========================================
  // Scroll Animation Observer
  // ========================================
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally stop observing after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateOnScrollElements.forEach(el => {
    observer.observe(el);
  });

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Form Handling
  // ========================================
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
  });

  // ========================================
  // Input Focus Effects
  // ========================================
  const formInputs = document.querySelectorAll('.form-input');

  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      const underline = this.nextElementSibling;
      if (underline && underline.classList.contains('input-underline')) {
        underline.style.transform = 'scaleX(1)';
      }
    });

    input.addEventListener('blur', function() {
      const underline = this.nextElementSibling;
      if (underline && underline.classList.contains('input-underline')) {
        underline.style.transform = 'scaleX(0)';
      }
    });
  });

  // ========================================
  // Project Card Hover Effects
  // ========================================
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const hoverGradient = this.querySelector('.project-hover-gradient');
      const arrow = this.querySelector('.project-arrow');
      
      if (hoverGradient) {
        hoverGradient.style.opacity = '1';
        hoverGradient.style.transform = 'scale(1)';
      }
      if (arrow) {
        arrow.style.opacity = '1';
        arrow.style.transform = 'translate(0, 0)';
      }
    });

    card.addEventListener('mouseleave', function() {
      const hoverGradient = this.querySelector('.project-hover-gradient');
      const arrow = this.querySelector('.project-arrow');
      
      if (hoverGradient) {
        hoverGradient.style.opacity = '0';
        hoverGradient.style.transform = 'scale(0.8)';
      }
      if (arrow) {
        arrow.style.opacity = '0';
        arrow.style.transform = 'translate(-10px, 10px)';
      }
    });
  });

  // ========================================
  // Skill Pills Hover Effect
  // ========================================
  const skillPills = document.querySelectorAll('.skill-pill');

  skillPills.forEach((pill, index) => {
    // Stagger the animation on scroll
    pill.style.transitionDelay = `${index * 0.05}s`;
  });

  // ========================================
  // Nav Link Hover Effect
  // ========================================
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // ========================================
  // Profile Photo Error Handling
  // ========================================
  const profileImages = document.querySelectorAll('.profile-img');
  
  profileImages.forEach(img => {
    img.addEventListener('load', function() {
      this.style.display = 'block';
      const initials = this.nextElementSibling;
      if (initials) {
        initials.style.display = 'none';
      }
    });

    img.addEventListener('error', function() {
      this.style.display = 'none';
      const initials = this.nextElementSibling;
      if (initials) {
        initials.style.display = 'flex';
      }
    });
  });
});
