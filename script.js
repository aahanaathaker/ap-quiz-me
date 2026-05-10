const questions = {
  "AP World History": [
    {
      question: "Which development most directly increased trade across Eurasia during 1200-1450?",
      choices: ["Industrialization", "Mongol protection of trade routes", "Atlantic revolutions", "Cold War alliances"],
      answer: "Mongol protection of trade routes"
    }
  ],
  "AP Biology": [
    {
      question: "What organelle is responsible for ATP production?",
      choices: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
      answer: "Mitochondria"
    }
  ],
  "AP Calculus BC": [
    {
      question: "Which test is commonly used for series with factorials?",
      choices: ["Ratio Test", "Integral Test", "Comparison Test", "Root Test"],
      answer: "Ratio Test"
    }
  ]
};

function startQuiz() {
  const subject = document.getElementById("subject").value;
  const quizDiv = document.getElementById("quiz");
  const q = questions[subject][0];

  quizDiv.innerHTML = `
    <h2>${subject}</h2>
    <p>${q.question}</p>
    ${q.choices.map(choice => `
      <button onclick="checkAnswer('${choice}', '${q.answer}')">${choice}</button>
    `).join("")}
    <p id="result"></p>
  `;
}

function checkAnswer(choice, answer) {
  const result = document.getElementById("result");
  if (choice === answer) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Incorrect. The correct answer is " + answer + ".";
  }
}
