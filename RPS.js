var enterName;

let [yourScore, compScore] = [0,0]; 

function playButton() {
    window.location="game.html";
}
function goBack() {
    window.location="index.html";
}
function yourName(){
    enterName = prompt("Enter your name here");
    alert("Hello" + " " + enterName + "! ");
   
}

function playGame(){    
    do {
        var num = prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissors");
    }
    
    while (isNaN(num) || num > 3);
    
    if (num == 1) {
            num = "Rock";
           alert("You choose Rock");
       }
       if (num == 2) {
           num = "Paper";
           alert("You choose Paper");
       }
       if (num == 3) {
           num = "Scissors";
           alert("You chose Scissors");
       }
    
     
   var compNum = (Math.floor(Math.random() * 3) + 1);
       if (compNum == 1) {
           compNum = "Rock";
           alert("Computer choose Rock");
       }
       if (compNum == 2) {
           compNum = "Paper";
           alert("Computer choose Paper");
       }
       if (compNum == 3) {
           compNum = "Scissors";
           alert("Computer choose Scissors");
       }
    
    var checkResult = function(num, compNum) {
    if(num === compNum) {
      alert("It's a draw !");
}
if(num === "Rock") {
    if(compNum === "Scissors") {
        yourScore++;
        alert(enterName + " wins!" + "\n" + enterName + ": " + yourScore + "\n" + "Computer" + ": " + compScore);         
    } else {
        if(compNum === "Paper") {
        compScore++;    
        alert("Computer wins !" + "\n" + enterName + ": " + yourScore + "\n" + "Computer" + ": " + compScore);
        }
    }
}
if(num === "Paper") {
    if(compNum === "Rock") {
        yourScore++;
        alert(enterName + " wins!" + "\n" + enterName + ": " + yourScore + "\n" + "Computer" + ": " + compScore); 
    } else {
        if(compNum === "Scissors") {
        compScore++;    
        alert("Computer wins !" + "\n" + enterName + ": " + yourScore + "\n" + "Computer" + ": " + compScore);
    }
}
}
if(num === "Scissors") {
    if(compNum === "Paper") {
        yourScore++;
        alert(enterName + " wins!" + "\n" + enterName + ": " + yourScore + "\n" + "Computer" + ": " + compScore);
       
    } else {
        if(compNum === "Rock") {
        compScore++;    
        alert("Computer wins !" + "\n" + enterName + ": " + yourScore + "\n" + "Computer" + ": " + compScore);           
       }
    }
 }
}; 
  
    checkResult(num, compNum);
    
    
    
    yourResponse = confirm("Click OK to play again or CANCEL to exit?");
if (yourResponse == true) {
    playGame();
}
    
 else {
     alert("Thank you for playing. Bye")
  
 
 document.getElementById("yourScore").innerHTML = yourScore;
 document.getElementById("compScore").innerHTML = compScore;
 
 
 if (yourScore == compScore) {
 document.getElementById("winner").innerHTML = "It's a draw!"; 
 }  
 else if (yourScore > compScore) {
 document.getElementById("winner").innerHTML = enterName + " wins!";
 }
 else {
 document.getElementById("winner").innerHTML = "Computer wins!";
 }
 
 yourScore = compScore = 0;
 
    }
}  

 
 enterName();  
  
 