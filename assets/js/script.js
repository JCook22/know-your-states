const cityQuestions = [
        {
            "Answer": "Montgomery",
            "State": "Alabama",
        },
        {
            "Answer": "Juneau",
            "State": "Alaska",
        },
        {
            "Answer": "Phoenix",
            "State": "Arizona",
        },
        {
            "Answer": "Little Rock",
            "State": "Arkansas",
        },
        {
            "Answer": "Sacramento",
            "State": "California",
        },
        {
            "Answer": "Denver",
            "State": "Colorado",
        },
        {
            "Answer": "Hartford",
            "State": "Connecticut",
        },
        {
            "Answer": "Dover",
            "State": "Delaware",
        },
        {
            "Answer": "Tallahassee",
            "State": "Florida",
        },
        {
            "Answer": "Atlanta",
            "State": "Georgia",
        },
        {
            "Answer": "Honolulu",
            "State": "Hawaii",
        },
        {
            "Answer": "Boise",
            "State": "Idaho",
        },
        {
            "Answer": "Springfield",
            "State": "Illinois",
        },
        {
            "Answer": "Indianapolis",
            "State": "Indiana",
        },
        {
            "Answer": "Des Moines",
            "State": "Iowa",
        },
        {
            "Answer": "Topeka",
            "State": "Kansas",
        },
        {
            "Answer": "Frankfort",
            "State": "Kentucky",
        },
        {
            "Answer": "Baton Rouge",
            "State": "Louisiana",
        },
        {
            "Answer": "Augusta",
            "State": "Maine",
        },
        {
            "Answer": "Annapolis",
            "State": "Maryland",
        },
        {
            "Answer": "Boston",
            "State": "Massachusetts",
        },
        {
            "Answer": "Lansing",
            "State": "Michigan",
        },
        {
            "Answer": "Saint Paul",
            "State": "Minnesota",
        },
        {
            "Answer": "Jackson",
            "State": "Mississippi",
        },
        {
            "Answer": "Jefferson City",
            "State": "Missouri",
        },
        {
            "Answer": "Helena",
            "State": "Montana",
        },
        {
            "Answer": "Lincoln",
            "State": "Nebraska",
        },
        {
            "Answer": "Carson City",
            "State": "Nevada",
        },
        {
            "Answer": "Concord",
            "State": "New Hampshire",
        },
        {
            "Answer": "Trenton",
            "State": "New Jersey",
        },
        {
            "Answer": "Santa Fe",
            "State": "New Mexico",
        },
        {
            "Answer": "Albany",
            "State": "New York",
        },
        {
            "Answer": "Raleigh",
            "State": "North Carolina",
        },
        {
            "Answer": "Bismarck",
            "State": "North Dakota",
        },
        {
            "Answer": "Columbus",
            "State": "Ohio",
        },
        {
            "Answer": "Oklahoma City",
            "State": "Oklahoma",
        },
        {
            "Answer": "Salem",
            "State": "Oregon",
        },
        {
            "Answer": "Harrisburg",
            "State": "Pennsylvania",
        },
        {
            "Answer": "Providence",
            "State": "Rhode Island",
        },
        {
            "Answer": "Columbia",
            "State": "South Carolina",
        },
        {
            "Answer": "Pierre",
            "State": "South Dakota",
        },
        {
            "Answer": "Nashville",
            "State": "Tennessee",
        },
        {
            "Answer": "Austin",
            "State": "Texas",
        },
        {
            "Answer": "Salt Lake City",
            "State": "Utah",
        },
        {
            "Answer": "Montpelier",
            "State": "Vermont",
        },
        {
            "Answer": "Richmond",
            "State": "Virginia",
        },
        {
            "Answer": "Olympia",
            "State": "Washington",
        },
        {
            "Answer": "Charleston",
            "State": "West Virginia",
        },
        {
            "Answer": "Madison",
            "State": "Wisconsin",
        },
        {
            "Answer": "Cheyenne",
            "State": "Wyoming",
        },
    ];

document.getElementById("play-btn").addEventListener("click", showQuestion);
document.getElementById("submit-btn").addEventListener("click", checkAnswer);
document.getElementById("skip-btn").addEventListener("click", skipQuestion);
document.getElementById("reset-btn").addEventListener("click", resetQuiz);

let currentQuestionNum = 0;

function showQuestion() {
    let currentState = cityQuestions[currentQuestionNum].State;
    document.getElementById("question").innerText = "What is the capital city of";
    document.getElementById("state").innerHTML = `<b>${currentState}?</b>`
    document.getElementById("play-btn").hidden = true;
    document.getElementById("skip-btn").style.visibility = "visible";
    document.getElementById("reset-btn").style.visibility = "visible";
    document.getElementById("submit-btn").style.visibility = "visible";
    document.getElementById("answer-area").value = "";
    if (currentQuestionNum == 49) {
        document.getElementById("skip-btn").style.visibility = "hidden";
    }
}

function checkAnswer() {
    let correctAnswer = cityQuestions[currentQuestionNum].Answer;
    let inputBox = document.getElementById("answer-area");
    let userAnswer = inputBox.value;
    let score = document.getElementById("correct").innerText;
    let incorrectScore = document.getElementById("incorrect").innerText;
    if (userAnswer === "") {
        alert("Please enter your answer before you submit.");
    } else if (currentQuestionNum == 49 && userAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
        document.getElementById("correct").innerText = ++score;
        alert(`Correct! Your final score is ${score}.`);
    } else if (currentQuestionNum == 49 && userAnswer.toUpperCase() !== correctAnswer.toUpperCase()) {
        document.getElementById("incorrect").innerText = ++incorrectScore;
        alert(`Unfortunately that was incorrect. The correct answer is ${correctAnswer}. Your final score is ${score}.`)
    } else if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
        alert("Correct!");
        document.getElementById("correct").innerText = ++score;
        ++currentQuestionNum;
        showQuestion();
    } else if (userAnswer.toUpperCase() !== correctAnswer.toUpperCase()) {
        alert(`Unfortunately that was incorrect. The correct answer is ${correctAnswer}.`);
        document.getElementById("incorrect").innerText = ++incorrectScore;
        ++currentQuestionNum;
        showQuestion();
    } 
    }

function skipQuestion() {
    let correctAnswer = cityQuestions[currentQuestionNum].Answer;
    let incorrectScore = document.getElementById("incorrect").innerText;
    alert(`You have clicked skip! The correct answer is ${correctAnswer}.`);
    document.getElementById("incorrect").innerText = ++incorrectScore;
    ++currentQuestionNum;
    showQuestion();
}

function resetQuiz() {
    currentQuestionNum = 0;
    showQuestion();
    document.getElementById("correct").innerText = 0;
    document.getElementById("incorrect").innerText = 0;
}

