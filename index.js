console.log("Begin Test");

var langQuestions = {

	question1:{
		question:"यह कौनसी भाषा है",
		options:{
		option1:"Russian",
		option2:"Hindi",
		option3:"Gujarati"
		}
	},

	question2:{
		question:"Que idioma é esse?",
		options:{
		option1:"Spanish",
		option2:"Italian",
		option3:"Portuguese"
		}
	},

	question3:{
		question:"који је ово језик?",
		options:{
		option1:"Serbian",
		option2:"Russian",
		option3:"Polish"
		}
	},
	
	question4:{
		question:"这是哪种语言?",
		options:{
		option1:"Japanese",
		option2:"Sinhalese",
		option3:"Chinese"
		}
	},
	
	question5:{
		question:"Welche Sprache ist das?",
		options:{
		option1:"German",
		option2:"Croatian",
		option3:"Dutch"
		}
	}


}

function questEk(){
	document.getElementById("score").innerHTML = "0/10";
	
	document.getElementById("langText").innerHTML = langQuestions.question1.question;
	document.getElementById("optionOne").innerHTML = langQuestions.question1.options.option1;
	document.getElementById("optionTwo").innerHTML = langQuestions.question1.options.option2;
	document.getElementById("optionThree").innerHTML = langQuestions.question1.options.option3;
	document.getElementById("optionTwo").addEventListener("click", questUma);
};

function questUma(){
	console.log("Hindi: Done");
	document.getElementById("score").innerHTML = "1/10";

	document.getElementById("langText").innerHTML = langQuestions.question2.question;
	document.getElementById("optionOne").innerHTML = langQuestions.question2.options.option1;
	document.getElementById("optionTwo").innerHTML = langQuestions.question2.options.option2;
	document.getElementById("optionThree").innerHTML = langQuestions.question2.options.option3;
	
	document.getElementById("optionTwo").removeEventListener();
	document.getElementById("optionThree").addEventListener("click", questJedan);
};

function questJedan(){
	console.log("Portuguese: Done");
	document.getElementById("score").innerHTML = "2/10";

	document.getElementById("langText").innerHTML = langQuestions.question3.question;
	document.getElementById("optionOne").innerHTML = langQuestions.question3.options.option1;
	document.getElementById("optionTwo").innerHTML = langQuestions.question3.options.option2;
	document.getElementById("optionThree").innerHTML = langQuestions.question3.options.option3;
	
	document.getElementById("optionThree).removeEventListener();
	document.getElementById("optionOne").addEventListener("click", questYi);
};

function questYi(){
	console.log("Serbian: Done");
	document.getElementById("score").innerHTML = "3/10";

	document.getElementById("langText").innerHTML = langQuestions.question4.question;
	document.getElementById("optionOne").innerHTML = langQuestions.question4.options.option1;
	document.getElementById("optionTwo").innerHTML = langQuestions.question4.options.option2;
	document.getElementById("optionThree").innerHTML = langQuestions.question4.options.option3;
	
	document.getElementById("optionOne").removeEventListener();
	document.getElementById("optionThree").addEventListener("click", questEin);
};

function questEin(){
	console.log("Chinese: Done");
	document.getElementById("score").innerHTML = "4/10";

	document.getElementById("langText").innerHTML = langQuestions.question5.question;
	document.getElementById("optionOne").innerHTML = langQuestions.question5.options.option1;
	document.getElementById("optionTwo").innerHTML = langQuestions.question5.options.option2;
	document.getElementById("optionThree").innerHTML = langQuestions.question5.options.option3;
	
	document.getElementById("optionOne").removeEventListener();
	document.getElementById("optionOne").addEventListener("click", questEk);
};

