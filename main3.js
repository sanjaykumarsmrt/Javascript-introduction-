var input = document.getElementById("input");                   
var tableData = document.getElementById("tableData");
var error = document.getElementById("error");  

function tableGenerator() {
    var number = input.value;
    error.textContent = "";  // Clear previous error messages
    tableData.innerHTML = ""; // Clear previous table entries

    if (number < 1 || number > 20) {
        error.textContent = "Please enter a number between 1 and 20";
    } else if (number === "") {
        error.textContent = "Please enter a number";
    } else {
        let i = 1;
        while (i <= 10) {
            var x = number * i;
            var listItem = document.createElement("li");
            listItem.textContent = i + " x " + number + " = " + x;
            tableData.appendChild(listItem);
            i++;
        }
        tableData.style.display = "block";
        input.value = "";
    }
}
