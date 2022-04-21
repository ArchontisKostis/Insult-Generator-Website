const newInsultButton = document.getElementById("new-quote");
const copyButton = document.getElementById("copy-icon");
const adviceIdSpan = document.getElementById("advice-id");
const adviceQuote = document.getElementById("quote");
const alertBox = document.getElementById("alert");
const shareButton = document.getElementById("icon");

const apiUrl =  "https://corsanywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json";


function getAdviceFromAPI(adviceIdElement, adviceTextElement) {
    fetch(apiUrl)
    .then(res => {
        return res.json();
    })
    .then(loadedInsult => {
        adviceQuote.innerHTML = `"${loadedInsult.insult}"`;
        adviceQuote.style.opacity = 1;
    })
    .catch( err => {
        console.log(err);
    });
}

function fadeIn(){
    alertBox.style.opacity = 1;
    alertBox.style.visibility = 'visible';
}

function fadeOut(){
    alertBox.style.opacity = 0;
    alertBox.style.visibility = 'hidden';
}

getAdviceFromAPI();

newInsultButton.onclick = function (evt) {  
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


