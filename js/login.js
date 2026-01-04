// if (localStorage.getItem("isLoggedIn") !== "true") {
//   window.location.href = "login.html";
// }

const form = document.getElementById("loginForm");
const errorText = document.getElementById("error");

// temporary admin credentials (frontend only)
const ADMIN_EMAIL = "admin@bloodcare.com";
const ADMIN_PASSWORD = "admin123";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "admin");

    window.location.href = "index.html";
  } else {
    errorText.textContent = "Invalid email or password ❌";
  }
});
