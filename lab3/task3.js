const CELL_STYLE = "width: 50px; height: 50px;";

window.onload = function () {
    buildFirstTable();
    buildSecondTable();
};

function buildFirstTable() {
    var table = document.getElementById("firstTable");
    const LIGHT_CELL = 'background-color: red;' + CELL_STYLE;
    const BLUE_CELL = 'background-color: blue;' + CELL_STYLE;

    let lastBlueCellNumber = 7;
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        for (var j = 0, k = 0; j < 10; j++, k++) {
            var col = document.createElement("td");
            col.style = (k <= lastBlueCellNumber ? LIGHT_CELL : BLUE_CELL);
            row.appendChild(col);
        }
        lastBlueCellNumber--;
        table.appendChild(row);
    }
}

function buildSecondTable() {
    const table = document.getElementById("secondTable");
    const PURPLE_CELL = 'background-color: yellow;' + CELL_STYLE;
    const GREEN_CELL = 'background-color: green;' + CELL_STYLE;

    let startCell = 2;
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        let prevCell = startCell;

        for (var j = 0; j < 10; j++) {
            const col = document.createElement("td");
            let color = PURPLE_CELL;

            if (j === startCell || j === prevCell + 4) {
                color = GREEN_CELL;
                prevCell = j;
            }

            col.style = color;
            row.appendChild(col);
        }

        startCell = startCell === 0 ? 3 : startCell - 1;
        table.appendChild(row);
    }
}