let weight = prompt("Please enter your weight in Kilograms:");
let height = prompt("Please enter your height in meters:");
let bmiScore = parseFloat(weight) / [ parseFloat(height) * parseFloat(height)];

if(bmiScore < 16) {
    console.log(`BMI = ${bmiScore.toFixed(2)}`);
    console.log(`Severely Underweight`);
}else if(bmiScore >= 16.0 && bmiScore < 18.5) {
    console.log(`BMI = ${bmiScore.toFixed(2)}`);
    console.log(`Underweight`);
}else if(bmiScore >= 18.5 && bmiScore < 25) {
    console.log(`BMI = ${bmiScore.toFixed(2)}`);
    console.log(`Normal weight`);
}else if(bmiScore >= 25 && bmiScore < 30) {
    console.log(`BMI = ${bmiScore.toFixed(2)}`);
    console.log(`Overweight`);
}else if(bmiScore >= 30 && bmiScore < 35) {
    console.log(`BMI = ${bmiScore.toFixed(2)}`);
    console.log(`Moderately Obese`);
}else if(bmiScore >= 35 && bmiScore < 40) {
    console.log(`BMI = ${bmiScore.toFixed(2)}`);
    console.log(`Severely Obese`);
}else if(bmiScore >= 40) {
    console.log(`BMI = ${bmiScore.toFixed(2)}`);
    console.log(`Morbidly Obese`);
};
