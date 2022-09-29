// var quoteList = ["NEUTRALIZE", "CAPABILITY of LOW DOLLAR VALUE ITEMs", "STOP-LOSS", 
// "CASUALTY", "FRONTAL ATTACK", "DIED OF WOUNDS RECIEVED IN ACTION", "PERSONAL ATTACK"]

// var quoteList = ["Hello. Do you know who I am?"]
var quoteList2 = ["Hello. Do you know who I am?","Amoo Javad I'd say.", "Janam you would respond—", "My life, my soul, you'd say—", "Do you know who I am", "Yes. "]

var button = document.getElementById("button");
var quote = document.getElementById("quote");
var count = 0;

button.addEventListener("click", displayQuote);

function displayQuote(){
    quote.innerHTML = quoteList2[count];
    count ++;
    if (count == quoteList2.length){
        count = 0;
    }
}

// Peotry of Proximity 
var space = document.getElementById("space");
var proximityButton = document.getElementById("proximityButton");
var stanza = document.getElementById("stanza");

proximityButton.addEventListener("click", displaySpace);

function Space(){
    stanza.style.paddingLeft = space;
}



