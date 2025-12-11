// QUESTIONS — Mix of everything
const questions = [
    {
        q: "Who won the 2023 NBA Finals?",
        answers: ["Warriors", "Nuggets", "Celtics"],
        correct: 1
    },
    {
        q: "Which college is currently ranked #1?",
        answers: ["Kansas", "UConn", "North Carolina"],
        correct: 1
    },
    {
        q: "Who averages the most points per game?",
        answers: ["Luka Dončić", "Giannis Antetokounmpo", "Shai Gilgeous-Alexander"],
        correct: 1
    },
    {
        q: "Where did Steph Curry play college ball?",
        answers: ["Duke", "Wake Forest", "Davidson"],
        correct: 2
    },
    {
        q: "EuroLeague top team right now?",
        answers: ["Barcelona", "Real Madrid", "Olympiacos"],
        correct: 1
    },
    {
        q: "Top HS recruit in 2025?",
        answers: ["A.J. Dybantsa", "Cooper Flagg", "Bronny James"],
        correct: 0
    }
];

let current = 0;
let score = 0;

// DOM ELEMENTS
const questionText = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

// LOAD FIRST QUESTION
loadQuestion();

function loadQuestion() {
    feedback.textContent = "";
    nextBtn.style.display = "none";

    const q = questions[current];
    questionText.textContent = `Question ${current+1}: ${q.q}`;

    answersDiv.innerHTML = "";
    q.answers.forEach((ans, idx) => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.className = "answer-btn";
        btn.onclick = () => checkAnswer(idx);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    const q = questions[current];

    if (index === q.correct) {
        score++;
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "lime";
    } else {
        feedback.textContent = `❌ Wrong! Correct Answer: ${q.answers[q.correct]}`;
        feedback.style.color = "tomato";
    }

    // lock buttons
    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.disabled = true;
    });

    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    current++;

    if (current >= questions.length) {
        endGame();
    } else {
        loadQuestion();
    }
};

function endGame() {
    questionText.textContent = `🏁 Game Over!`;
    answersDiv.innerHTML = "";
    feedback.textContent = `Your Score: ${score} / ${questions.length}`;
    nextBtn.textContent = "Play Again";
    nextBtn.style.display = "block";

    nextBtn.onclick = () => {
        current = 0;
        score = 0;
        nextBtn.textContent = "Next";
        loadQuestion();
    };
}
