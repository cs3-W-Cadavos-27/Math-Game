//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "To determine whether a square root function is increasing or decreasing on an interval, we look at the sign of k in f(x) = a√x − h + k.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Never True",
    },
    {
        id: "1",
        question: "For every exponential function, there is always one solution for x",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Sometimes True",
    },
    {
        id: "2",
        question: "There are many ways in finding the zeros of a polynomial function such as synthetic division, long division, remainder theorem, and factor theorem.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "3",
        question: "Reflecting functions over the y-axis inverses the sign of the x-coordinate and retains the y-coordinate.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "4",
        question: "The order of operation in performing a sequence of transformations always matters because it changes the resulting function.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Sometimes True",
    },
    {
        id: "5",
        question: "A parent function is a basic function that is transformed to create other members in its family.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    }, {
        id: "6",
        question: "The resulting graph of a one – to – one function and its inverse is symmetric with respect to the line of symmetry",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Never True",
    },
    {
        id: "7",
        question: "The point  (x, f(x)) on the graph of a function has the point (f(x), x) on the graph of its inverse.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "8",
        question: "A function f is one-to-one if for any x1 and x2 in the domain of f and x1 ≠ x2, then f(x1) ≠ f(x2).",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "9",
        question: " Linear functions are one-to-one. ",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Sometimes True",
    },
    {
        id: "10",
        question: "If a function is a rational function, then it is one-to-one.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Sometimes True",
    },
    {
        id: "11",
        question: "Suppose f is a function defined on an interval I. We say f is increasing on I if and only if f(a) < f(b) for all real numbers a, b in I with a < b.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "12",
        question: "Horizontal asymptote is identified based on the degree of the polynomials in the numerator and denominator of the rational function.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "13",
        question: "Using the symmetry test, the graph of an even function is symmetric with respect to the x-axis.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Never True",
    },
    {
        id: "14",
        question: "A function with an exponent is an exponential function.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Sometimes True",
    },
    {
        id: "15",
        question: "If f(x) = 9^x and g(x) = 3^2x, then it is correct to say that f(x) = g(x).",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "16",
        question: "The order of shifts, transformations and reflections follow the order of Operations.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "17",
        question: "log 1 base b = 0 is a property of logarithmic functions",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
    {
        id: "18",
        question: "log b base b = b is a property of logarithmic functions.",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Never True",
    },
    {
        id: "19",
        question: "For x > 0, b > 0, and b ≠ 1, y = logb x is equivalent to x = b^y",
        options: ["Always True", "Sometimes True", "Never True"],
        correct: "Always True",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Questions";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Questions";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

