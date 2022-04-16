const newQuoteButton = document.getElementById("new-quote");
const copyButton = document.getElementById("copy-icon");
const adviceIdSpan = document.getElementById("advice-id");
const adviceQuote = document.getElementById("quote");
const alertBox = document.getElementById("alert");



function getAdviceFromAPI(adviceIdElement, adviceTextElement) {
    fetch("https://corsanywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json")
    .then(res => {
        return res.json();
    })
    .then(loadedAdvice => {
        var adviceData = loadedAdvice;
        adviceQuote.innerHTML = `"${adviceData.insult}"`
    })
    .catch( err => {
        console.log(err);
    });
}

function fadeIn(){
    alertBox.style.visibility = "visible";
    alertBox.style.opacity = 1;
}

function fadeOut(){
    alertBox.style.visibility = "hidden";
    alertBox.style.opacity = 0;
}

getAdviceFromAPI();

newQuoteButton.onclick = function (evt) {  
    getAdviceFromAPI();
    fadeOut();
    
}

copyButton.onclick = function (evt) {
    navigator.clipboard.writeText(adviceQuote.textContent);
    fadeIn();
    setTimeout(fadeOut, 1000);
}


