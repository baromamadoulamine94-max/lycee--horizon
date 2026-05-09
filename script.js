// ============================================
// Lycée Horizon - Script JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // 1. Message de bienvenue au chargement (page d'accueil uniquement)
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') {
        setTimeout(function() {
            alert('Bienvenue au Lycée Horizon ! Nous sommes ravis de vous accueillir sur notre site.');
        }, 800);
    }

    // 2. Bouton interactif sur la page Annonces
    const alertBtn = document.getElementById('btn-alert');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            alert('📢 Merci de consulter régulièrement les annonces du Lycée Horizon !\n\nRestez informé(e) des examens, vacances et réunions importantes.');
        });
    }

    // 3. Validation du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nom = document.getElementById('nom');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            let isValid = true;

            // Réinitialise les messages d'erreur
            document.querySelectorAll('.error-msg').forEach(function(el) {
                el.classList.remove('visible');
            });

            // Validation du nom
            if (nom.value.trim() === '') {
                document.getElementById('error-nom').classList.add('visible');
                nom.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                nom.style.borderColor = '#e2e8f0';
            }

            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                document.getElementById('error-email').textContent = 'Veuillez entrer votre adresse email.';
                document.getElementById('error-email').classList.add('visible');
                email.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                document.getElementById('error-email').textContent = 'Veuillez entrer une adresse email valide.';
                document.getElementById('error-email').classList.add('visible');
                email.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                email.style.borderColor = '#e2e8f0';
            }

            // Validation du message
            if (message.value.trim() === '') {
                document.getElementById('error-message').classList.add('visible');
                message.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                message.style.borderColor = '#e2e8f0';
            }

            // Si tout est valide
            if (isValid) {
                alert('Merci ' + nom.value.trim() + ' ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.');
                contactForm.reset();
            }
        });

        // Efface l'erreur quand l'utilisateur tape
        ['nom', 'email', 'message'].forEach(function(id) {
            const field = document.getElementById(id);
            if (field) {
                field.addEventListener('input', function() {
                    field.style.borderColor = '#e2e8f0';
                    const errorEl = document.getElementById('error-' + id);
                    if (errorEl) {
                        errorEl.classList.remove('visible');
                    }
                });
            }
        });
    }

    // 4. Mise en évidence du lien actif dans le menu
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

});
