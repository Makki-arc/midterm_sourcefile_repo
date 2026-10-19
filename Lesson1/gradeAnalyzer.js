const scores = [85, 72, 91, 64, 78];


let totalScore = 0;
let highestScore = scores[0];
let lowestScore = scores[0];
let passedCount = 0;
let failedCount = 0;


console.log("Student Scores:");
scores.forEach((score) => {
  console.log(score);
});


console.log("");


scores.forEach((score, index) => {
  let category = "";
  let status = "";


  if (score >= 90 && score <= 100) {
    category = "Excellent";
    status = "Passed";
  } else if (score >= 80 && score <= 89) {
    category = "Very Good";
    status = "Passed";
  } else if (score >= 75 && score <= 79) {
    category = "Good";
    status = "Passed";
  } else {
    category = "Failed";
    status = "";
  }


  totalScore += score;


  if (score > highestScore) highestScore = score;
  if (score < lowestScore) lowestScore = score;


  if (category === "Failed") {
    failedCount++;
    console.log(`Student ${index + 1}: ${score} - ${category}`);
  } else {
    passedCount++;
    console.log(`Student ${index + 1}: ${score} - ${category} - ${status}`);
  }
});


const averageScore = totalScore / scores.length;


console.log("");
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);
