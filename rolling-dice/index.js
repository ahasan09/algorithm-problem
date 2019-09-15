var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (var i = 0; i < 1000; i++) {
    var dice1 = Math.ceil(Math.random() * 6);
    var dice2 = Math.ceil(Math.random() * 6);
    var rollOfDice = dice1 + dice2;
    count[rollOfDice] = count[rollOfDice] + 1;
}


for (var j = 2; j <= 12; j++) {
    var textNode = "<p>" + j + ": " + count[j] + "</p>";
    document.getElementById("rollingCount").innerHTML += textNode;
}

function generateResultBarGraph() {
    var barGraph = document.getElementById("barGraph");
    var graphHTML = "";

    for (var i = 2; i <= 12; i++) {
        graphHTML += `
        <li>
            <span style="height:${count[i]}px;" title="${i}">${count[i]}</span>
        </li>`;
    }

    barGraph.innerHTML = graphHTML;
}

generateResultBarGraph();
