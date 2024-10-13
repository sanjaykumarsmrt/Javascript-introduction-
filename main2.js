var age = document.getElementById("age-input");
var button = document.getElementById("check-button");
var result = document.getElementById("result");

function ageCategory(){
    if (age.value >=0 && age.value <=12 ) {
        result.textContent = "You are 'Child'";
    }
    else if (age.value >=13 && age.value <=19){
        result.textContent = "You are 'Teenager'";
    }
    else if (age.value >=20 && age.value <=64){
        result.textContent = "You are 'Adult'";
    }
    else if (age.value >=65){
        result.textContent = "You are 'Senior Citizen'";
    }
    else{
        result.textContent = "Enter a Valid Age"
    }

    age.value = ""
}