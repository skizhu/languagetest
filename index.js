var langQuestions = {
	question1:{
		question:"यह कौनसी भाषा है?",
		options:{
		option1:"Russian",
		option2:"Hindi",
		option3:"Gujarati"
		}
	}
}





function langTextFill(){
	document.getElementById("langText").innerHTML = langQuestions.question1.question;
	document.getElementById("optionOne").innerHTML = langQuestions.question1.options.option1;
	document.getElementById("optionTwo").innerHTML = langQuestions.question1.options.option2;
	document.getElementById("optionThree").innerHTML = langQuestions.question1.options.option3;
	document.getElementById("optionTwo").addEventListener("click", selectRight);
}

function selectRight(){
	var correctAnswer = document.getElementById("optionTwo");
	correctAnswer.id = "correctAnswer";
}
