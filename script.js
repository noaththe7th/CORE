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

if (visitor && dashboard) {
  if (signedin) {
    visitor.style.display = "none";
    dashboard.style.display = "block";
  } else {
    visitor.style.display = "block";
    dashboard.style.display = "none";
  }
}

const signoutButton = document.getElementById("signout");
if (signoutButton) {
  signoutButton.addEventListener("click", function () {
    localStorage.removeItem("signedin");
    window.location.href = "home.html";
  });
}
