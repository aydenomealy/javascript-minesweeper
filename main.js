let firstClick = true;
let size;
let flagCount = 0;

function createTable(s) {
    size = s;
    let tbl = document.getElementById('minefield');
    let tbody = document.createElement('tbody');

    document.getElementById('difficulty').hidden = true;
    document.getElementById('easy').hidden = true;
    document.getElementById('hard').hidden = true;

    document.getElementById('instructions').innerText = "There are " + s + " mines and you have " + s + " flags \n You must flag each mine to win";

    for(let i = 0; i < size; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');

            td.className = "0";
            td.setAttribute('onclick', 'checkCell(this.id)');
            td.setAttribute('oncontextmenu', 'flagCell(this.id)')
            td.id = j + " " + i;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tbl.appendChild(tbody);
}

function generateMines(id) {
    let idArray = id.toString().split(" ")

    for(let i = 0; i < size; i++) {
        let mineCol = Math.floor(Math.random() * Math.floor(size));
        let mineRow = Math.floor(Math.random() * Math.floor(size));

        if((mineCol == idArray[0] && mineRow == idArray[1]) || document.getElementById(mineCol + " " + mineRow).className === "mine") {
            i--;
        } else {
            document.getElementById(mineCol + " " + mineRow).className = "mine";

            for(let c = -1; c < 2; c++) {
                for(let r = - 1; r < 2; r++) {
                    if((c === 0 && r === 0)) {
                    }
                    else if((document.getElementById((mineCol+c) + " " + (mineRow+r)) != null) && (document.getElementById((mineCol+c) + " " + (mineRow+r)).className !== "mine")) {
                        let cell = document.getElementById((mineCol + c) + " " + (mineRow + r))
                        cell.className = (parseInt(cell.className) + 1).toString();
                    }
                }
            }
        }
    }
}

function flagCell(id) {
    let icon = document.createElement("i");
    icon.className = "medium material-icons";
    icon.innerText = "flag";
    document.getElementById(id).appendChild(icon);
    flagCount++;

    if(flagCount === size) {
        let win = false;

        let mines = document.getElementsByClassName("mine")

        for (let i = 0; i < mines.length; i++) {
            console.log(mines[i]);
            if (mines[i].childElementCount === 1) {
                win = true;
            }
        }
        gameWon(win);

    }
}

function checkCell(id) {
    if (firstClick) {
        firstClick = false;
        generateMines(id);
    }

    switch(document.getElementById(id).className) {
        case("mine"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "flare";
            document.getElementById(id).appendChild(icon);
            window.setTimeout("gameWon(false)",200)
            break;
        }
        case("0"): {
            document.getElementById(id).style.background = "lightgrey";
            break;
        }
        case("1"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "filter_1";
            document.getElementById(id).appendChild(icon);
            break;
        }
        case("2"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "filter_2";
            document.getElementById(id).appendChild(icon);
            break;
        }
        case("3"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "filter_3";
            document.getElementById(id).appendChild(icon);
            break;
        }
        case("4"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "filter_4";
            document.getElementById(id).appendChild(icon);
            break;
        }
        case("5"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "filter_5";
            document.getElementById(id).appendChild(icon);
            break;
        }
        case("6"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "filter_6";
            document.getElementById(id).appendChild(icon);
            break;
        }
        case("7"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "filter_7";
            document.getElementById(id).appendChild(icon);
            break;
        }
        case("8"): {
            let icon = document.createElement("i");
            icon.className = "medium material-icons";
            icon.innerHTML = "filter_8";
            document.getElementById(id).appendChild(icon);
            break;
        }
    }
}

function gameWon(bool) {
    if(bool) {
        window.setTimeout(alert("You Won! \nCongratulations"), 500);

        location.reload();
    }
    else {
        window.setTimeout(alert("You lost \nBetter luck next time"), 500);
        location.reload();
    }
}

