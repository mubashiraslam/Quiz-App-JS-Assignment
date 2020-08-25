var name;
var score=0;
var totalQuestions=10;
var currentQN=0;

var questions = [
    {
        question : "Urdu was declared national language of Pakistan in?",
        answer : "April 1954",
        options : ["April 1950", "April 1955", "April 1954", "April 1952"]
    },
    {
        question : "Who composed the verses of Pakistan national Anthem?",
        answer : "Hafeez Jallandri",
        options : ["Hafeez Jallandri", "Nasir Kazmi", "Allama Iqbal", "Faiz Ahmed Faiz"]
    },
    {
        question : "“Sassi Punun” is a love story of?",
        answer : "Sindhi",
        options : ["Punjabi", "Pushto", "Sindhi", "Siraiki"]
    },
    {
        question : "When was the national anthem of Pakistan first played?",
        answer : "13th August 1954",
        options : ["14th August 1948", "13th August 1954", "14th August 1950", "23rd March 1949"]
    },
    {
        question : "The first Rocket launched by Pakistan was?",
        answer : "Rahbar",
        options : ["Ghauri", "Rahbar", "Badar", "Ghaznavi"]
    },
    {
        question : "The first nuclear power plant in Pakistan was established at?",
        answer : "Karachi",
        options : ["Chashma", "Karachi", "Mianwali", "None of these"]
    },
    {
        question : "Which desert is locted in Eastern part of Punjab?",
        answer : "Cholistan Desert",
        options : ["Thal Desert", "Cholistan Desert", "Kharan Desert", "Thar Desert"]
    },
    {
        question : "What was the old name of PIA?",
        answer : "Orient Airways",
        options : ["Independence Airways", "Orient Airways", "Kolachi Airways", "Air Pakistan"]
    },
    {
        question : "What official name was given to Pakistan in 1956 constitution?",
        answer : "Islamic Republic of Pakistan",
        options : ["Islamic Pakistan", "Islamic Republic of Pakistan", "Republic of Pakistan", "United States of Pakistan"]
    },
    {
        question : "Who was the Prime Minister of Pakistan during enforcement of first constitution?",
        answer : "Choudhry Mohammad Ali",
        options : ["Khuwaja Nazim Uddin", "Muhammad Ali Bogra", "Ibrahim Ismail Chundrigar", "Choudhry Mohammad Ali"]
    }
]

function startQuiz(){
    var sName = document.getElementById("name");
    if(sName.value == ""){
        alert("Please Enter Your Name To Start Quiz")
    } else window.location.href = "quiz.html";
    name = sName.value;
}

function showQuestions(n){
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.style.display = "none"

    //Putting Question Number
    var QN = n+1;
    var qNumber = document.getElementById("qNumber");
    qNumber.innerHTML = "Question #";
    qNumber.innerHTML += QN;

    //Putting Question
    var question = document.getElementById("question");
    question.innerHTML = "Q) ";
    question.innerHTML += questions[n].question;

    //Putting Options
    var options = document.getElementsByClassName("options");
    for(var i=0;i<options.length;i++){
        options[i].innerHTML = questions[n].options[i];
    }

    currentQN++;
}

function checkAnswer(c){
    var options = document.getElementsByClassName("options");
    var selectCheck = [document.getElementById("option1"), document.getElementById("option2"), document.getElementById("option3"), document.getElementById("option4")]
    var checked;
    for(var i=0; i<selectCheck.length; i++){
        if(selectCheck[i].checked == true){
            checked=i;
            break;
        }
    }
    if(options[checked].innerHTML == questions[c].answer){
        score++;
    }
}

function nextQuestion(e){
    var radioBtns = [document.getElementById("option1"), document.getElementById("option2"), document.getElementById("option3"), document.getElementById("option4")]
    var tempChecked=0;
    for(var i=0;i<radioBtns.length;i++){
        if(radioBtns[i].checked == false){
            tempChecked++;
        }
    }
    if(tempChecked == 4){
        alert("Please select an option");
    } else { checkAnswer(currentQN-1);

    //Clear Radio Buttons
    for(var i=0;i<radioBtns.length;i++){
        radioBtns[i].checked = false;
    }

    showQuestions(currentQN);

    //Show Submit Button When Question Completed
    if(currentQN == 10){
        e.style.display = "none";
        submitBtn.style.display = "inline-block"
    }
    }
}

function submitQuiz(){
    var radioBtns = [document.getElementById("option1"), document.getElementById("option2"), document.getElementById("option3"), document.getElementById("option4")]
    var tempChecked=0;
    for(var i=0;i<radioBtns.length;i++){
        if(radioBtns[i].checked == false){
            tempChecked++;
        }
    }
    if(tempChecked == 4){
        alert("Please select an option");
    } else {
        checkAnswer(currentQN-1);
        localStorage.setItem("scoreLocalStorage", score);
        window.location.href = "result.html";
    }
}