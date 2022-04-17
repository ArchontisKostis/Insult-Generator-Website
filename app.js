const newQuoteButton = document.getElementById("new-quote");
const copyButton = document.getElementById("copy-icon");
const adviceIdSpan = document.getElementById("advice-id");
const adviceQuote = document.getElementById("quote");
const alertBox = document.getElementById("alert");
const takePhotoIcon = document.getElementById("downloadLink");



function getAdviceFromAPI(adviceIdElement, adviceTextElement) {
    fetch("https://corsanywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json")
    .then(res => {
        return res.json();
    })
    .then(loadedAdvice => {
        var adviceData = loadedAdvice;
        adviceQuote.innerHTML = `"${adviceData.insult}"`
        adviceQuote.style.opacity = 1;
        makeHtmlPhoto(adviceData.insult, takePhotoIcon);
        
    })
    .catch( err => {
        console.log(err);
    });
}

function fadeIn(){
    alertBox.style.opacity = 1;
}

function fadeOut(){
    alertBox.style.opacity = 0;
}

getAdviceFromAPI();

newQuoteButton.onclick = function (evt) {  
    adviceQuote.style.opacity = 0;
    getAdviceFromAPI();
    
}

copyButton.onclick = function (evt) {
    navigator.clipboard.writeText(adviceQuote.textContent);
    fadeIn();
    setTimeout(fadeOut, 1000);
}


