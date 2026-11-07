const signinForm = document.getElementById("signin-form");
if (signinForm) {
  signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem("signedin", "true");
    window.location.href = "home.html";
  });
}

const signedin = localStorage.getItem("signedin") === "true";
const visitor = document.getElementById("visitor");
const dashboard = document.getElementById("dashboard");
const homeSignupBtn = document.getElementById("signup-btn-home");

if (visitor && dashboard) {
  if (signedin) {
    visitor.style.display = "none";
    dashboard.style.display = "block";
    if (homeSignupBtn) {
      homeSignupBtn.textContent = "Sign out";
    }
  } else {
    visitor.style.display = "block";
    dashboard.style.display = "none";
    if (homeSignupBtn) {
      homeSignupBtn.textContent = "Sign out";
    }
  }
}

const moreBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");

if (moreBtn && moreMenu) {
  moreBtn.addEventListener("click", function () {
    const isVisible = moreMenu.style.display === "flex";
    moreMenu.style.display = isVisible ? "none" : "flex";
  });
}

const signoutButton = document.getElementById("signout");
if (signoutButton) {
  signoutButton.addEventListener("click", function () {
    localStorage.removeItem("signedin");
    window.location.href = "home.html";
  });
}

if (homeSignupBtn) {
  homeSignupBtn.addEventListener("click", function () {
    if (signedin) {
      localStorage.removeItem("signedin");
      window.location.href = "home.html";
    } else {
      window.location.href = "signup.html";
    }
  });
}
