
let userScore = 0;
let botScore = 0;
let choiceCount = {
	user: {
		K: 0,
		P: 0,
		N: 0
	  },
	  bot: {
		K: 0,
		P: 0,
		N: 0
	  }
  };
let roundNum = 0;

function startGame(userChoice,botChoice) {
	alert("Ahoj, po odkliknutí tlačítka 'OK' alebo stlačení Enteru prosím zadaj: \n\n 'K' pre kameň \n 'P' pre papier \n 'N' pre nožnice \n\nVoľba je len na tebe, vyskúšaj si svoje štastie či vyhráš proti botovi! ")
	let userInput = prompt(" 'K' pre kameň \n 'P' pre papier \n 'N' pre nožnice");
	roundNum++;	
	if (userInput !== "") {
		let userChoice = userInput;
		console.log(roundNum + '. hra');
		console.log("Hrac si vybral :" + userChoice);
		if (userChoice === "K" || userChoice === "P" || userChoice === "N" ){
	
		
		let botChoice = getRandomChoice();
		console.log("Bot si vybral :" + botChoice);
		choiceCount.user[userChoice]++;
		choiceCount.bot[botChoice]++;
		let result = makeWinner(userChoice, botChoice);
		alert(result);
		console.log(result);
		
	} else {
		alert("Nesprávne písmeno, skús znovu");
		console.log("Nesprávne písmeno, skús znovu");
	
	}
	console.log("Skore hraca:", userScore);
	console.log("Skore bota:", botScore);
	console.log("Historia hraca:", choiceCount.user);
	console.log("Historia bota:", choiceCount.bot);
	console.log("------------------------------------")
	
	
	document.getElementById("userScore").textContent = userScore;
	document.getElementById("botScore").textContent = botScore;
	
}
	
}

function getRandomChoice() {
	let choices = ["K", "P", "N"];
	let randomNum = Math.floor(Math.random() * 3);
	return choices[randomNum];
}

function makeWinner(userChoice, botChoice) {
	if (userChoice === botChoice) {
		
		return "Remiza!";

	} else if (
		(userChoice === "K" && botChoice === "N") ||
		(userChoice === "P" && botChoice === "K") ||
		(userChoice === "N" && botChoice === "P")
	) {
		
	userScore++;

	return "Gratulujem, vyhral si nad botom!";
	

	
	} else {
		
		botScore++;
	
		return "Bot mal:  " +  botChoice    + " \n\nAhh, prehral si nad botom skús to znovu!";
	}



}




















