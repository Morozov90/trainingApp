(function () {
    let matrix = document.querySelector(".task");
    let add__row = document.querySelector(".add__row");
    let add__cell = document.querySelector(".add__cell");
    let del__cell = document.querySelector(".del__cell");
    let del__row = document.querySelector(".del__row");
    let wrapper = document.querySelector(".wrapper");

    let rows = ["", "", ""];
    let cols = ["", "", ""];

    function createMatrix(row, col) {
        for(let i = 0; i < row.length; i ++) {
            let newRow = matrix.insertRow(i);
            for (let j = 0; j < col.length; j++){
                let newCell = newRow.insertCell(j);
                    newCell.className = "cell";
            }

        }
    }

    function deleteElem () {
        document.querySelectorAll(".cell").forEach(function (elem ) {

            elem.addEventListener("mouseenter", function () {
                del__cell.style.left = this.offsetLeft + 40 + "px";
                del__row.style.top = this.offsetTop + 40 + "px";
                if (rows.length > 1 ) {
                    del__row.classList.add("open");
                }
                if (cols.length > 1) {
                    del__cell.classList.add("open");
                }

            });
        });
    }

    function removeClass () {
        del__cell.classList.remove("open");
        del__row.classList.remove("open");
    }


document.addEventListener("DOMContentLoaded", function () {
        createMatrix(rows, cols);
        deleteElem();
    });
    // window.onload = function () {
    //     createMatrix(rows, cols);
    //     deleteElem();
    // };

    add__row.addEventListener("click", function () {
        if (rows.length < 10) {
            rows.push("");
            matrix.innerHTML = "";
            createMatrix(rows, cols);
            deleteElem();
            removeClass();
        }
    });

    add__cell.addEventListener("click", function () {
        if (cols.length < 10 ){
            cols.push("");
            matrix.innerHTML = "";
            createMatrix(rows, cols);
            deleteElem();
            removeClass();
        }
    });

    del__cell.addEventListener("click", function () {
        if (cols.length > 1) {
            cols.pop();
            matrix.innerHTML = "";
            createMatrix(rows, cols);
            deleteElem();
            removeClass();
        }
    });

    del__row.addEventListener("click", function () {
        if (rows.length > 1 ) {
            rows.pop();
            matrix.innerHTML = "";
            createMatrix(rows, cols);
            deleteElem();
            removeClass();
        }
    });

    wrapper.addEventListener("mouseleave", function () {
        removeClass();
    });

    add__row.addEventListener("mouseenter", function () {
        if (cols.length > 1 ) {
            del__cell.style.left = this.offsetLeft  + "px";
            del__row.style.top = this.offsetTop - 42 + "px";
        } 
    });

    add__cell.addEventListener("mouseenter", function () {
        if (rows.length > 1 ) {
            del__cell.style.left = this.offsetLeft - 42 + "px";
            del__row.style.top = this.offsetTop  + "px";
        }
    });

    wrapper.addEventListener("mouseenter", function (e) {
        if (rows.length > 1 ) {
            del__row.classList.add("open");
        }
        if (cols.length > 1) {
            del__cell.classList.add("open");
        }
    });
})();
