document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        "Was he on the crime scene during the time of murder?",
        "Does he match the description?",
        "Does the fingerprint match the suspect?",
        "Does the hair color found in the scene match with your suspect?",
        "Did he/she seem suspicious during your investigation?"
    ];

    let score = 0;
    let currentQuestionIndex = 0;
    
    const questionElement = document.getElementById("question");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const resultElement = document.getElementById("result");

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            questionElement.textContent = questions[currentQuestionIndex];
        } else {
            displayResult();
        }
    }

    function displayResult() {
        if (score >= 4) {
            resultElement.textContent = "Ending: Reiner is the killer.";
        } else if (score >= 2 && score < 4) {
            resultElement.textContent = "Ending: Patrick is the killer.";
        } else if (score >= 0 && score < 2) {
            resultElement.textContent = "Ending: Jude is the killer.";
        } else {
            resultElement.textContent = "Ending: Kiana is the killer.";
        }

        questionElement.style.display = "none";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    }

    yesButton.addEventListener("click", function () {
        if (currentQuestionIndex === 2) {
            score -= 1;  // Deduct points for "yes" on Q3
        } else {
            score += 1;  // Add points for "yes"
        }
        currentQuestionIndex++;
        loadQuestion();
    });

    noButton.addEventListener("click", function () {
        if (currentQuestionIndex === 2) {
            score += 1;  // Add points for "no" on Q3
        } else {
            score -= 1;  // Deduct points for "no"
        }
        currentQuestionIndex++;
        loadQuestion();
    });

    // Start the quiz by loading the first question
    loadQuestion();
});     