// 👉 Typewriter Effect
const typewriterText = document.querySelector(".typewriter-text");
const titles = ["Web Developer", "Frontend Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = titles[index];
  if (isDeleting) {
    typewriterText.textContent = currentText.substring(0, charIndex--);
  } else {
    typewriterText.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % titles.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
}
typeEffect();

// 👉 Hamburger Menu Toggle
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// 👉 Form Submission Handling
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 🚫 Prevent page reload

  // ✅ Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill out all fields. 🚨");
    return;
  }

  // ✅ Simulate submission
  console.log("Form Submitted ✅");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Message:", message);

  // Reset form
  form.reset();

  // Success alert
  alert(`Thanks for contacting me, ${name}! 🚀 I’ll get back to you soon.`);
});
