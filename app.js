const newQuoteButton = document.getElementById("new-quote");
const copyButton = document.getElementById("copy-icon");
const adviceIdSpan = document.getElementById("advice-id");
const adviceQuote = document.getElementById("quote");



function getAdviceFromAPI(adviceIdElement, adviceTextElement) {
    fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
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

getAdviceFromAPI();

newQuoteButton.onclick = function (evt) {
    getAdviceFromAPI();
}

copyButton.onclick = function (evt) {
    navigator.clipboard.writeText(adviceQuote.textContent);
    alert("Advice Copied!");
}


