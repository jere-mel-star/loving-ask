// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Lista de mensajes para el botón NO (en inglés)
const messages = [
    "Are you sure?",
    "Think about it again...",
    "This button doesn't work!",
    "Say yes, please! :c",
    "I'll buy you chocolates...",
    "Pretty please?",
    "You're breaking my heart ;(",
    "I'll be very sad...",
    "Okay, I'll stop asking...",
    "Just kidding, say YES! ❤️"
];

let messageIndex = 0;

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn AND change text
noBtn.addEventListener("mouseover", () => {
    const min = 150;
    const max = 250;
    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // Esto hace que la pregunta cambie por los mensajes de "Are you sure?" etc.
    title.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    // Mensaje final personalizado
    title.textContent = "I knew you would say yes! ❤️";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
