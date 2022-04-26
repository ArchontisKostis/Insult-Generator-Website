/* CONSTANTS DECLARATION */
const newInsultButton = document.getElementById("new-quote");
const copyButton = document.getElementById("copy-icon");
const insultParagraph = document.getElementById("quote");
const alertBox = document.getElementById("alert");
const shareButton = document.getElementById("icon");

const apiUrl =  "https://insult.mattbas.org/api/insult.json";


/* FUNCTIONS DECLARATION */
function getAdviceFromAPI() {
    fetch(apiUrl)
    .then(res => {
        return res.json();
    })
    .then(loadedInsult => {
        insultParagraph.innerHTML = `"${loadedInsult.insult}"`;
        insultParagraph.style.opacity = 1;
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

/* MAIN PROGRAM */

getAdviceFromAPI();

newInsultButton.onclick = function (evt) {  
    insultParagraph.style.opacity = 0;
    getAdviceFromAPI();
    
}

copyButton.onclick = function (evt) {
    navigator.clipboard.writeText(insultParagraph.textContent);
    fadeIn();
    setTimeout(fadeOut, 1000);
}

shareButton.onclick = function (evt) {
    var pageUrl = window.location.href;
    // Open twitter to post the website
    window.open(`https://twitter.com/intent/tweet?url=${pageUrl}&text=Yo!%0AI%20just%20found%20this%20website%20that%20displays%20you%20a%20random%20insult%20just%20for%20fun!!%20%F0%9F%98%88%0AMake%20sure%20to%20check%20it!%20%F0%9F%91%BA`);
}


