function checkAnswers() {
    var score = 0;
  
    // Check answer for question 1
    var question1 = document.querySelector('input[name="question1"]:checked');
    if (question1 && question1.value === "A") {
      score++;
    }
  
    // Check answer for question 2
    var question2 = document.querySelector('input[name="question2"]:checked');
    if (question2 && question2.value === "C") {
      score++;
    }
   // Check answer for question 3
   var question3 = document.querySelector('input[name="question3"]:checked');
   if (question3 && question3.value === "B") {
     score++;
   }
  // Check answer for question 4
  var question4 = document.querySelector('input[name="question4"]:checked');
  if (question4 && question4.value === "C") {
    score++;
  }
 // Check answer for question 5
 var question5 = document.querySelector('input[name="question5"]:checked');
 if (question5 && question5.value === "A") {
   score++;
 }
 // Check answer for question 6
 var question6 = document.querySelector('input[name="question6"]:checked');
 if (question6 && question6.value === "B") {
   score++;
 }
 // Check answer for question 7
 var question7 = document.querySelector('input[name="question7"]:checked');
 if (question7 && question7.value === "A") {
   score++;
 }
 // Check answer for question 8
 var question8 = document.querySelector('input[name="question8"]:checked');
 if (question8 && question8.value === "B") {
   score++;
 }
 // Check answer for question 9
 var question9 = document.querySelector('input[name="question9"]:checked');
 if (question9 && question9.value === "A") {
   score++;
 }
 // Check answer for question 10
 var question10 = document.querySelector('input[name="question10"]:checked');
 if (question10 && question10.value === "A") {
   score++;
 }

    // Display score
    var result = document.getElementById("result");
    Headers[location="#result"];
    result.innerHTML = "You scored " + score + " out of 10";
    alert("You scored " + score + " out of 10");
    setTimeout(() => {
      Headers[location="https://aman5062.github.io/helpdesk/"];   
    }, 10000);
   }
  