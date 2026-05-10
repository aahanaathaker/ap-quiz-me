const questions = [
  // Unit 1: Primitive Types
  {
    question: "What is the result of 7 / 2 in Java?",
    choices: ["3.5", "3", "4", "2"],
    answer: "3"
  },
  {
    question: "What is the result of 7 % 2?",
    choices: ["1", "2", "3", "0"],
    answer: "1"
  },
  {
    question: "Which type stores true or false?",
    choices: ["int", "double", "boolean", "String"],
    answer: "boolean"
  },

  // Unit 2: Objects
  {
    question: "Which keyword creates a new object?",
    choices: ["class", "void", "new", "return"],
    answer: "new"
  },
  {
    question: "What does a constructor do?",
    choices: ["Deletes an object", "Initializes an object", "Loops through data", "Returns a boolean"],
    answer: "Initializes an object"
  },
  {
    question: "Which method returns the length of a String?",
    choices: ["length", "length()", "size()", "getLength()"],
    answer: "length()"
  },

  // Unit 3: Boolean Expressions and if Statements
  {
    question: "Which operator means AND?",
    choices: ["||", "&&", "!", "=="],
    answer: "&&"
  },
  {
    question: "Which operator means NOT?",
    choices: ["!", "!=", "&&", "||"],
    answer: "!"
  },
  {
    question: "What does == check for with primitive values?",
    choices: ["Memory location", "Equality of values", "Object type", "String length"],
    answer: "Equality of values"
  },

  // Unit 4: Iteration
  {
    question: "Which loop is guaranteed to run at least once?",
    choices: ["for loop", "while loop", "do-while loop", "enhanced for loop"],
    answer: "do-while loop"
  },
  {
    question: "How many times does this loop run? for (int i = 0; i < 5; i++)",
    choices: ["4", "5", "6", "Infinite"],
    answer: "5"
  },
  {
    question: "What does i++ do?",
    choices: ["Subtracts 1", "Adds 1", "Multiplies by 2", "Stops the loop"],
    answer: "Adds 1"
  },

  // Unit 5: Writing Classes
  {
    question: "What is the purpose of private instance variables?",
    choices: ["Encapsulation", "Inheritance", "Iteration", "Casting"],
    answer: "Encapsulation"
  },
  {
    question: "What does a getter method usually do?",
    choices: ["Changes a value", "Returns a value", "Deletes an object", "Creates a loop"],
    answer: "Returns a value"
  },
  {
    question: "What does a setter method usually do?",
    choices: ["Changes a value", "Returns a class", "Stops a program", "Creates an array"],
    answer: "Changes a value"
  },

  // Unit 6: Arrays
  {
    question: "What is the first index of an array?",
    choices: ["0", "1", "-1", "array.length"],
    answer: "0"
  },
  {
    question: "How do you get the length of an array called nums?",
    choices: ["nums.length", "nums.length()", "nums.size()", "nums.getLength()"],
    answer: "nums.length"
  },
  {
    question: "What happens if you access an invalid array index?",
    choices: ["Nothing", "Returns null", "ArrayIndexOutOfBoundsException", "Syntax error only"],
    answer: "ArrayIndexOutOfBoundsException"
  },

  // Unit 7: ArrayList
  {
    question: "How do you get the size of an ArrayList called list?",
    choices: ["list.length", "list.length()", "list.size()", "list.getSize()"],
    answer: "list.size()"
  },
  {
    question: "Which method adds an item to an ArrayList?",
    choices: ["add()", "insert()", "append()", "put()"],
    answer: "add()"
  },
  {
    question: "Which method removes an item from an ArrayList?",
    choices: ["delete()", "remove()", "erase()", "pop()"],
    answer: "remove()"
  },

  // Unit 8: 2D Arrays
  {
    question: "For int[][] grid, what does grid.length represent?",
    choices: ["Number of columns", "Number of rows", "Total elements", "Last index"],
    answer: "Number of rows"
  },
  {
    question: "For int[][] grid, what does grid[0].length represent?",
    choices: ["Number of rows", "Number of columns", "Total arrays", "First element"],
    answer: "Number of columns"
  },

  // Unit 9: Inheritance
  {
    question: "Which keyword is used for inheritance?",
    choices: ["implements", "extends", "inherits", "superclass"],
    answer: "extends"
  },
  {
    question: "What does super() call?",
    choices: ["The subclass constructor", "The superclass constructor", "A private variable", "The main method"],
    answer: "The superclass constructor"
  },
  {
    question: "What is method overriding?",
    choices: ["Two methods with same name but different parameters", "Subclass redefining a superclass method", "Deleting a method", "Using a loop inside a method"],
    answer: "Subclass redefining a superclass method"
  },

  // Unit 10: Recursion
  {
    question: "What is required for recursion to stop?",
    choices: ["A loop", "A base case", "An ArrayList", "A constructor"],
    answer: "A base case"
  },
  {
    question: "What happens if recursion has no base case?",
    choices: ["It stops automatically", "It causes infinite recursion", "It returns 0", "It creates an object"],
    answer: "It causes infinite recursion"
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 300;
let timer;
let shuffledQuestions = [];

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  timeLeft = 300;

  shuffledQuestions = shuffleArray([...questions]);

  document.getElementById("score").textContent = "Score: 0";
  document.getElementById("timer").textContent = "Time Left: 300 seconds";

  startTimer();
  showQuestion();
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(function () {
    timeLeft--;

    document.getElementById("timer").textContent =
      "Time Left: " + timeLeft + " seconds";

    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  if (currentQuestion >= shuffledQuestions.length) {
    endQuiz();
    return;
  }

  const q = shuffledQuestions[currentQuestion];
  const quizDiv = document.getElementById("quiz");

  quizDiv.innerHTML = `
    <h2>Question ${currentQuestion + 1} of ${shuffledQuestions.length}</h2>
    <p>${q.question}</p>

    ${q.choices.map(choice => `
      <button onclick="checkAnswer('${choice.replace(/'/g, "\\'")}')">
        ${choice}
      </button>
    `).join("")}

    <p id="feedback"></p>
  `;
}

function checkAnswer(choice) {
  const q = shuffledQuestions[currentQuestion];
  const feedback = document.getElementById("feedback");

  if (choice === q.answer) {
    score++;
    document.getElementById("score").textContent = "Score: " + score;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Incorrect. Correct answer: " + q.answer;
  }

  setTimeout(function () {
    currentQuestion++;
    showQuestion();
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);

  let percentage = Math.round((score / shuffledQuestions.length) * 100);

  document.getElementById("quiz").innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Final Score: ${score} / ${shuffledQuestions.length}</p>
    <p>Percentage: ${percentage}%</p>
    <button onclick="startQuiz()">Try Again</button>
  `;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
