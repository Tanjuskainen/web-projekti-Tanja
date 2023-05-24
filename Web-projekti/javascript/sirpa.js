//kokeile tämä, taas uus testi=)
//muokkaa htm//responsiivisuus!!!question div
//progressbar?
//ja toiminnallisuus kysymysten vaihtumiselle, kun mitä tahansa buttonia painetaan
//näytä vastaus ja kasvin kuvaus
//carousel?
//answer if button123 pressed
//next
//points++ if ok
//q5-> gif + points
//play again
/*const array_question = [q1, q2, q3, q4, q5]*/
const q1 = document.getElementsByClassName("q1");
const q2 = document.getElementsByClassName("q2");
const q3 = document.getElementsByClassName("q3");
const q4 = document.getElementsByClassName("q4");
const q5 = document.getElementsByClassName("q5");
/*let button = document.getElementByClass("button");*/
const start = document.getElementById("start");
let x = document.getElementById("x");
let ok = document.getElementById("ok");
let y = document.getElementById("y");
let points = 1;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");



start.addEventListener("click", startQuiz);
function startQuiz() {
    if("start")
        h2.textContent = " Kiva kun tulit! Aloitetaan.";
}
    /*quiz.length -1;
        displayQuiz();

/*
    /*display.start_button = "none";
    display.quiz.style = "block";
    quiz.style= "block"; ...mitähän helvettiä...
    quiz.forEach[question, button1, button2, button3]++;*/


    ok.addEventListener("click", okPressed);
    function okPressed() {
    if("ok"){
        h2.textContent = " Hienoa! Vastasit oikein. Sinulla on " + points + " pistettä.";
        /*document.getElementById("ok").innerHTML;*/
        }
        /*else if ("x" || "y"){
            h3.textContent = " Nyt ei mennyt oikein.";
            }*/
            points++;
        }
//muuta niin, että vain x-vaiht. ja else if siitä
    x.addEventListener("click", xPressed);        
    function xPressed() {
    if("x"){
        h3.textContent = " Nyt ei mennyt oikein.";

    }}

    y.addEventListener("click", yPressed);        
    function yPressed() {
    if("y"){ 
        h3.textContent = " Nyt ei mennyt oikein. ";

    }}

//tulosta pisteet
/*function play_again(){
//tee button tälle/reload*//*
}}*/
