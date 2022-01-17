

const quizData = [
    {
        question: 'What is the capital of Pakistan?',
        a: "Karachi",
        "b": "Islamabad",
        "c": "Lahore",
        "d": "None",
        correct: 'b'
    },
    {
        "question": "Where is the Cricket National Stadium?",
        "a": "Islamabad",
        "b": "Gawader",
        "c": "Lahore",
        "d": "Karachi",
    correct: 'd'

    },

    {
        "question": "Which of the following building is the largest in Pakistan",
        "a": "Bahria Icon Tower",
         "b": "Chapal Skymark",
         "c": "Dolmen Tower",
        "d": "MCB Tower",
        correct: 'a'

    },
    {
        question: "What dog has a water resistant coat and webbed feet?",
        a: 'Chihuahua',
        b: 'Labrador',
        c: 'St. Bernard',
        d: 'Newfoundland',
        correct: 'a'

    },
    {
        question: "People with what color hair are genetically mutants?",
        a: 'black',
        b: 'red',
        c: 'Blonde',
        d: 'Brown',
        correct: 'd'

    }
];
let score = 0;
let currentQuiz = 0;
let answer = undefined;
const quiz = document.getElementById("kai");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("btn-submit")
loadQuiz();

let val = fetch("questions.json").then(Response => Response.json());

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2> You answered correctly ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload();">Reload Quiz</button> `

        }

    }
});