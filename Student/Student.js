function studentLogin() {
  // Get input values from form
  const username = document.getElementById("username").value;
  const roll = document.getElementById("roll").value;
  const school = document.getElementById("school").value;
  const password = document.getElementById("password").value;

  // Dummy login check (hardcoded values for demo/testing)
  if (
    username === "Brahmleen" &&
    roll === "123456" &&
    school === "ABC" &&
    password === "password"
  ) {
    // ✅ Save username in localStorage
    localStorage.setItem("loggedInUser", username);

    // ✅ Show success message
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "Login successful!";

    // ✅ Redirect after 1 second
    setTimeout(() => {
      window.location.href = "StudentDashboard.html";
    }, 500);
  } else {
    // ❌ Show error if credentials do not match
    document.getElementById("message").innerText = "Invalid credentials. Please try again.";
  }
}
