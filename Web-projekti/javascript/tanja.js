function start() {
    document.getElementById("aloitus").style.display = 'none';
    document.getElementById("question1").style.display = 'block';
}

const answers = ['Turku', 'Tyynimeri', 'Norja', 'Pariisi, Ranska', 'Ahvenanmaa'  ];
let round = 1;
let points = 0;

function checkAnswer(questionNumber) {
    // Etsitään valittu vastaus
    let radios = document.getElementsByName('q' + questionNumber);
    let userAnswer = null;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            userAnswer = radios[i].value;
            break;
        }
    }
    if (userAnswer === null) {
        alert('Valitse yksi');
    }

    else {

        // Tarkistetaan, onko vastaus oikein. Jos oikein, lisätään piste points-muuttujaan
        // Jos väärin, näytetään oikea vastaus
        let correctAnswer = answers[questionNumber - 1];
        let articleElement = document.querySelector('.article');
        let resultDiv = document.getElementById('result');

        if (userAnswer === correctAnswer) {
            resultDiv.innerHTML = 'Oikein!';
            points++;
            articleElement.classList.add('right');
        } else {
            resultDiv.innerHTML = 'Väärin! Oikea vastaus on ' + correctAnswer + '.';
            articleElement.classList.add('wrong');
        }

        // Piilotetaan kysymys ja submit-nappi, ja näytetään "jatka" -nappi
        let questionDiv = document.getElementById('question' + questionNumber);
        questionDiv.style.display = 'none';
        let submitButton = questionDiv.getElementsByTagName('button')[0];
        submitButton.style.display = 'none';
        let nextButton = document.getElementById('nextButton');
        nextButton.style.display = 'block';
        //lisätään kierroslaskuriin kierros ja testataan konsoliin toimiiko tähän saakka
        round++
        console.log(round);
    }
}


// Piilotetaan tulos ja "jatka"-nappi, seuraava kysymys esille
function nextQuestion() {
    let articleElement = document.querySelector('.article');
    articleElement.classList.remove('right', 'wrong');
    //ylikirjoitetaan tulos tyhjällä merkkijonolla
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    let nextButton = document.getElementById('nextButton');
    nextButton.style.display = 'none';

    //valitaan seuraava elementbyid div question + round
    let next = document.getElementById('question' + round);

    //tarkistetaan onko kierroksia jäljellä ja näytetään seuraava kysymys
    if (round < 6) {
        next.style.display = 'block';

        //muuten näytetään tulokset
    } else {
        // Kaikki kysymykset käyty läpi, lopetus, pisteet ja tsemppiteksti
        let viesti;
        if (points > 0 && points < 3) {
            viesti = "Hyvä yritys, kertaa vielä vähän!";
        } else if (points >= 3 && points < 5) {
            viesti = "Hienoa, lähes täydet pisteet!";
        } else if (points == 5) {
            viesti = "Onneksi olkoon, täydet pisteet! Sinulla on homma hanskassa!";
        } else {
            viesti = "Älä lannistu, koskaan ei ole liian myöhäistä opetella uusia asioita.";
        }
        console.log(viesti);
        let endResults = document.getElementById('end');
        endResults.insertAdjacentHTML('beforebegin', '<h2>Pisteet: ' + points + '/5</h2><br><p>' + viesti + '</p><br>');
        endResults.style.display = 'block';

    }
}