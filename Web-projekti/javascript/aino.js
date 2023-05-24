//Making all answers into global variables
let answer_1 = "";
let answer_2 = "";
let answer_3 = "";
let answer_4 = "";
let answer_5 = "";
let answer_6 = "";
let answer_7 = "";
let answer_8 = "";
let answer_9 = "";
let answer_10 = "";
let answer_11 = "";
let answer_12 = "";
let answer_13 = "";
let answer_14 = "";
let answer_15 = "";
let answer_16 = "";
let answer_17 = "";
let answer_18 = "";
let answer_19 = "";
let answer_20 = "";

//Creating global array for right answers
let right = new Array();
//Clicking on start-button starts the firstQuestion-function
const start_button = document.getElementById('start_button');
start_button.addEventListener('click', FirstQuestion);

//Reloads the page when try again -button is clicked
    function reload() {
    location.reload();
}

function FirstQuestion() {

    const secondDiv = document.getElementById("secondDiv");
    const firstDiv = document.getElementById("firstText");

    secondDiv.style.padding = "20px";
    secondDiv.style.border = "2px solid black";
    secondDiv.style.borderRadius = "10px"
    secondDiv.style.boxShadow = "2px 2px grey";
    secondDiv.style.backgroundColor = "lightgreen";

    //New buttons created
    answer_1 = document.createElement("button");
    answer_2 = document.createElement("button");
    answer_3 = document.createElement("button");
    answer_4 = document.createElement("button");

    //new buttons' styles (size, color, mouseover-hovers etc.)
    answer_1.textContent = "16";
    answer_1.style.width = "200px";
    answer_1.style.margin = "10px";
    answer_1.style.backgroundColor = "yellow";
    answer_1.style.borderRadius = "20px";
    answer_1.style.boxShadow = "2px 2px grey";
    answer_1.addEventListener("mouseover", function () {  //Learned from Stackoverflow-site
        answer_1.style.backgroundColor = "green";
    });
    answer_1.addEventListener("mouseout", function () {
        answer_1.style.backgroundColor = "yellow";
    });

    answer_2.textContent = "12";
    answer_2.style.width = "200px";
    answer_2.style.margin = "10px";
    answer_2.style.backgroundColor = "beige";
    answer_2.style.borderRadius = "20px";
    answer_2.style.boxShadow = "2px 2px grey";
    answer_2.addEventListener("mouseover", function () {
        answer_2.style.backgroundColor = "green";
    });
    answer_2.addEventListener("mouseout", function () {
        answer_2.style.backgroundColor = "beige";
    });

    answer_3.textContent = "18";
    answer_3.style.width = "200px";
    answer_3.style.margin = "10px";
    answer_3.style.backgroundColor = "yellowgreen";
    answer_3.style.borderRadius = "20px";
    answer_3.style.boxShadow = "2px 2px grey";
    answer_3.addEventListener("mouseover", function () {
        answer_3.style.backgroundColor = "green";
    });
    answer_3.addEventListener("mouseout", function () {
        answer_3.style.backgroundColor = "yellowgreen";
    });

    answer_4.textContent = "10";
    answer_4.style.width = "200px";
    answer_4.style.margin = "10px";
    answer_4.style.backgroundColor = "cadetblue";
    answer_4.style.borderRadius = "20px";
    answer_4.style.boxShadow = "2px 2px grey";
    answer_4.addEventListener("mouseover", function () {
        answer_4.style.backgroundColor = "green";
    });
    answer_4.addEventListener("mouseout", function () {
        answer_4.style.backgroundColor = "cadetblue";
    });

    //Previous div is hidden when button is pressed and new buttons show up
    secondDiv.innerHTML = "Paljonko on 2 x 6 ?" + "<br>" + "<br>";
    secondDiv.appendChild(answer_1);
    secondDiv.appendChild(answer_2);
    secondDiv.appendChild(answer_3);
    secondDiv.appendChild(answer_4);

    firstDiv.style.display = 'none';

    //Page turns when any answer is clicked
    answer_1.addEventListener('click', SecondQuestion);
    answer_2.addEventListener('click', SecondQuestion);
    answer_3.addEventListener('click', SecondQuestion);
    answer_4.addEventListener('click', SecondQuestion);
    //Scans the right answer
    answer_2.addEventListener('click', rightAnswers);
}

function SecondQuestion() {

    const thirdDiv = document.getElementById("thirdDiv");

    thirdDiv.style.padding = "20px";
    thirdDiv.style.border = "2px solid black";
    thirdDiv.style.borderRadius = "10px"
    thirdDiv.style.boxShadow = "2px 2px grey";
    thirdDiv.style.backgroundColor = "lightblue";

    answer_5 = document.createElement("button");
    answer_6 = document.createElement("button");
    answer_7 = document.createElement("button");
    answer_8 = document.createElement("button");

    answer_5.textContent = "4";
    answer_5.style.width = "200px";
    answer_5.style.margin = "10px";
    answer_5.style.backgroundColor = "yellow";
    answer_5.style.borderRadius = "20px";
    answer_5.style.boxShadow = "2px 2px grey";
    answer_5.addEventListener("mouseover", function () {
        answer_5.style.backgroundColor = "green";
    });
    answer_5.addEventListener("mouseout", function () {
        answer_5.style.backgroundColor = "yellow";
    });

    answer_6.textContent = "3";
    answer_6.style.width = "200px";
    answer_6.style.margin = "10px";
    answer_6.style.backgroundColor = "beige";
    answer_6.style.borderRadius = "20px";
    answer_6.style.boxShadow = "2px 2px grey";
    answer_6.addEventListener("mouseover", function () {
        answer_6.style.backgroundColor = "green";
    });
    answer_6.addEventListener("mouseout", function () {
        answer_6.style.backgroundColor = "beige";
    });

    answer_7.textContent = "2";
    answer_7.style.width = "200px";
    answer_7.style.margin = "10px";
    answer_7.style.backgroundColor = "yellowgreen";
    answer_7.style.borderRadius = "20px";
    answer_7.style.boxShadow = "2px 2px grey";
    answer_7.addEventListener("mouseover", function () {
        answer_7.style.backgroundColor = "green";
    });
    answer_7.addEventListener("mouseout", function () {
        answer_7.style.backgroundColor = "yellowgreen";
    });

    answer_8.textContent = "2.5";
    answer_8.style.width = "200px";
    answer_8.style.margin = "10px";
    answer_8.style.backgroundColor = "cadetblue";
    answer_8.style.borderRadius = "20px";
    answer_8.style.boxShadow = "2px 2px grey";
    answer_8.addEventListener("mouseover", function () {
        answer_8.style.backgroundColor = "green";
    });
    answer_8.addEventListener("mouseout", function () {
        answer_8.style.backgroundColor = "cadetblue";
    });

    thirdDiv.innerHTML = "Paljonko on 120 ÷ 30?" + "<br>" + "<br>";
    thirdDiv.appendChild(answer_5);
    thirdDiv.appendChild(answer_6);
    thirdDiv.appendChild(answer_7);
    thirdDiv.appendChild(answer_8);
    secondDiv.style.display = 'none';

    answer_5.addEventListener('click', ThirdQuestion);
    answer_6.addEventListener('click', ThirdQuestion);
    answer_7.addEventListener('click', ThirdQuestion);
    answer_8.addEventListener('click', ThirdQuestion);

    answer_5.addEventListener('click', rightAnswers);
}

function ThirdQuestion() {

    const fourthDiv = document.getElementById("fourthDiv");

    fourthDiv.style.padding = "20px";
    fourthDiv.style.border = "2px solid black";
    fourthDiv.style.borderRadius = "10px"
    fourthDiv.style.boxShadow = "2px 2px grey";
    fourthDiv.style.backgroundColor = "darkseagreen";

    answer_9 = document.createElement("button");
    answer_10 = document.createElement("button");
    answer_11 = document.createElement("button");
    answer_12 = document.createElement("button");

    answer_9.textContent = "12";
    answer_9.style.width = "200px";
    answer_9.style.margin = "10px";
    answer_9.style.backgroundColor = "yellow";
    answer_9.style.borderRadius = "20px";
    answer_9.style.boxShadow = "2px 2px grey";
    answer_9.addEventListener("mouseover", function () {
        answer_9.style.backgroundColor = "green";
    });
    answer_9.addEventListener("mouseout", function () {
        answer_9.style.backgroundColor = "yellow";
    });

    answer_10.textContent = "12,6";
    answer_10.style.width = "200px";
    answer_10.style.margin = "10px";
    answer_10.style.backgroundColor = "beige";
    answer_10.style.borderRadius = "20px";
    answer_10.style.boxShadow = "2px 2px grey";
    answer_10.addEventListener("mouseover", function () {
        answer_10.style.backgroundColor = "green";
    });
    answer_10.addEventListener("mouseout", function () {
        answer_10.style.backgroundColor = "beige";
    });

    answer_11.textContent = "13";
    answer_11.style.width = "200px";
    answer_11.style.margin = "10px";
    answer_11.style.backgroundColor = "yellowgreen";
    answer_11.style.borderRadius = "20px";
    answer_11.style.boxShadow = "2px 2px grey";
    answer_11.addEventListener("mouseover", function () {
        answer_11.style.backgroundColor = "green";
    });
    answer_11.addEventListener("mouseout", function () {
        answer_11.style.backgroundColor = "yellowgreen";
    });

    answer_12.textContent = "12,5";
    answer_12.style.width = "200px";
    answer_12.style.margin = "10px";
    answer_12.style.backgroundColor = "cadetblue";
    answer_12.style.borderRadius = "20px";
    answer_12.style.boxShadow = "2px 2px grey";
    answer_12.addEventListener("mouseover", function () {
        answer_12.style.backgroundColor = "green";
    });
    answer_12.addEventListener("mouseout", function () {
        answer_12.style.backgroundColor = "cadetblue";
    });

    fourthDiv.innerHTML = "Pyöristä 12,66 kokonaisluvuksi." + "<br>" + "<br>";
    fourthDiv.appendChild(answer_9);
    fourthDiv.appendChild(answer_10);
    fourthDiv.appendChild(answer_11);
    fourthDiv.appendChild(answer_12);
    thirdDiv.style.display = 'none';

    answer_9.addEventListener('click', FourthQuestion);
    answer_10.addEventListener('click', FourthQuestion);
    answer_11.addEventListener('click', FourthQuestion);
    answer_12.addEventListener('click', FourthQuestion);

    answer_11.addEventListener('click', rightAnswers);
}

function FourthQuestion() {

    const fifthDiv = document.getElementById("fifthDiv");

    fifthDiv.style.padding = "20px";
    fifthDiv.style.border = "2px solid black";
    fifthDiv.style.borderRadius = "10px"
    fifthDiv.style.boxShadow = "2px 2px grey";
    fifthDiv.style.backgroundColor = "coral";

    answer_13 = document.createElement("button");
    answer_14 = document.createElement("button");
    answer_15 = document.createElement("button");
    answer_16 = document.createElement("button");

    answer_13.textContent = "1/3";
    answer_13.style.width = "200px";
    answer_13.style.margin = "10px";
    answer_13.style.backgroundColor = "yellow";
    answer_13.style.borderRadius = "20px";
    answer_13.style.boxShadow = "2px 2px grey";
    answer_13.addEventListener("mouseover", function () {
        answer_13.style.backgroundColor = "green";
    });
    answer_13.addEventListener("mouseout", function () {
        answer_13.style.backgroundColor = "yellow";
    });

    answer_14.textContent = "1/2";
    answer_14.style.width = "200px";
    answer_14.style.margin = "10px";
    answer_14.style.backgroundColor = "beige";
    answer_14.style.borderRadius = "20px";
    answer_14.style.boxShadow = "2px 2px grey";
    answer_14.addEventListener("mouseover", function () {
        answer_14.style.backgroundColor = "green";
    });
    answer_14.addEventListener("mouseout", function () {
        answer_14.style.backgroundColor = "beige";
    });

    answer_15.textContent = "1/5";
    answer_15.style.width = "200px";
    answer_15.style.margin = "10px";
    answer_15.style.backgroundColor = "yellowgreen";
    answer_15.style.borderRadius = "20px";
    answer_15.style.boxShadow = "2px 2px grey";
    answer_15.addEventListener("mouseover", function () {
        answer_15.style.backgroundColor = "green";
    });
    answer_15.addEventListener("mouseout", function () {
        answer_15.style.backgroundColor = "yellowgreen";
    });

    answer_16.textContent = "2/3";
    answer_16.style.width = "200px";
    answer_16.style.margin = "10px";
    answer_16.style.backgroundColor = "cadetblue";
    answer_16.style.borderRadius = "20px";
    answer_16.style.boxShadow = "2px 2px grey";
    answer_16.addEventListener("mouseover", function () {
        answer_16.style.backgroundColor = "green";
    });
    answer_16.addEventListener("mouseout", function () {
        answer_16.style.backgroundColor = "cadetblue";
    });

    fifthDiv.innerHTML = "Paljonko 0,33 on murtolukuna ?" + "<br>" + "<br>";
    fifthDiv.appendChild(answer_13);
    fifthDiv.appendChild(answer_14);
    fifthDiv.appendChild(answer_15);
    fifthDiv.appendChild(answer_16);
    fourthDiv.style.display = 'none';

    answer_13.addEventListener('click', FifthQuestion);
    answer_14.addEventListener('click', FifthQuestion);
    answer_15.addEventListener('click', FifthQuestion);
    answer_16.addEventListener('click', FifthQuestion);

    answer_13.addEventListener('click', rightAnswers);

}

function FifthQuestion() {
    const sixthDiv = document.getElementById("sixthDiv");

    sixthDiv.style.padding = "20px";
    sixthDiv.style.border = "2px solid black";
    sixthDiv.style.borderRadius = "10px"
    sixthDiv.style.boxShadow = "2px 2px grey";
    sixthDiv.style.backgroundColor = "lightpink";

    answer_17 = document.createElement("button");
    answer_18 = document.createElement("button");
    answer_19 = document.createElement("button");
    answer_20 = document.createElement("button");

    answer_17.textContent = "26";
    answer_17.style.width = "200px";
    answer_17.style.margin = "10px";
    answer_17.style.backgroundColor = "yellow";
    answer_17.style.borderRadius = "20px";
    answer_17.style.boxShadow = "2px 2px grey";
    answer_17.addEventListener("mouseover", function () {
        answer_17.style.backgroundColor = "green";
    });
    answer_17.addEventListener("mouseout", function () {
        answer_17.style.backgroundColor = "yellow";
    });

    answer_18.textContent = "42";
    answer_18.style.width = "200px";
    answer_18.style.margin = "10px";
    answer_18.style.backgroundColor = "beige";
    answer_18.style.borderRadius = "20px";
    answer_18.style.boxShadow = "2px 2px grey";
    answer_18.addEventListener("mouseover", function () {
        answer_18.style.backgroundColor = "green";
    });
    answer_18.addEventListener("mouseout", function () {
        answer_18.style.backgroundColor = "beige";
    });

    answer_19.textContent = "54";
    answer_19.style.width = "200px";
    answer_19.style.margin = "10px";
    answer_19.style.backgroundColor = "yellowgreen";
    answer_19.style.borderRadius = "20px";
    answer_19.style.boxShadow = "2px 2px grey";
    answer_19.addEventListener("mouseover", function () {
        answer_19.style.backgroundColor = "green";
    });
    answer_19.addEventListener("mouseout", function () {
        answer_19.style.backgroundColor = "yellowgreen";
    });

    answer_20.textContent = "51";
    answer_20.style.width = "200px";
    answer_20.style.margin = "10px";
    answer_20.style.backgroundColor = "cadetblue";
    answer_20.style.borderRadius = "20px";
    answer_20.style.boxShadow = "2px 2px grey";
    answer_20.addEventListener("mouseover", function () {
        answer_20.style.backgroundColor = "green";
    });
    answer_20.addEventListener("mouseout", function () {
        answer_20.style.backgroundColor = "cadetblue";
    });

    sixthDiv.innerHTML = "Paljonko on 50 + 2 ÷ 2 ?" + "<br>" + "<br>";
    sixthDiv.appendChild(answer_17);
    sixthDiv.appendChild(answer_18);
    sixthDiv.appendChild(answer_19);
    sixthDiv.appendChild(answer_20);
    fifthDiv.style.display = 'none';

    answer_20.addEventListener('click', rightAnswers);
    answer_17.addEventListener('click', ResultPage);
    answer_18.addEventListener('click', ResultPage);
    answer_19.addEventListener('click', ResultPage);
    answer_20.addEventListener('click', ResultPage);
}

//Adds points from right answers into array
//Array-length is right answer amount
function rightAnswers() {
    right.push(1);
}

function ResultPage() {
    const resultDiv = document.getElementById("resultDiv");
    let again = document.createElement("button");
    let a = right.length;
    let img1 = document.createElement('img'); //https://pixabay.com/fi/vectors/tytt%c3%b6-kirjoja-pino-lukea-160172/
    let img2 = document.createElement('img'); //https://pixabay.com/fi/illustrations/kawaii-kissa-pieni-kissa-iloinen-5395394/
    let img3 = document.createElement('img'); //https://pixabay.com/fi/vectors/aurinko-onnellinen-auringonpaiste-47083/

    img1.src = "../images/girl.png";
    img1.style.position = "absolute";
    img1.style.right = "10%";
    img1.style.bottom = "0";
    img1.style.height = "100px";

    img2.src = "../images/kissa.png";
    img2.style.position = "absolute";
    img2.style.right = "5%";
    img2.style.bottom = "0";
    img2.style.height = "100px";

    img3.src = "../images/sun.png";
    img3.style.position = "absolute";
    img3.style.right = "5%";
    img3.style.bottom = "0";
    img3.style.height = "100px";

    resultDiv.style.padding = "20px";
    resultDiv.style.border = "2px solid black";
    resultDiv.style.borderRadius = "10px"
    resultDiv.style.boxShadow = "2px 2px grey";
    resultDiv.style.position = "relative";

    //Button for try again-option
    again.textContent = "Yritä uudestaan"
    again.style.padding = "5px";
    again.style.width = "200px";
    again.style.margin = "10px";
    again.style.backgroundColor = "cadetblue";
    again.style.borderRadius = "20px";
    again.style.boxShadow = "2px 2px grey";
    again.addEventListener("mouseover", function () {
        again.style.backgroundColor = "green";
    });
    again.addEventListener("mouseout", function () {
        again.style.backgroundColor = "cadetblue";
    });

    sixthDiv.style.display = 'none';
    
    if (right.length <= 3) {
        resultDiv.style.backgroundColor = "cornflowerblue";
        resultDiv.innerHTML = "Vastasit " + a + " kysymykseen oikein," + "<br>" + "Vaatii hieman harjoitusta!" + "<br>" + "Halutessasi voit yrittää uudelleen!" + "<br>" + "<br>";
        resultDiv.appendChild(img1);
    }
    else if (right.length <= 4) {
        resultDiv.style.backgroundColor = "darksalmon";
        resultDiv.innerHTML = "Vastasit " + a + " kysymykseen oikein," + "<br>" + "Jatka samaan malliin!" + "<br>" + "Halutessasi voit yrittää uudelleen!" + "<br>" + "<br>";
        resultDiv.appendChild(img2);
    }
    else {
        resultDiv.style.backgroundColor = "lightgreen";
        resultDiv.innerHTML = "Vastasit kaikkiin " + a + " kysymykseen oikein" + "<br>" + "Hyvin tehty!" + "<br>" + "<br>"; 
        resultDiv.appendChild(img3);
    }
    resultDiv.appendChild(again);

    again.addEventListener('click', reload);
}