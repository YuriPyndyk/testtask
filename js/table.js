class Table {

    addTableHeader(elem, rowElem) {
        elem.forEach(function (item) {
            let tableCell = document.createElement('div');
            let h2 = document.createElement('h2');
            tableCell.className = 'table__cell';
            h2.innerHTML = item;
            tableCell.appendChild(h2);
            rowElem.appendChild(tableCell);
        });
    }

    createTableCell(elem, elem2) {
        let tableCell = document.createElement('div');
        let span = document.createElement('span');
        tableCell.className = 'table__cell';
        span.innerHTML = elem2;
        tableCell.appendChild(span);
        elem.appendChild(tableCell);
        return elem;
    }

    addTableContent(db, elemTable, mainTable) {
        db.forEach(function (item) {
            let tableRow = document.createElement('div');
            tableRow.className = "table__row";
            elemTable.createTableCell(tableRow, item.constructor.name);
            for(let key in item) {
                if(key == "costs") {
                    elemTable.createTableCell(tableRow, item.calculateAverageMonthlyCosts());
                } else {
                    elemTable.createTableCell(tableRow, item[key]);
                }
            }
            mainTable.appendChild(tableRow);
        })
    }

    sortValueFirstFive(db, elemTable, mainTable){
        let sortValueFirstFive = db.slice(0, 5);
        sortValueFirstFive.forEach(function (item) {
            let tableRow = document.createElement('div');
            tableRow.className = "table__row";
            elemTable.createTableCell(tableRow, item.name);
            mainTable.appendChild(tableRow);
        })
    }

    sortValueLastThree(db, elemTable, mainTable){
        let sortValueFirstFive = db.slice(-3);
        sortValueFirstFive.forEach(function (item) {
            let tableRow = document.createElement('div');
            tableRow.className = "table__row";
            elemTable.createTableCell(tableRow, item.id);
            mainTable.appendChild(tableRow);
        })
    }

    compareService(db, table) {
        let div = document.createElement('div');
        let ul = document.createElement('ul');
        ul.className = 'name-list';
        let array = [];
        for (let i = 0; i < db.length ; i++) {
            let j = i + 1;
            let k = i - 1;
            if (j < db.length) {
                if(db[i].calculateAverageMonthlyCosts() === db[j].calculateAverageMonthlyCosts()
                    && k >= 0 && db[i].calculateAverageMonthlyCosts() !== db[k].calculateAverageMonthlyCosts()) {
                    array.push("<li>" + db[i].name + " /");
                }
                else if(db[i].calculateAverageMonthlyCosts() === db[j].calculateAverageMonthlyCosts()) {
                    array.push(db[i].name + " /");
                }
                else if (db[i].calculateAverageMonthlyCosts() !== db[j].calculateAverageMonthlyCosts()
                    && k >= 0 && db[i].calculateAverageMonthlyCosts() === db[k].calculateAverageMonthlyCosts()){
                    array.push(db[i].name + "</li>");
                }
                else {
                    array.push("<li>" + db[i].name + "</li>")
                }
            } else {
                array.push("<li>" + db[i].name + "</li>")
            }
        }
        ul.innerHTML = array.join(" ");
        div.appendChild(ul);
        table.appendChild(div);
    }
}

export default Table
