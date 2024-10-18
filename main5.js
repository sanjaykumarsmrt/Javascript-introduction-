var ul = document.getElementById("list-item")
var input = document.getElementById("input")

function adding(){
   var creat = document.createElement("li")
   creat.innerHTML =  input.value + "<button onclick='deleting(event)'>Delete</button>"
   ul.append(creat)
   input.value = ""
}

function deleting(event){
   event.target.parentElement.remove()
}




