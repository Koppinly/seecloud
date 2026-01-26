// main.js for seecloud.io

document.addEventListener('DOMContentLoaded', function () {
  // Animate resume button on hover
  const resumeBtn = document.querySelector('.resume');
  if (resumeBtn) {
    resumeBtn.addEventListener('mouseenter', function () {
      resumeBtn.style.transform = 'scale(1.08)';
    });
    resumeBtn.addEventListener('mouseleave', function () {
      resumeBtn.style.transform = '';
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }
      alert('Thank you for your message, ' + name + '! I will get back to you soon.');
      // Optionally close the modal (Bootstrap)
      if (window.jQuery && $('#contactModal').modal) {
        $('#contactModal').modal('hide');
      }
      contactForm.reset();
    });
  }

  // Nav menu dropdown
  const menuTrigger = document.querySelector('.menu-trigger');
  const navMenu = document.querySelector('.nav-menu');
  if (menuTrigger && navMenu) {
    menuTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      navMenu.style.opacity = navMenu.style.opacity === '1' ? '0' : '1';
      navMenu.style.visibility = navMenu.style.visibility === 'visible' ? 'hidden' : 'visible';
      navMenu.style.transform = navMenu.style.opacity === '1' ? 'translateX(-50%) translateY(5px)' : 'translateX(-50%)';
    });
    document.addEventListener('click', function () {
      navMenu.style.opacity = '0';
      navMenu.style.visibility = 'hidden';
      navMenu.style.transform = 'translateX(-50%)';
    });
  }

  // Explore dropdown click-to-toggle
  document.querySelectorAll('.explore-dropdown .menu-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      // Close any other open dropdowns
      document.querySelectorAll('.explore-dropdown .menu-trigger.active').forEach(function(active) {
        if (active !== trigger) active.classList.remove('active');
      });
      trigger.classList.toggle('active');
    });
  });
  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    document.querySelectorAll('.explore-dropdown .menu-trigger.active').forEach(function(active) {
      active.classList.remove('active');
    });
  });
});
