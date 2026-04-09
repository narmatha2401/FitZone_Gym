function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Simple demo login
    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid Login!";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

// Protect dashboard
if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html";
    }
}