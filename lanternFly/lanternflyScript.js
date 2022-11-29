var btn = document.getElementById('btn');
var score = 0;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

btn1.addEventListener('click', dead1);
btn1.addEventListener('click', console.log('click'));
btn2.addEventListener('click', dead2);
btn2.addEventListener('click', console.log('click'));
btn3.addEventListener('click', dead3);
btn3.addEventListener('click', console.log('click'));
btn4.addEventListener('click', dead4);
btn4.addEventListener('click', console.log('click'));
btn5.addEventListener('click', dead5);
btn5.addEventListener('click', console.log('click'));
btn6.addEventListener('click', dead6);
btn6.addEventListener('click', console.log('click'));

function dead1() {
  score += 1;
  var image = document.getElementById('SLF1');
  image.src = "smushedSLF.png";
  document.getElementById("score").innerHTML = "Score: " + score.toString();
  setTimeout(() => { image.src = "normalSLF.png"; }, getRndInteger(1000, 5000));
}
function dead2() {
  score += 1;
  var image = document.getElementById('SLF2');
  image.src = "smushedSLF.png";
  document.getElementById("score").innerHTML = "Score: " + score.toString();
  setTimeout(() => { image.src = "normalSLF.png"; }, getRndInteger(1000, 5000));
}
function dead3() {
  score += 1;
  var image = document.getElementById('SLF3');
  image.src = "smushedSLF.png";
  document.getElementById("score").innerHTML = "Score: " + score.toString();
  setTimeout(() => { image.src = "normalSLF.png"; }, getRndInteger(1000, 5000));
}
function dead4() {
  score += 1;
  var image = document.getElementById('SLF4');
  image.src = "smushedSLF.png";
  document.getElementById("score").innerHTML = "Score: " + score.toString();
  setTimeout(() => { image.src = "normalSLF.png"; }, getRndInteger(1000, 5000));
}
function dead5() {
  score += 1;
  var image = document.getElementById('SLF5');
  image.src = "smushedSLF.png";
  document.getElementById("score").innerHTML = "Score: " + score.toString();
  setTimeout(() => { image.src = "normalSLF.png"; }, getRndInteger(1000, 5000));
}
function dead6() {
  score += 1;
  var image = document.getElementById('SLF6');
  image.src = "smushedSLF.png";
  document.getElementById("score").innerHTML = "Score: " + score.toString();
  setTimeout(() => { image.src = "normalSLF.png"; }, getRndInteger(1000, 5000));
}



