// Wait for the page to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const form = document.getElementById("questionnaireCareer");

  // When the form is submitted
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    // Initialize counters for each learning type
    const scores = {
      science: 0,
      commerce: 0,
      humanities: 0,
      "others/vocational" : 0,
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
      science: "Science is perfect for you! You love logic, experiments, and discovery.",
      commerce: "Commerce suits you! You have a mind for business, numbers, and strategy.",
      humanities: "Humanities is your path! You enjoy understanding people, history, and society.",
      "others/vocational": "You're a practical learner! Vocational or skill-based learning is ideal for you.",
      "self-driven": "You are self-motivated! You thrive in flexible and independent learning environments.",
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

    

    // 🚀 Redirect to custom dashboard after 2 seconds
    setTimeout(() => {
      // This is where redirection happens
      window.location.href = `careerOutput.html`;
    }, 2000);
  });
});
