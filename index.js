var readlineSync = require('readline-sync')

var username = readlineSync.question("May I know your name? ")
console.log("WELCOME", username, " Hope you are doing good...! ")
   console.log("                 ")
score= 0



var questionOne= {
  question: "Which is my favourite colour? ",
  answer: "Blue",
}

  var questionTwo= {
  question: "Which is my favourite IPL team? ",
  answer: "CSK"
}

  var questionThree= {
  question: "What is my girlfriends's name? ",
  answer: "NA"
}

  var questionFour= {
  question: "Where do I live? ",
  answer: "Kolhapur"
}


  var arr= [questionOne, questionTwo, questionThree, questionFour]

for(i=0; i<arr.length; i++)
  {
    var currentQue = arr[i]
    var Prashn = readlineSync.question(currentQue.question)
  
   if(Prashn=== currentQue.answer)
   {
     console.log("You are right!  ")
     score=score+1
     console.log("Current score is ",score)
     console.log("                 ")
   }  
    else{
          console.log("You are Wrong!  ")
     score=score-1
     console.log("Current score is ",score)
       console.log("                 ")
    }
   
   
  }

console.log(username, "Your final socre is ", score)