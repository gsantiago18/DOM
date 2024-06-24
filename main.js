const title = document.getElementById('title');
console.log(title);

const mainDiv = document.querySelector(".main-div");
console.log(mainDiv)

let list = document.querySelectorAll("ul.List> li")
console.log(list)

title.innerText ='Gabo manipulando el DOM'

title.innerHTML ="<em>Nuevo</em>";

let image=document.querySelector("img")
image.setAttribute("src", "vite.svg");
image.classList.add("img-fluid");
mainDiv.style.backgroundColor = "#ffcc00"

let oldDiv =document.querySelector(".old-div")
document.body.removeChild(oldDiv);

let newDiv = document.createElement("div")
newDiv.innerText='Soy un nuevo div'
document.body.appendChild(newDiv)

let button = document.querySelector("button")
/*button.addEventListener("click", ()=>{
  alert("Boton presionado ")
})*/

function showMessage(message){
  alert(message)
}

button.addEventListener(
  "click",
   showMessage.bind(null, 'Boton presionado'))


   let input = document.querySelector("#itemInput")
   let addButton = document.querySelector("#addButton")
   let lisst = document.querySelector("#dynamicList")

   addButton.addEventListener("click",()=>{
    if(input.value.trim()!=""){
      let newItem = document.createElement("li");
      newItem.innerText = input.value;
      lisst.appendChild(newItem)
      input.value="";
    }
   });

const filterInput = document.querySelector("#filterInput");
const itemsList = document.querySelector(".List");

filterInput.addEventListener("keyup", function(){
  const term = filterInput.value.toLowerCase();
  const items =itemsList.getElementsByTagName("li");

  Array.from(items).forEach(function(item) {
    if(item.textContent.toLowerCase().indexOf(term) !=-1){
      item.style.display = "block";
    }else{
      item.style.display="none";
    }
  })
})
