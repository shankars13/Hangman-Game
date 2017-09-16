var singersName = ["madonna", "taylor", "beyonce", "ariana", "selena", "katy", "rihanna", "alicia", "adele", "whitney"];
var wins = 0;
var guessLeft = 12;


// Array to store the right guess & wrong guess made made
var rightArray = new Array();
var wrongArray = new Array();
// Randomly chosen word from the singersName array
var compSinger = singersName[Math.floor(Math.random() * singersName.length)];
var screenArray = new Array();
var singerArray = Array.from(compSinger);

genUnderscores();
document.getElementById("current-word").innerHTML = screenArray.join(" ");


//console.log(compSinger);


// Array to hold the on screen display of the singer name. Initialize with _
function genUnderscores() {
	for (var j=0;j<compSinger.length;j++) {
		screenArray.push("_");
	}
	return screenArray;
}
	

// Pick the right image and music after the correct word is guessed
function getImageMusic(artist) {
	var artistSong = document.getElementById("music"); 

	if(artist==="beyonce"){
		document.getElementById("picture").src="assets/images/beyonce.jpg";
		artistSong.setAttribute('src', "assets/audio/beyonce.mp3");
	}

	if(artist==="madonna"){
	document.getElementById("picture").src="assets/images/madonna.png";
	artistSong.setAttribute('src', "assets/audio/madonna.mp3");
	}

	if(artist==="taylor"){
	document.getElementById("picture").src="assets/images/taylor.jpg";
	artistSong.setAttribute('src', "assets/audio/taylor.mp3");
	}

	if(artist==="ariana"){
	document.getElementById("picture").src="assets/images/ariana.jpg";
	artistSong.setAttribute('src', "assets/audio/ariana.mp3");
	}

	if(artist==="selena"){
	document.getElementById("picture").src="assets/images/selena.jpg";
	artistSong.setAttribute('src', "assets/audio/selena.mp3");
	}

	if(artist==="katy"){
	document.getElementById("picture").src="assets/images/katy.jpg";
	artistSong.setAttribute('src', "assets/audio/katy.mp3");
	}

	if(artist==="rihanna"){
	document.getElementById("picture").src="assets/images/rihanna.jpg";
	artistSong.setAttribute('src', "assets/audio/rihanna.mp3");
	}

	if(artist==="alicia"){
	document.getElementById("picture").src="assets/images/alicia.jpg";
	artistSong.setAttribute('src', "assets/audio/alicia.mp3");
	}

	if(artist==="adele"){
	document.getElementById("picture").src="assets/images/adele.jpg";
	artistSong.setAttribute('src', "assets/audio/adele.mp3");
	}	

	if(artist==="whitney"){
	document.getElementById("picture").src="assets/images/whitney.jpg";
	artistSong.setAttribute('src', "assets/audio/whitney.mp3");
	}	

	alert("You win.. The word is : " + compSinger.toUpperCase());
	resetValue();
}


//When any key is pressed for guessing 

document.addEventListener("keypress", function(event) {

	var keyChar = String.fromCharCode(event.keyCode);
	keyChar = keyChar.toLowerCase()	

   console.log(compSinger);
  
	if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)){
	    if (compSinger.indexOf(keyChar) > -1) {
	    	rightArray.push(keyChar);

			// Replace underscore with all occurence of right guess
	  		for (var i=0;i<compSinger.length;i++) {
	    		if (compSinger[i] === keyChar) {
	    				screenArray[i] = keyChar;
	    		}
	    	}

	    document.getElementById("current-word").innerHTML = screenArray.join(" ");
		}
			
		if (screenArray.join("") === compSinger) {
//	   		console.log(compSinger);
	   		wins++;
	   		document.getElementById("wins").innerHTML = wins;
	   		getImageMusic(compSinger);
	   	}

	    else {

		    	if (wrongArray.indexOf(keyChar) < 0) {
			    	wrongArray.push(keyChar);
			    	guessLeft--;
		//	    	    	console.log(wrongArray);
			    	document.getElementById("guess-num").innerHTML = guessLeft;
			    	document.getElementById("guess-arr").innerHTML = wrongArray;
			    }
			    else {
			    	alert ("Character " + keyChar + " already guessed");
			    }

				if (guessLeft < 0) {
					alert ("You did not get it. The word is : " + compSinger.toUpperCase() + " . Try again !");
					resetValue();
				}
	    	}
	}
});


//Reset values userGuess array, guessLeft & compPick 

function resetValue() {
	for (var i = 26; i >= 0; i--) {
		screenArray.pop();
		rightArray.pop();
		wrongArray.pop();
	}

	guessLeft = 12;
	compSinger = singersName[Math.floor(Math.random() * singersName.length)];
	genUnderscores();
   	document.getElementById("current-word").innerHTML = screenArray.join(" ");
	document.getElementById("guess-num").innerHTML = guessLeft;
	document.getElementById("guess-arr").innerHTML = wrongArray;
}
