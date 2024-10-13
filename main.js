var grade = document.getElementById("grade");
var check = document.getElementById("check");
var result = document.getElementById("result");

function checkGrade(){
    if (grade.value >= 90 && grade.value <= 100) {
        result.textContent = " Your Grade is 'A'";
    } else if (grade.value >= 80 && grade.value <= 89){
        result.textContent = "Your Grade is 'B'";
    } else if (grade.value >= 70 && grade.value <= 79){
        result.textContent = "Your Grade is 'C'";
    } else if (grade.value >= 60 && grade.value <= 69){
        result.textContent = "Your Grade is 'D'";
    } else if (grade.value >= 0 && grade.value <= 59){
        result.textContent = "Your Grade is 'F'";
    } else {
        result.textContent = "Invalid Grade";
    }

    grade.value = "";
}