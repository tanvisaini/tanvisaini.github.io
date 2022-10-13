
// var coinButton = document.getElementById("coinButton");

// coinButton.addEventListener("click", zoomIn);

// function zoomIn() {
//   var myImg = document.getElementById("coinButton");
//   var currWidth = myImg.clientWidth;
//   if (currWidth == 2500) return false;
//   else {
//     myImg.style.width = (currWidth + 1000) + "px";
//   }
// }

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
	 
// Image List
images[0] = "dian1.png";
images[1] = "dian2.png";
images[2] = "milkbottle.png";
images[3] = "p5.png";
images[4] = "p6.png";
images[5] = "p7.png";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

  
	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;






  




  
  
