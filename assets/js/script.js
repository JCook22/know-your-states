const cityQuestions = [
        {
            "Question": "What is the capital city of Alabama?",
            "Answer": "Montgomery",
            "State": "Alabama",
        },
        {
            "Question": "What is the capital city of Alaska?",
            "Answer": "Juneau",
            "State": "Alaska",
        },
        {
            "Question": "What is the capital city of Arizona?",
            "Answer": "Phoenix",
            "State": "Arizona",
        },
        {
            "Question": "What is the capital city of Arkansas?",
            "Answer": "Little Rock",
            "State": "Arkansas",
        },
        {
            "Question": "What is the capital city of California?",
            "Answer": "Sacramento",
            "State": "California",
        },
        {
            "Question": "What is the capital city of Colorado?",
            "Answer": "Denver",
            "State": "Colorado",
        },
        {
            "Question": "What is the capital city of Connecticut?",
            "Answer": "Hartford",
            "State": "Connecticut",
        },
        {
            "Question": "What is the capital city of Delaware?",
            "Answer": "Dover",
            "State": "Delaware",
        },
        {
            "Question": "What is the capital city of Florida?",
            "Answer": "Tallahassee",
            "State": "Florida",
        },
        {
            "Question": "What is the capital city of Georgia?",
            "Answer": "Atlanta",
            "State": "Georgia",
        },
        {
            "Question": "What is the capital city of Hawaii?",
            "Answer": "Honolulu",
            "State": "Hawaii",
        },
        {
            "Question": "What is the capital city of Idaho?",
            "Answer": "Boise",
            "State": "Idaho",
        },
        {
            "Question": "What is the capital city of Illinois?",
            "Answer": "Springfield",
            "State": "Illinois",
        },
        {
            "Question": "What is the capital city of Indiana?",
            "Answer": "Indianapolis",
            "State": "Indiana",
        },
        {
            "Question": "What is the capital city of Iowa?",
            "Answer": "Des Moines",
            "State": "Iowa",
        },
        {
            "Question": "What is the capital city of Kansas?",
            "Answer": "Topeka",
            "State": "Kansas",
        },
        {
            "Question": "What is the capital city of Kentucky?",
            "Answer": "Frankfort",
            "State": "Kentucky",
        },
        {
            "Question": "What is the capital city of Louisiana?",
            "Answer": "Baton Rouge",
            "State": "Louisiana",
        },
        {
            "Question": "What is the capital city of Maine?",
            "Answer": "Augusta",
            "State": "Maine",
        },
        {
            "Question": "What is the capital city of Maryland?",
            "Answer": "Annapolis",
            "State": "Maryland",
        },
        {
            "Question": "What is the capital city of Massachusetts?",
            "Answer": "Boston",
            "State": "Massachusetts",
        },
        {
            "Question": "What is the capital city of Michigan?",
            "Answer": "Lansing",
            "State": "Michigan",
        },
        {
            "Question": "What is the capital city of Minnesota?",
            "Answer": "Saint Paul",
            "State": "Minnesota",
        },
        {
            "Question": "What is the capital city of Mississippi?",
            "Answer": "Jackson",
            "State": "Mississippi",
        },
        {
            "Question": "What is the capital city of Missouri?",
            "Answer": "Jefferson City",
            "State": "Missouri",
        },
        {
            "Question": "What is the capital city of Montana?",
            "Answer": "Helena",
            "State": "Montana",
        },
        {
            "Question": "What is the capital city of Nebraska?",
            "Answer": "Lincoln",
            "State": "Nebraska",
        },
        {
            "Question": "What is the capital city of Nevada?",
            "Answer": "Carson City",
            "State": "Nevada",
        },
        {
            "Question": "What is the capital city of New Hampshire?",
            "Answer": "Concord",
            "State": "New Hampshire",
        },
        {
            "Question": "What is the capital city of New Jersey?",
            "Answer": "Trenton",
            "State": "New Jersey",
        },
        {
            "Question": "What is the capital city of New Mexico?",
            "Answer": "Santa Fe",
            "State": "New Mexico",
        },
        {
            "Question": "What is the capital city of New York?",
            "Answer": "Albany",
            "State": "New York",
        },
        {
            "Question": "What is the capital city of North Carolina?",
            "Answer": "Raleigh",
            "State": "North Carolina",
        },
        {
            "Question": "What is the capital city of North Dakota?",
            "Answer": "Bismarck",
            "State": "North Dakota",
        },
        {
            "Question": "What is the capital city of Ohio?",
            "Answer": "Columbus",
            "State": "Ohio",
        },
        {
            "Question": "What is the capital city of Oklahoma?",
            "Answer": "Oklahoma City",
            "State": "Oklahoma",
        },
        {
            "Question": "What is the capital city of Oregon?",
            "Answer": "Salem",
            "State": "Oregon",
        },
        {
            "Question": "What is the capital city of Pennsylvania?",
            "Answer": "Harrisburg",
            "State": "Pennsylvania",
        },
        {
            "Question": "What is the capital city of Rhode Island?",
            "Answer": "Providence",
            "State": "Rhode Island",
        },
        {
            "Question": "What is the capital city of South Carolina?",
            "Answer": "Columbia",
            "State": "South Carolina",
        },
        {
            "Question": "What is the capital city of South Dakota?",
            "Answer": "Pierre",
            "State": "South Dakota",
        },
        {
            "Question": "What is the capital city of Tennessee?",
            "Answer": "Nashville",
            "State": "Tennessee",
        },
        {
            "Question": "What is the capital city of Texas?",
            "Answer": "Austin",
            "State": "Texas",
        },
        {
            "Question": "What is the capital city of Utah?",
            "Answer": "Salt Lake City",
            "State": "Utah",
        },
        {
            "Question": "What is the capital city of Vermont?",
            "Answer": "Montpelier",
            "State": "Vermont",
        },
        {
            "Question": "What is the capital city of Virginia?",
            "Answer": "Richmond",
            "State": "Virginia",
        },
        {
            "Question": "What is the capital city of Washington?",
            "Answer": "Olympia",
            "State": "Washington",
        },
        {
            "Question": "What is the capital city of West Virginia?",
            "Answer": "Charleston",
            "State": "West Virginia",
        },
        {
            "Question": "What is the capital city of Wisconsin?",
            "Answer": "Madison",
            "State": "Wisconsin",
        },
        {
            "Question": "What is the capital city of Wyoming?",
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
    let currentQuestion = cityQuestions[currentQuestionNum].Question;
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
    let currentQuestion = cityQuestions[currentQuestionNum].Question;
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
    let currentQuestion = cityQuestions[currentQuestionNum].Question;
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

