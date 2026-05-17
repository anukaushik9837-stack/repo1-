// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 10 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

function nextPage() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Will You Allow Me tobe your Best Friend and Celebrate You BIRTHDAY for this and everylifetime?</h1>
            <button onclick="sayYes()">Yes 🥹💖</button>
            <button id="noBtn" onmouseover="moveButton()">No😶‍🌫️</button>
        </div>
    `;
}

function moveButton() {
    const btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.top = Math.random() * window.innerHeight + "px";
    btn.style.left = Math.random() * window.innerWidth + "px";
}

function sayYes() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Huhh.... You Got no other option except saying YES 🥳💖</h1>
            <p>Hehehe.... Thank you for existing LOVE🫶💖</p>
            <p>I tried making something special for you…</p>
            <button onclick="goToSecret()">Click here for your surprise🫀💌</button>
        </div>
    `;
}

function goToSecret() {
    window.location.href = "https://anukaushik9837-stack.github.io/repo11/";
}
