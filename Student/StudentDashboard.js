// Get stored username from localStorage
const username = localStorage.getItem("loggedInUser");

// If username exists, show it in the navbar
if (username) {
  document.getElementById("greeting").innerText = `Hey, ${username}!`;
} else {
  document.getElementById("greeting").innerText = "Hey, Guest!";
}

// Logout function to clear username and go back to login
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "Student.html"; // change this if your login page has a different name
}


// Function to toggle the dropdown visibility
function toggleDropdown() {
  // Get the dropdown menu by its ID and toggle the 'show' class
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Close the dropdown if user clicks anywhere outside the button
window.onclick = function(event) {
  // Check if the clicked element is NOT the dropdown button
  if (!event.target.matches('.dropbtn')) {

    // Get all dropdown menus (in case you have more than one)
    var dropdowns = document.getElementsByClassName("dropdown-content");

    // Loop through each dropdown
    for (let i = 0; i < dropdowns.length; i++) {
      // Remove the 'show' class to hide the menu
      dropdowns[i].classList.remove('show');
    }
  }
}
