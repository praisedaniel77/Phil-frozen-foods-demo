document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        let email = document.getElementById("email").value.trim();
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value;

        console.log("Email:", email);
        console.log("Username:", username);
        console.log("Password:", password);

        // Dummy authentication (Replace this with database authentication)
        if (email === "nkemdirimpraisedaniel@gmail.com" && username === "Nestor daniels" && password === "password123") {
            localStorage.setItem("loggedInUser", username);
            localStorage.setItem("userEmail", email);

            alert("Login successful! Redirecting...");
            window.location.href = "index.html"; // Redirect to home page
        } else {
            alert("Invalid email, username, or password!");
        }
    });
});
