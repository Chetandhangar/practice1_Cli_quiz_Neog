var readlineSync = require('readline-sync');

var name = readlineSync.question("What is your Name ? ");

console.log("Welcome " + name + " To the practice Quiz ");

var score = 0;

function askQuestion(questionhere, answerhere){
  var answertoquestion = readlineSync.question(questionhere);

  if(answertoquestion.toString() === answerhere.toString())
  {
    console.log("You are right");
    score++;
  }
  else
  {
    console.log("YOu are wrong! but no problem no negative marking");
  }

  console.log("your current score is : " ,score);
}

var pracQuestionList = [
  {
    question : "What is my current age ? ",
    answer : "21"
  },
  {
    question : "Wan Ronalado in the ballon'dor all time 11 ? ",
    answer : "Yes"
  }
]

for(var i =0 ; i < pracQuestionList.length; i++)
{
  var pracquestion = pracQuestionList[i];
  askQuestion(pracquestion.question, pracquestion.answer);
}
