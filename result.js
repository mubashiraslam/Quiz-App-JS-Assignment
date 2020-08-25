var score = localStorage.getItem("scoreLocalStorage");  

var loader = document.getElementById("loader");
var checking = document.getElementById("checking");

var actualResult = document.getElementById("actualResult");

var startAnimation;
var stopAnimation;

function checkAnimation(){
    actualResult.style.display = "none";
    //Animation Function
    function checkingAnimation(){
        loader.style.display = "block";
        checking.style.display = "block"
        checking.innerHTML += "."
    }

    //Start Animation
    startAnimation = setInterval(checkingAnimation, 1000)
    
    //Calling Show Result Function
    stopAnimation = setTimeout(showActualResult, 5000)
}

function showActualResult(){
    //Stop Animation
    clearInterval(startAnimation);
    
    //Remove the checking animation
    loader.style.display = "none";
    checking.style.display = "none";

    //Display actual result
    var resultName = document.getElementById("resultName")
    var resultScore = document.getElementById("resultScore")

    resultScore.innerHTML = score;
    resultName.innerHTML = name;

    actualResult.style.display = "block";
    clearTimeout(stopAnimation);
}