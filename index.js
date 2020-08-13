var langQuestions = {

	question1:{
		question:"यह कौनसी भाषा है",
		options:{
		option1:"Russian",
		option2:"Hindi",
		option3:"Gujarati"
		}
	}

	question2:{
		question:"Que idioma é esse?",
		options:{
		option1:"Spanish",
		option2:"Italian",
		option3:"Portuguese"
		}
	}

	question3:{
		question:"који је ово језик",
		options:{
		option1:"Serbian",
		option2:"Russian",
		option3:"Polish"
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
