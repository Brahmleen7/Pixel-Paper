// Wait for the page to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const form = document.getElementById("questionnaire");

  // When the form is submitted
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    // Initialize counters for each learning type
    const scores = {
      practical: 0,
      theoretical: 0,
      visual: 0,
      auditory: 0,
      "self-driven": 0,
    };

    // Loop through 10 questions and tally scores
    for (let i = 1; i <= 10; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) {
        const value = selected.value;
        if (scores[value] !== undefined) {
          scores[value]++;
        }
      }
    }

    // Find which learning type got the highest score
    let maxType = "";
    let maxScore = -1;
    for (const type in scores) {
      if (scores[type] > maxScore) {
        maxScore = scores[type];
        maxType = type;
      }
    }

    // Feedback message for each type
    const resultText = {
      practical: "You are a Practical Learner!",
      theoretical: "You are a Theoretical Learner!",
      visual: "You are a Visual Learner!",
      auditory: "You are an Auditory Learner!",
      "self-driven": "You are a Self-Driven Learner!",
    };

    // If the user didn't answer any questions
    if (maxScore === -1) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Create or update result display area
    // Try to get an existing result box by ID
let resultDiv = document.getElementById("result");

// If it doesn't exist yet, create it
if (!resultDiv) {
  // Create a new <div> element
  resultDiv = document.createElement("div");

  // Set its ID to 'result' so we can access it later
  resultDiv.id = "result";

  // Add a CSS class for styling (defined in style.css)
  resultDiv.classList.add("result-box");

  // Append the result div to the form so it shows up below it
  form.appendChild(resultDiv);
}


    // Show result message
    resultDiv.textContent = resultText[maxType];

    // OPTIONAL: Save result in browser (for future use)
    localStorage.setItem("learningType", maxType);


 // 🔗 Send learning type to Python backend to get recommendations
    fetch("http://localhost:5000/get-resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ type: maxType })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        // Display recommended resources
        const recommendations = data.recommendations;

        // Create or get resource container
        let resourceList = document.getElementById("resource-list");
        if (!resourceList) {
          resourceList = document.createElement("ul");
          resourceList.id = "resource-list";
          form.appendChild(resourceList);
        } else {
          resourceList.innerHTML = ""; // Clear previous results
        }

        // Add each resource to the list
        recommendations.forEach(resource => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${resource.url}" target="_blank">${resource.title}</a>`;
          resourceList.appendChild(li);
        });
      } else {
        alert("Could not fetch resources. Try again later.");
      }
    })
    .catch(error => {
      console.error("Error fetching resources:", error);
    });




    // 🚀 Redirect to custom dashboard after 2 seconds
    setTimeout(() => {
      // This is where redirection happens
      window.location.href = `dashboard.html`;
    }, 2000);
  });
});


//I NEED TO ADD SAVING THE LOGIN INFO SO IT DOESNT ASKS AGAIN AND AGAIN