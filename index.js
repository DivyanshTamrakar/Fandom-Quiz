var readline = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var final_score = 0;


function play(question, answer) {

  var userAnswer = readline.question(chalk.green(question))
  if (userAnswer === answer) {
    console.log(chalk.blueBright.bold("You answered :"), chalk.redBright(userAnswer));
    console.log(chalk.greenBright.bold("You are Right!"))
    score = score + 1;
    final_score = score;

  }
  else {
    console.log(chalk.blueBright.bold("You answered :"), chalk.redBright(userAnswer))
    console.log(chalk.redBright.bold("You are Wrong!"))
    score = score - 1;

    final_score = score;
  }

  console.log(chalk.magentaBright.bold("Your current Score : ") + score)

  console.log("----------------------------");
  console.log("\n");
}
var username = readline.question('What\'s your Name\n');
console.log("----------------------------\n");
var usercity = readline.question('Where are you from ?\n');
console.log("----------------------------\n");
console.log("It's feel Good That you are from " + usercity);
console.log("****************\n");
console.log(chalk.blue.bold("Welcome to the Quiz ") + chalk.blue.bold(username));
console.log("----------------------------\n");
console.log(chalk.red.bold("Rules* \n"))
console.log(chalk.red.bold("1. There is only one correct answer.\n"))
console.log(chalk.red.bold("2. There is Negative marking.\n"))
console.log(chalk.yellow.bold("***********************\n"));



var questionBank = [
  {
      question: "To whom did Sweety say, \"Chuna Nahi Humko Bina Permission Ke\".? \na. Guddu \nb. Munna\nc. Bablu\n\n",
      answer: "a"
    },

   {
      question: "Tripathi Ke Pehle Kin Logon Ka Raaj Tha Mirzapur Pe ?\na. Maurya Ka \nb. Choudhary Ka\nc. Rama Singh Kant Ka\n",
      answer: "b"
    }, 
{
      question: "Who plays the role of Munna's father in Mirzapur? \na. Pankaj Tripathi \nb. Nawazuddin Siddiqui\nc. Rajesh Tailang\n",
      answer: "a"
    },
    {
      question: "Who plays the role of Guddu Pandit?\na. Divyendu Sharma \nb. Ali Fazal\nc. Vikrant Massey\n",
      answer: "b"
    },
    {
      question: "When was the show Mirzapur first aired? \na. 14 November 2019 \nb. 10 November 2017\nc. 16 November 2018\n",
      answer: "c"
    },
    {
      question: "Who plays the role of Akhandanand Tripathi on the show?\na. Nawazuddin Siddiqui \nb. Ali Fazal\nc. Pankaj Tripathi\n",
      answer: "c"
    },
    {
      question: "#Abbey Bawaal Cheez Hai, System Hil jaata hai What is being refered as 'Bawaal' here?\na. Gun \nb. Goli\nc. Bullet\n",
      answer: "a"
    },
    {
      question: "Who plays the role of Munna on the show? \na. Divyendu Sharma \nb. Ali Fazal\nc. Pankaj Tripathi\n",
      answer: "a"
    },
    {
      question: "Who said, \"Agli baar Munna Bhaiya ghar aayein, zinda wapas nahi laute toh\" \na. Guddu Bhaiya \nb. Dimpy\nc. Bablu Bhaiya\n",
      answer: "a"
    },
    {
      question: "To whom did Kaleen Bhaiya said, \"Aap Jis Sheher Mein Naukar hain, hum malik hain us sheher ke?\" \na. Compounder \nb. Ratan Singh\nc. Maurya Ratan Singh\n",
      answer: "c"
    },


  ]
var high_scores = [
  {
  name:"Divyansh",
  score:"10"
  },
  {
  name:"Himanshu",
  score:"9"
  },
]

for (var i = 0; i < questionBank.length; i++) {
  console.log(chalk.bold.white("Question : ") + i)
  console.log('\n');
  var current = questionBank[i];
  play(current.question, current.answer);
}

console.log("YAY! your final Score is : ", final_score+'\n');

console.log(chalk.yellowBright.bold("High Score of this Quiz is ") , high_scores[0].score +chalk.yellow.bold(" Made by") , high_scores[0].name)

for(var j = 0 ; j<high_scores.length ; j++  )
{
 var highscores_current = high_scores[i];

 if(highscores_current < final_score )
 {
   console.log("You Beat the high score of this quiz");
   console.log("Plese send us screenshot");

 }
 
 
 
 

}





