const sentenceEl = document.getElementById('sentence');
const letterEl = document.getElementById('letter');
const submitBtnEl = document.getElementById('submitBtn');
const resultEl = document.getElementById('result');

submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    event.preventDefault();
    let myString = sentenceEl.value;
    let le = letterEl.value;
    console.log(myString)
    if (myString.includes(le)) {
        myString = myString.substring(myString.indexOf(le) + 1)
        resultEl.textContent = myString;
        resultEl.style.color = "green";
    } else {
        resultEl.textContent = "The letter does not exist in the sentence";
        resultEl.style.color = "red";
    }
});