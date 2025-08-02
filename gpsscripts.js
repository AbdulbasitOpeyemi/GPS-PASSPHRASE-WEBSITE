function determineGrade(score){
  if (score < 0 || score > 100 || isNaN(score)) {
  return "invalid score";
  } else if (score >= 75){
  return "A";
  } else if (score >= 60){
  return "B";
  } else if (score >= 50){
  return "C";
  } else if (score >= 40){
  return "D";
  } else {
  return "F"
  }
}

let score = prompt("Enter your score (0-100): ");
alert("Your grade is: " + determineGrade(parseInt(score)));


