// Prevent form submission and show confirmation
document.getElementById("joinForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Optional: Get values (you can log or send to server later)
  const name = document.getElementById("name").value;
  const school = document.getElementById("school").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pincode").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Show confirmation message
  document.getElementById("success-message").innerText =
    `Thank you, ${name}! We'll contact you soon.`;

  // Optionally reset the form
  document.getElementById("joinForm").reset();
});
