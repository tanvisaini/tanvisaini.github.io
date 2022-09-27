var quoteList = ["NEUTRALIZE", "CAPABILITY of LOW DOLLAR VALUE ITEMs", "STOP-LOSS", 
"CASUALTY", "FRONTAL ATTACK", "DIED OF WOUNDS RECIEVED IN ACTION", "PERSONAL ATTACK"]

var button = document.getElementById("button");
var quote = document.getElementById("quote");
var count = 0;

button.addEventListener("click", displayQuote);

function displayQuote(){
    quote.innerHTML = quoteList[count];
    count ++;
    if (count == quoteList.length){
        count = 0;
    }
}