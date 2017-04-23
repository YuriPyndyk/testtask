import FixedHourlyCostPaidService from './js/fixedhourlycostpaidservice';
import FixedMonthlyCostPaidService from './js/fixedmonthlycostpaidservice';
import DataBase from './js/database';
import Table from './js/table';
import './styles/styles.scss';

const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
const table4 = document.getElementById("table4");
const db = new DataBase();
db.dataBase = [];

const table = new Table();
table.tableHeaderParagraph1 = ['экземпляр класса', 'идиндификатор', 'имя сервиса', 'затраты'];
table.tableHeaderParagraph2 = ['имя сервиса'];
table.tableHeaderParagraph3 = ['идиндификатор'];

const tableRowHeaderParagraph1 = document.createElement('div');
tableRowHeaderParagraph1.className = 'table__row';
const tableRowHeaderParagraph2 = document.createElement('div');
tableRowHeaderParagraph2.className = 'table__row';
const tableRowHeaderParagraph3 = document.createElement('div');
tableRowHeaderParagraph3.className = 'table__row';
const tableRowHeaderParagraph4 = document.createElement('div');
tableRowHeaderParagraph4.className = 'table__row';

db.dataBase.push(new FixedHourlyCostPaidService('service1', 'Google BOrkut', 11));
db.dataBase.push(new FixedHourlyCostPaidService('service2', 'Google Voice', 11));
db.dataBase.push(new FixedMonthlyCostPaidService('service5', 'YouTube', 8064));
db.dataBase.push(new FixedHourlyCostPaidService('service3', 'Mandrill', 12));
db.dataBase.push(new FixedHourlyCostPaidService('service4', 'Google cFinance', 11));
db.dataBase.push(new FixedMonthlyCostPaidService('service7', 'Google Boilding Maker', 7920));
db.dataBase.push(new FixedMonthlyCostPaidService('service6', 'LinkedIn', 6863));

db.sortAverageMonthlyCosts(db.dataBase);

table1.appendChild(tableRowHeaderParagraph1);
table2.appendChild(tableRowHeaderParagraph2);
table3.appendChild(tableRowHeaderParagraph3);
table4.appendChild(tableRowHeaderParagraph4);

table.addTableHeader(table.tableHeaderParagraph1, tableRowHeaderParagraph1);
table.addTableHeader(table.tableHeaderParagraph2, tableRowHeaderParagraph2);
table.addTableHeader(table.tableHeaderParagraph3, tableRowHeaderParagraph3);
table.addTableHeader(table.tableHeaderParagraph2, tableRowHeaderParagraph4);

table.addTableContent(db.dataBase, table, table1);

db.sortValueFirstFive(db.dataBase, table, table2);
db.sortValueLastThree(db.dataBase, table, table3);
db.compareService(db.dataBase, table4);

