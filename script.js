// --- Анимация печатанья ---
const textElement = document.getElementById("typewriter");
const texts = ["Асиновская Империя", "Asino Empire", "Асин империясе"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 120;
const deletingSpeed = 60;
const pauseTime = 1000;

function typeEffect() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
            return;
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
            return;
        }
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, delay);
}

window.addEventListener("load", () => {
    setTimeout(typeEffect, 500);
});

// --- Плавное появление второго блока при прокрутке ---
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

hiddenElements.forEach(el => observer.observe(el));
