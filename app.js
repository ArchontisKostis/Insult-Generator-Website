const newQuoteButton = document.getElementById("new-quote");
const copyButton = document.getElementById("copy-icon");
const adviceIdSpan = document.getElementById("advice-id");
const adviceQuote = document.getElementById("quote");
const alertBox = document.getElementById("alert");
const shareButton = document.getElementById("icon");



function getAdviceFromAPI(adviceIdElement, adviceTextElement) {
    fetch("https://corsanywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json")
    .then(res => {
        return res.json();
    })
    .then(loadedAdvice => {
        var adviceData = loadedAdvice;
        adviceQuote.innerHTML = `"${adviceData.insult}"`
        adviceQuote.style.opacity = 1;
        // makeHtmlPhoto(adviceData.insult, shareButton);
        
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

shareButton.onclick = function (evt) {
    var pageUrl = window.location.href;
    window.open(`https://twitter.com/intent/tweet?url=${pageUrl}&text=Yo!%0AI%20just%20found%20this%20website%20that%20displays%20you%20a%20random%20insult%20just%20for%20fun!!%20%F0%9F%98%88%0AMake%20sure%20to%20check%20it!%20%F0%9F%91%BA`);
}


