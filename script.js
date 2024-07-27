const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        answers: {
            a: "Bill Gates",
            b: "Elon Musk",
            c: "Jeff Bezos"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Japan?",
        answers: {
            a: "Seoul",
            b: "Tokyo",
            c: "Beijing"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: {
            a: "O2",
            b: "H2O",
            c: "CO2"
        },
        correctAnswer: "b"
    },
    {
        question: "What is 2 + 2?",
        answers: {
            a: "3",
            b: "4",
            c: "5"
        },
        correctAnswer: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Pacific Ocean"
        },
        correctAnswer: "c"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
            a: "Harper Lee",
            b: "J.K. Rowling",
            c: "Ernest Hemingway"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the boiling point of water?",
        answers: {
            a: "90°C",
            b: "100°C",
            c: "110°C"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the square root of 16?",
        answers: {
            a: "2",
            b: "4",
            c: "8"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length} correct`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
