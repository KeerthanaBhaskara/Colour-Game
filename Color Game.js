var noOfSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");

init();

function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?noOfSquares=3:noOfSquares=6;
		reset();

		})

	}
}
function setupSquares(){
	for(var i=0;i<squares.length;i++){

		squares[i].addEventListener("click",function (){
		//get color of picked square and compare color to pickedColor
		clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?";
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
			}
		});
	}

}
function init(){

	setupModeButtons();
	
	setupSquares();

	reset();
}


function reset(){
	colors=generateRandomColors(noOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	for(var i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none"; 
	} 
}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	noOfSquares=3
// 	colors=generateRandomColors(noOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
	
// })
// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	noOfSquares=6;
// 	colors=generateRandomColors(noOfSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";
// 	}

// })

resetButton.addEventListener("click",function(){
	reset();
});


for(var i=0;i<squares.length;i++){

	squares[i].addEventListener("click",function (){
		//get color of picked square and compare color to pickedColor
		clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?";
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}


function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}

}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;

}

function randomColor(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return "rgb("+ red+", "+green+", "+blue+")";
	
}

