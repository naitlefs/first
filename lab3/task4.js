window.onload = () => {
    drawTable(calculate(6, 7));
}

function calculate(m, n) {
    let val = 1, a = new Array(m);
    for (let i = 0; i < m; i++) {
        a[i] = new Array(n);
    }

    let counter = 0;
    let temp_i = -1;
    let temp_j = 0;
    let arrow = 0;

    let temp_left = 0;
    let temp_right = m;
    let temp_up = 1;
    let temp_down = n - 2;
    
    while (counter < m * n) {
        if (arrow == 0) {
            temp_i++;
            if (temp_i == temp_right) {
                arrow = 1;
                temp_right--;
            }
        }
        else if (arrow == 1) {
            temp_j++;
            if (temp_j == temp_down) {
                arrow = 2;
                temp_down--;
            }
        }
        else if (arrow == 2) {
            temp_i--;
            if (temp_i == temp_left) {
                arrow = 3;
                temp_left++;
            }
        }
        else if (arrow == 3) {
            temp_j--;
            if (temp_j == temp_up) {
                arrow = 0;
                temp_up++;
            }
        }

        counter++;
        a[temp_j][temp_i] = counter;
    }

    return a;
}

function drawTable(array) {
    var table = document.getElementById("tab");

    for (var i = 0; i < array.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < array[i].length; j++) {
            var col = document.createElement("td");
            col.innerText = array[i][j];
            row.appendChild(col);
        }
        table.appendChild(row);
    }
}