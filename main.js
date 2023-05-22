
function startGame() {
	alert("Ahoj, po odkliknutí tlačítka 'OK' alebo stlačení Enteru prosím zadaj: \n\n 'K' pre kameň \n 'P' pre papier \n 'N' pre nožnice \n\nVoľba je len na tebe, vyskúšaj si svoje štastie či vyhráš proti botovi! ")
	let userInput = prompt(" 'K' pre kameň \n 'P' pre papier \n 'N' pre nožnice");

	if (userInput !== "") {
		let userChoice = userInput;
		if (userChoice === "K" || userChoice === "P" || userChoice === "N"){
		let botChoice = getRandomChoice();
		let result = makeWinner(userChoice, botChoice);
		alert(result);
	} else {
		alert("Nesprávne písmeno, skús znovu");
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
	return "Gratulujem, vyhral si nad botom!";

	} else {
		return "Bot mal:  " +  botChoice    + " \n\nAhh, prehral si nad botom skús to znovu!";
	}



}
}










