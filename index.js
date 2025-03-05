document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let userEmail = localStorage.getItem("userEmail");

    let userDisplay = document.getElementById("user-display");
    let emailDisplay = document.getElementById("email-display");

    if (loggedInUser && userEmail) {
        userDisplay.innerText = "Welcome, " + loggedInUser;
        emailDisplay.innerText = "Email: " + userEmail;
    } else {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }

    document.getElementById("logout-btn").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("userEmail");
        window.location.href = "login.html"; // Redirect to login page
    });
});
