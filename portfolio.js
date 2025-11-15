// ================================
// 3️⃣ Bouton "Voir mes Projets"
// ================================
const btnProjets = document.querySelector(".first .btn");

btnProjets.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#projet").scrollIntoView({
        behavior: "smooth"
    });
});


// ================================
//  FORMULAIRE INTERACTIF
// ================================

// 1. Sélection du formulaire
const form = document.getElementById("form");

// 2. Vérification en direct des champs
form.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("input", () => {
        if (field.value.trim() !== "") {
            field.classList.remove("error");
        }
    });
});

// 3. Gestion de la soumission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l’envoi réel pour l’instant

    let isValid = true;

    const fields = form.querySelectorAll("input, textarea");

    fields.forEach(field => {
        if (field.value.trim() === "") {
            field.classList.add("error");
            isValid = false;
        }
    });

    if (isValid) {
        showSuccessMessage();
        form.reset();
    }
});

// 4. Message de succès animé
function showSuccessMessage() {
    const msg = document.createElement("div");
    msg.className = "success-message";
    msg.textContent = "Message envoyé avec succès !";

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.classList.add("show");
    }, 50);

    setTimeout(() => {
        msg.classList.remove("show");
    }, 2500);

    setTimeout(() => msg.remove(), 3000);
}



// ================================
// MENU INTERACTIF
// ================================

// Smooth scroll sur clic
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Activation auto du lien pendant scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});


// Sélectionne tous les blocs de compétences
const skillBlocks = document.querySelectorAll('.skills-box');

// Observer pour détecter quand un élément devient visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // stop observing once animated
        }
    });
}, {
    threshold: 0.2
});

// Active l’observation pour chaque bloc
skillBlocks.forEach(block => {
    observer.observe(block);
});
