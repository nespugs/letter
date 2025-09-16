const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const title = document.querySelector('.title');
let heartInterval;
let isScrolling = false; // Flag to track scrolling
let scrollTimeout;

// Prevent closing the letter while scrolling
letter.addEventListener('scroll', () => {
  isScrolling = true;
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => { isScrolling = false; }, 300); // Reset after 300ms
});

envelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") envelope.click();
});

envelope.addEventListener('click', (e) => {
  const opening = !envelope.classList.contains("flap");
  if (opening) {
    envelope.classList.add('flap');

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("float-heart");
        heart.innerHTML = "💖";

        const rect = envelope.getBoundingClientRect();
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = rect.top + rect.height / 2 + "px";
        heart.style.position = "absolute";

        heart.style.fontSize = (Math.random() * 10 + 15) + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
      }, i * 300);
    }

    heartInterval = setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("float-heart");
      heart.innerHTML = "💗";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.transition = `transform ${3 + Math.random() * 2}s linear, opacity ${3 + Math.random() * 2}s ease-out`;
      heart.style.fontSize = (Math.random() * 10 + 15) + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }, 800);

    setTimeout(() => { letter.classList.add('zoomed'); }, 4000);

    // ✨ Sparkles burst when opening
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const rect = envelope.getBoundingClientRect();
        const x = rect.left + rect.width / 2 + (Math.random() * 100 - 50);
        const y = rect.top + rect.height / 2 + (Math.random() * 60 - 30);
        createSparkle(x, y);
      }, i * 100);
    }

  } else if (!letter.contains(e.target) && !isScrolling) { // Close only if clicking outside and not scrolling
    letter.classList.remove("zoomed");
    letter.classList.add("closing");

    setTimeout(() => {
      envelope.classList.remove("flap");
      letter.classList.remove("closing");
      clearInterval(heartInterval);
    }, 2500);
  }
});

envelope.addEventListener('touchstart', (e) => {
  if (isScrolling) return; // Allow scrolling to proceed
  const opening = !envelope.classList.contains("flap");
  if (opening) {
    e.preventDefault(); // Prevent default only when opening the envelope
    envelope.classList.add('flap');

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("float-heart");
        heart.innerHTML = "❤";

        const rect = envelope.getBoundingClientRect();
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = rect.top + rect.height / 2 + "px";
        heart.style.position = "absolute";

        heart.style.fontSize = (Math.random() * 10 + 15) + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
      }, i * 300);
    }

    heartInterval = setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("float-heart");
      heart.innerHTML = "💕";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.transition = `transform ${3 + Math.random() * 2}s linear, opacity ${3 + Math.random() * 2}s ease-out`;
      heart.style.fontSize = (Math.random() * 10 + 15) + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }, 800);

    setTimeout(() => { letter.classList.add('zoomed'); }, 4000);

    // ✨ Sparkles burst when opening
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const rect = envelope.getBoundingClientRect();
        const x = rect.left + rect.width / 2 + (Math.random() * 100 - 50);
        const y = rect.top + rect.height / 2 + (Math.random() * 60 - 30);
        createSparkle(x, y);
      }, i * 100);
    }

  } else if (!letter.contains(e.target)) {
    e.preventDefault(); // Prevent default only when closing the envelope
    letter.classList.remove("zoomed");
    letter.classList.add("closing");

    setTimeout(() => {
      envelope.classList.remove("flap");
      letter.classList.remove("closing");
      clearInterval(heartInterval);
    }, 2500);
  }
});

title.addEventListener('mouseover', () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const rect = title.getBoundingClientRect();
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + Math.random() * rect.height;
      createSparkle(x, y);
    }, i * 100);
  }
});

// Add sparkles around the envelope on hover
envelope.addEventListener('mouseover', () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const rect = envelope.getBoundingClientRect();
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + Math.random() * rect.height;
      createSparkle(x, y);
    }, i * 200);
  }
});

// Add random floating hearts when the envelope is clicked
envelope.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('float-heart');
      heart.innerHTML = '💓';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 3 + Math.random() * 2 + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, i * 500);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 2000);
}