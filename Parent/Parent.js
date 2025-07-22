function parentLogin() {
  // Get input values from form
  const studentname = document.getElementById("studentname").value;
  const roll = document.getElementById("roll").value;
  const phone= document.getElementById("phone").value;
  const school = document.getElementById("school").value;
  const password = document.getElementById("password").value;

  // Dummy login check (hardcoded values for demo/testing)
  if (
    studentname === "Brahmleen" &&
    roll === "123456" &&
    phone === "123456" &&
    school === "ABC" &&
    password === "password"
  ) {
    
    // ✅ Show success message
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "Login successful!";

    // ✅ Redirect after 1 second
    setTimeout(() => {
      window.location.href = "ParentDashboard.html";
    }, 500);
  } else {
    // ❌ Show error if credentials do not match
    document.getElementById("message").innerText = "Invalid credentials. Please try again.";
  }
}
