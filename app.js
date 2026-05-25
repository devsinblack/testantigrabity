/* ==========================================================================
   INTERACTIVE SCRIPT - F8 AGENCY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burgerMenu.classList.toggle('active');
      
      // Animate burger spans
      const spans = burgerMenu.querySelectorAll('span');
      if (burgerMenu.classList.contains('active')) {
        spans[0].style.transform = 'translateY(8px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // 2. Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Form Submissions Simulation
  const forms = document.querySelectorAll('.cta-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]') || form.querySelector('input[type="text"]');
      if (input && input.value.trim() !== '') {
        const originalBtnText = form.querySelector('.btn').innerHTML;
        const btn = form.querySelector('.btn');
        
        // Show loading state
        btn.innerHTML = 'Envoi en cours...';
        btn.disabled = true;
        
        setTimeout(() => {
          // Show success state
          btn.innerHTML = '✔ Envoyé !';
          btn.style.backgroundColor = '#10B981';
          btn.style.borderColor = '#10B981';
          btn.style.color = '#ffffff';
          input.value = '';
          
          alert('Merci ! Votre demande d\'appel a bien été enregistrée. Un conseiller vous recontactera d\'ici quelques heures.');
          
          setTimeout(() => {
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
            btn.style.backgroundColor = '';
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 3000);
        }, 1500);
      } else {
        alert('Veuillez entrer une adresse email valide.');
      }
    });
  });

  // 4. Interactive Add-ons (Lead Generation Page)
  const addonButtons = document.querySelectorAll('.addon-card .btn');
  addonButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('btn-primary')) {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-accent');
        btn.innerHTML = 'Ajouté ✔';
        btn.style.backgroundColor = '#10B981';
        btn.style.borderColor = '#10B981';
      } else {
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-accent');
        btn.innerHTML = 'Ajouter au package';
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
      }
    });
  });
  
  // 5. Interactive pricing cards formula choice
  const priceButtons = document.querySelectorAll('.price-card .btn');
  priceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cardTitle = btn.closest('.price-card').querySelector('h3').innerText;
      alert(`Félicitations ! Vous avez sélectionné le ${cardTitle}. Un conseiller va vous appeler pour finaliser votre campagne.`);
    });
  });
});
