function teacherLogin() {
  // Get input values from form
  const teachername = document.getElementById("teachername").value;
  const department = document.getElementById("department").value;
  const phone= document.getElementById("phone").value;
  const school = document.getElementById("school").value;
  const password = document.getElementById("password").value;

  // Dummy login check (hardcoded values for demo/testing)
  if (
    teachername === "Brahmleen" &&
    department === "ABC" &&
    phone === "123456" &&
    school === "ABC" &&
    password === "password"
  ) {
    
    // ✅ Show success message
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "Login successful!";

    // ✅ Redirect after 1 second
    setTimeout(() => {
      window.location.href = "TeacherDashboard.html";
    }, 500);
  } else {
    // ❌ Show error if credentials do not match
    document.getElementById("message").innerText = "Invalid credentials. Please try again.";
  }
}
