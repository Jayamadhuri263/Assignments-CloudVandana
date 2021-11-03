const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById('lastName');
const cityEl = document.getElementById('city');
const countryEl = document.getElementById('country');
const table = document.getElementById("table");

// Default Data in a list 
let tableData = [{
        fName: "Jaya madhuri",
        lName: "Ganjikunta",
        cityName: "Proddutur",
        countryName: "India",
    },
    {
        fName: "Sree Lakshmi",
        lName: "Batthuri",
        cityName: "Kurnool",
        countryName: "India",
    },
    {
        fName: "Gagana Sree",
        lName: "Batthuri",
        cityName: "Kurnool",
        countryName: "India",
    },
    {
        fName: "Chandrika",
        lName: "Chenna",
        cityName: "Hindupur",
        countryName: "India",
    },
    {
        fName: "Krishna",
        lName: "L",
        cityName: "Kadapa",
        countryName: "India",
    },
];

function renderTableData() {
    tableData.forEach((data, index) => {
        dataEntry(data, index);
    });
}

function dataEntry(data, index) {
    var row = table.insertRow(index + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = index + 1;
    cell2.innerHTML = data.fName;
    cell3.innerHTML = data.lName;
    cell4.innerHTML = data.cityName;
    cell5.innerHTML = data.countryName;
}

function getInputData() {
    return {
        fName: firstNameEl.value,
        lName: lastNameEl.value,
        cityName: cityEl.value,
        countryName: countryEl.value,
    };
}
renderTableData();

function myFunctionToBottom() {
    const inputData = getInputData();
    tableData.push(inputData);
    dataEntry(inputData, tableData.length - 1);
}

function myFunctionToTop() {
    const inputData = getInputData();
    tableData.unshift(inputData);
    //Have to remove the previous data
    while (table.firstElementChild.childNodes.length > 1) {
        table.firstElementChild.removeChild(table.firstElementChild.lastChild);
    }
    renderTableData();
    console.log(tableData);
}