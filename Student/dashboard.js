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




// Wait for the dashboard page to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Get the stored learning type from localStorage
  const type = localStorage.getItem("learningType");

  // Step 2: Get elements to update content
  const heading = document.getElementById("welcome-heading");
  const message = document.getElementById("learning-message");
  const resources = document.getElementById("resources");

  // Step 3: Check if learning type exists
  if (!type) {
    message.textContent = "We couldn't detect your learning style. Please take the questionnaire.";
    return;
  }

  // Step 4: Customize message for each type
  const messages = {
    practical: "You understand best by doing — experiments, hands-on tasks, and real-world challenges bring out the best in you.",
    theoretical: "You prefer deep understanding, structured information, and exploring concepts through reading and logic.",
    visual: "Diagrams, illustrations, videos, and color-coded notes help you grasp concepts quickly and clearly.",
    auditory: " You learn best through sound — explanations, discussions, and verbal feedback resonate with you.",
    "self-driven": "You're self-driven — You take initiative, explore your own methods, and thrive with independence and creativity."
  };

  
  // Step 6: Update the heading and message
  heading.textContent = `Welcome, ${type.charAt(0).toUpperCase() + type.slice(1)} Learner!`;
  message.textContent = messages[type];

 
});
