var btn = document.getElementById('btn');
var noise = document.getElementById('noise');

var count = 40;

btn.addEventListener('click', addNoise);


function addNoise(){
  noise.innerHTML += 'NOISE';
  count ++;
  console.log(count);
  noise.style.fontSize = count + "px";
  
}