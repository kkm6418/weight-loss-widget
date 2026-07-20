// Weight Loss Settings
const startingWeight = 252.6; // Change this to your starting weight
const currentWeight = 174.2;  // Change this to your current weight
const goalWeight = 130;     // Change this to your goal weight

const startDate = new Date("2026-07-20"); // Change this to your start date


// Calculate progress
const totalToLose = startingWeight - goalWeight;
const lost = startingWeight - currentWeight;

let progress = (lost / totalToLose) * 100;

// Keep progress between 0-100
progress = Math.max(0, Math.min(progress, 100));


// Update text
document.getElementById("weight").innerHTML =
    `${currentWeight} lbs`;

document.getElementById("percent").innerHTML =
    `${Math.round(progress)}%`;

document.getElementById("lost").innerHTML =
    `${lost} lbs lost`;


// Calculate days since start
const today = new Date();
const difference = today - startDate;
const days = Math.floor(difference / (1000 * 60 * 60 * 24));

document.getElementById("days").innerHTML =
    `Day ${days}`;

document.getElementById("start-date").innerHTML =
    `since ${formattedDate}`;


// Circular progress ring
const circle = document.getElementById("progress-ring");

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

const offset = circumference - (progress / 100) * circumference;

circle.style.strokeDashoffset = offset;
// Change ring color based on progress

if (progress >= 100) {
    circle.style.stroke = "#FFD700";
}
else if (progress >= 80) {
    circle.style.stroke = "#FFC857";
}
else if (progress >= 50) {
    circle.style.stroke = "#FF8FB1";
}
else {
    circle.style.stroke = "#FF6FA8";
}
// Milestone messages

const milestone = document.getElementById("milestone");

if (progress >= 100) {
    milestone.innerHTML = "👑 Goal achieved!";
}
else if (progress >= 80) {
    milestone.innerHTML = "🥇 Almost at goal!";
}
else if (progress >= 50) {
    milestone.innerHTML = "💗 Halfway there!";
}
else if (lost >= 10) {
    milestone.innerHTML = "✨ 10 lb milestone reached!";
}
else {
    milestone.innerHTML = "🌱 Your journey begins";
}
