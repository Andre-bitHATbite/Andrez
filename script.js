const button = document.getElementById("btn");
const message = document.getElementById("msg");
const changeTextButton = document.getElementById("changeTextBtn");
const deleteButton = document.getElementById("deleteBtn");
const legendsTitle = document.getElementById("legendsTitle");
const legendList = document.getElementById("legendList");



const legends = ["Stephen Curry", "Michael Jordan", "LeBron James", "Kobe Bryant"];
let currentLegendIndex = 0;


button.addEventListener("click", () => {
    if (currentLegendIndex < legends.length) {

        const newLegend = document.createElement("li");
        newLegend.textContent = legends[currentLegendIndex];
        legendList.appendChild(newLegend);


        message.textContent = `${legends[currentLegendIndex]} has been added to the list!`;

        currentLegendIndex++;
    } else {

        message.textContent = "All NBA legends have been added!";
        currentLegendIndex = 0;
    }
});

deleteButton.addEventListener("click", () => {
    const lastLegend = legendList.lastElementChild;
    if (lastLegend) {
        legendList.removeChild(lastLegend);
        message.textContent = "A legend has been removed from the list!";
    } else {
        message.textContent = "No legends left to remove!";
    }
});

changeTextButton.addEventListener("click", () => {
    legendsTitle.textContent = "MY NBA LEGENDS;)";
});