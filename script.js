// ===== CHANGE ONLY THESE VALUES =====

const startWeight = 252.6;
const currentWeight = 174.2;
const goalWeight = 130;

const startDate = "2026-07-20";

// ================================

// Days since starting
const today = new Date();
const started = new Date(startDate);

const days = Math.floor(
    (today - started) / (1000 * 60 * 60 * 24)
);

// Weight calculations
const totalToLose = startWeight - goalWeight;
const lost = startWeight - currentWeight;
const remaining = currentWeight - goalWeight;

const percent = Math.max(
    0,
    Math.min(
        100,
        Math.round((lost / totalToLose) * 100)
    )
);

// Update page
document.getElementById("weight").textContent =
`${currentWeight.toFixed(1)} lb`;

document.getElementById("percent").textContent =
`${percent}% Complete`;

document.getElementById("days").textContent =
`Day ${days}`;

document.getElementById("lost").textContent =
`${lost.toFixed(1)} lb lost • ${remaining.toFixed(1)} lb to go`;

const fill = document.getElementById("fill");

fill.style.width = percent + "%";

// Progress bar colors
if (percent < 25) {
    fill.style.background = "#FF3B30";   // Red
}
else if (percent < 50) {
    fill.style.background = "#FF9500";   // Orange
}
else if (percent < 75) {
    fill.style.background = "#FFD60A";   // Yellow
}
else if (percent < 100) {
    fill.style.background = "#34C759";   // Green
}
else {
    fill.style.background = "#0A84FF";   // Blue
}
