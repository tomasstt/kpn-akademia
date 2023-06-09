
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
let history = [];
const button2 = document.getElementById("b2")
const userScr = document.getElementById("userScore")
const botScr = document.getElementById("botScore")
let alertShw = false;


function startGame() {
	if (!alertShw) {
		alert("Ahoj, po odkliknutí tlačítka 'OK' alebo stlačení Enteru prosím zadaj: \n\n 'K' pre kameň \n 'P' pre papier \n 'N' pre nožnice \n\nVoľba je len na tebe, vyskúšaj si svoje štastie či vyhráš proti botovi! ");
		alertShw = true; 
	  }
	let userInput = prompt(" 'K' pre kameň \n 'P' pre papier \n 'N' pre nožnice");
	roundNum++;	
	let userChoice = userInput.toUpperCase();

	if (!['K', 'P', 'N'].includes(userChoice)  ) {
		alert("Nesprávne písmeno, skús znovu")
		
		return ;
	
	}
	

		
		if (userChoice === "K" || userChoice === "P" || userChoice === "N" ){
	
		
		let botChoice = getRandomChoice();
		choiceCount.user[userChoice]++;
		choiceCount.bot[botChoice]++;
		let result = makeWinner(userChoice, botChoice);
		alert(result);
	


		  let historyData = {
			Round: roundNum,
			Player: userChoice,
			Bot: botChoice,
			Won: "",
			PlayerScore: userScore,
			BotScore: botScore
		  };

		  if (result === "Gratulujem, vyhral si nad botom!") {
			historyData.Won = "Player ";
		  } else if (result === "Bot mal:  " + botChoice + " \n\nAhh, prehral si nad botom skús to znovu!") {
			historyData.Won = "Bot";
		  } else {
			historyData.Won = "Draw";
		  }

		let tableBody = document.querySelector(" tbody");


		let row = document.createElement("tr");
		for (let key in historyData) {
		let cell = document.createElement("td");
		cell.textContent = historyData[key];
		row.appendChild(cell);
		}
		tableBody.appendChild(row);


		
	  
	
	
	button2.disabled = false;
	userScr.textContent = userScore;
	botScr.textContent = botScore;
	
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
	}

	

	
	botScore++;
	return "Bot mal:  " +  botChoice    + " \n\nAhh, prehral si nad botom skús to znovu!";
	

	
}
function newGame() {

	startGame();

}
















