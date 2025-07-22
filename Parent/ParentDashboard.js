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
