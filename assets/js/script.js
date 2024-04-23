const cityQuestions = [
        {
            "Question": "What is the capital city of Alabama?",
            "Answer": "Montgomery",
        },
        {
            "Question": "What is the capital city of Alaska?",
            "Answer": "Juneau",
        },
        {
            "Question": "What is the capital city of Arizona?",
            "Answer": "Phoenix",
        },
        {
            "Question": "What is the capital city of Arkansas?",
            "Answer": "Little Rock",
        },
        {
            "Question": "What is the capital city of California?",
            "Answer": "Sacramento",
        },
        {
            "Question": "What is the capital city of Colorado?",
            "Answer": "Denver",
        },
        {
            "Question": "What is the capital city of Connecticut?",
            "Answer": "Hartford",
        },
        {
            "Question": "What is the capital city of Delaware?",
            "Answer": "Dover",
        },
        {
            "Question": "What is the capital city of Florida?",
            "Answer": "Tallahassee",
        },
        {
            "Question": "What is the capital city of Georgia?",
            "Answer": "Atlanta",
        },
        {
            "Question": "What is the capital city of Hawaii?",
            "Answer": "Honolulu",
        },
        {
            "Question": "What is the capital city of Idaho?",
            "Answer": "Boise",
        },
        {
            "Question": "What is the capital city of Illinois?",
            "Answer": "Springfield",
        },
        {
            "Question": "What is the capital city of Indiana?",
            "Answer": "Indianapolis",
        },
        {
            "Question": "What is the capital city of Iowa?",
            "Answer": "Des Moines",
        },
        {
            "Question": "What is the capital city of Kansas?",
            "Answer": "Topeka",
        },
        {
            "Question": "What is the capital city of Kentucky?",
            "Answer": "Frankfort",
        },
        {
            "Question": "What is the capital city of Louisiana?",
            "Answer": "Baton Rouge",
        },
        {
            "Question": "What is the capital city of Maine?",
            "Answer": "Augusta",
        },
        {
            "Question": "What is the capital city of Maryland?",
            "Answer": "Annapolis",
        },
        {
            "Question": "What is the capital city of Massachusetts?",
            "Answer": "Boston",
        },
        {
            "Question": "What is the capital city of Michigan?",
            "Answer": "Lansing",
        },
        {
            "Question": "What is the capital city of Minnesota?",
            "Answer": "Saint Paul",
        },
        {
            "Question": "What is the capital city of Mississippi?",
            "Answer": "Jackson",
        },
        {
            "Question": "What is the capital city of Missouri?",
            "Answer": "Jefferson City",
        },
        {
            "Question": "What is the capital city of Montana?",
            "Answer": "Helena",
        },
        {
            "Question": "What is the capital city of Nebraska?",
            "Answer": "Lincoln",
        },
        {
            "Question": "What is the capital city of Nevada?",
            "Answer": "Carson City",
        },
        {
            "Question": "What is the capital city of New Hampshire?",
            "Answer": "Concord",
        },
        {
            "Question": "What is the capital city of New Jersey?",
            "Answer": "Trenton",
        },
        {
            "Question": "What is the capital city of Nex Mexico?",
            "Answer": "Santa Fe",
        },
        {
            "Question": "What is the capital city of New York?",
            "Answer": "Albany",
        },
        {
            "Question": "What is the capital city of North Carolina?",
            "Answer": "Raleigh",
        },
        {
            "Question": "What is the capital city of North Dakota?",
            "Answer": "Bismarck",
        },
        {
            "Question": "What is the capital city of Ohio?",
            "Answer": "Columbus",
        },
        {
            "Question": "What is the capital city of Oklahoma?",
            "Answer": "Oklahoma City",
        },
        {
            "Question": "What is the capital city of Oregon?",
            "Answer": "Salem",
        },
        {
            "Question": "What is the capital city of Pennsylvania?",
            "Answer": "Harrisburg",
        },
        {
            "Question": "What is the capital city of Rhode Island?",
            "Answer": "Providence",
        },
        {
            "Question": "What is the capital city of South Carolina?",
            "Answer": "Columbia",
        },
        {
            "Question": "What is the capital city of South Dakota?",
            "Answer": "Pierre",
        },
        {
            "Question": "What is the capital city of Tennessee?",
            "Answer": "Nashville",
        },
        {
            "Question": "What is the capital city of Texas?",
            "Answer": "Austin",
        },
        {
            "Question": "What is the capital city of Utah?",
            "Answer": "Salt Lake City",
        },
        {
            "Question": "What is the capital city of Vermont?",
            "Answer": "Montpelier",
        },
        {
            "Question": "What is the capital city of Virginia?",
            "Answer": "Richmond",
        },
        {
            "Question": "What is the capital city of Washington?",
            "Answer": "Olympia",
        },
        {
            "Question": "What is the capital city of West Virginia?",
            "Answer": "Charleston",
        },
        {
            "Question": "What is the capital city of Wisconsin?",
            "Answer": "Madison",
        },
        {
            "Question": "What is the capital city of Wyoming?",
            "Answer": "Cheyenne",
        },
    ]
let question = cityQuestions[0].Question;
let answer = cityQuestions[0].Answer;
let userAnswer = document.getElementById("answer-area").value;

function checkAnswer(userAnswer) {
    if(userAnswer === answer) {
        alert('Correct!');
    } else {
        alert(`Incorrect. The correct answer is ${cityQuestions[0].Question}`);
    }
}