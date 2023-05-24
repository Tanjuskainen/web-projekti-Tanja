//Mariella Heikkilä TIK23KM

//create an array containing questions, answers, images and explanation
const quizInformation = [
    {
        question: "Valitse vaihtoehdoista kotieläin:",
        picture : "../images/flower01.png",
        optionA:  'Karhu',
        optionB: 'Pöllö', 
        optionC: 'Lehmä',
        correct: 'C',
        explanation: "-Yleensä kotieläin on hyötyeläin. Lehmän tuottama hyödyke ihmiselle on maito. ",
    },
    {
        question: "Valitse vaihtoehdoista petoeläin:",
        picture : "../images/flower02.png",
        optionA:  'Vuohi',
        optionB: 'Susi', 
        optionC: 'Lammas',
        correct: 'B',
        explanation: "-Susi on petoeläin, joka tappaa ja syö toisia eläimiä. ",
    },
    {
        question: "Mitä ravintoa kastemato syö?",
        picture : "../images/flower03.png",
        optionA:  'Kuolleita kasvin osia',
        optionB: 'Kengänpohjia', 
        optionC: 'Muovia',
        correct: 'A',
        explanation: "-Kastemato eli kasteliero on maaperän muokkaaja, kuohkeuttaja ja maanparantaja. ",
    },
    {
        question: "Millä eläimellä on kaviot?",
        picture : "../images/flower04.png",
        optionA:  'Kissalla',
        optionB: 'Kanilla', 
        optionC: 'Hevosella',
        correct: 'C',
        explanation: "-Hevonen on kavioeläin, jolla on yksi varvas.",
    },
    {
        question: "Valitse vesilintu:",
        picture : "../images/flower05.png",
        optionA:  'Laulujoutsen',
        optionB: 'Haikara', 
        optionC: 'Kana',
        correct: 'A',
        explanation: "-Laulujoutsen on suuri valkoinen vesilintu sekä puolisukeltaja.",
    },
];
//select all elements
const startbutton = document.getElementById("startbutton");
const quiz = document.getElementById("quiz");
const askquestion = document.getElementById("askquestion");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const qpicture = document.getElementById("picture");
const wrongornot = document.getElementById("wrongornot");
const scoreimage = document.getElementById("scoreimage");
const rightanswerscount = document.getElementById("rightanswerscount");
const reloadbutton = document.getElementById("reloadbutton");

//create some variables for checking quizinformation and score counting
//array starts [0]
const lastQuizInfo = quizInformation.length -1; 
let countingQuizInfo = 0; 
let score = 0; 

// start comes first with adding listener to id startbutton
startbutton.addEventListener("click", playQuiz);

// start quiz: hiding startbutton display
// showing quizdiv that has display: none in html
//after hiding start and showing quiz, present quizdata and progress
function playQuiz() {
    startbutton.style.display = "none";    
    displayQuizInfo(); 
    quiz.style.display = "block";
    loopProgressBalls();   
}
//Display quiz information: created variable for array for conviniency (shorter name)
//displaying question, options and picture from array
function displayQuizInfo() {
    let q = quizInformation[countingQuizInfo]; 

    askquestion.innerHTML = "<p>" + q.question +"</p>";    
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    qpicture.innerHTML = "<img src=" + q.picture + ">";
}
//using for loop for creating enough progressballs according to array length
function loopProgressBalls() {
    for(let qamount = 0; qamount <= lastQuizInfo; qamount++) {
        wrongornot.innerHTML += "<div class='wrongor' id=" + qamount + "></div>";         
    }
}
//checking if chosen answer is right or wrong
//answer is correct, score goes up and color is green, else color is red
//New question is rendered after answer is given and after last question display results function
function checkOption(answer) {
    if( answer == quizInformation[countingQuizInfo].correct) {        
        score++;
        document.getElementById(countingQuizInfo).style.backgroundColor = "lightgreen";
    } else {
        document.getElementById(countingQuizInfo).style.backgroundColor = "hotpink";
    }
    if(countingQuizInfo < lastQuizInfo) {
        countingQuizInfo++;        
        displayQuizInfo();
    } else {
        resultsInfo();
    }
}
//resultpage shows explanation and score with three different pictures
function resultsInfo() {
    quiz.style.display = "none";
    results.style.display = "block";

    let scoreimg =  (score >= 4) ? "../images/bunny03.png" :
                    (score >= 2) ? "../images/bunny02.png" :
                    "../images/bunny01.png";

    rightanswerscount.innerHTML = "Sait " + score + " oikein viidestä.";
    scoreimage.innerHTML = "<img src=" + scoreimg + ">";
    quizInformation.forEach(quizInformation => { 
        explanations.innerHTML +=        
        quizInformation.explanation + "<br>";
    });    
}
//resultpage has reloadbutton that reloads page
function reloadButton() {
    location.reload();
}

//sources used to study for array structure and for quiz structure: 
// https://en.wikipedia.org/wiki/JSON
// https://simplestepscode.com/javascript-quiz-tutorial/
// https://www.youtube.com/watch?v=_Im_xc_jMnk
// https://www.codingninjas.com/codestudio/library/how-to-create-a-javascript-quiz-code

//images made by M.Siltala, 8v.