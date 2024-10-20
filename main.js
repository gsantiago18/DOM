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

const draggable = document.getElementById("draggable")
const dropzone = document.getElementById('dropzone')

draggable.addEventListener("dragstart", function(event){
  setTimeout(()=>{
    this.style.display="none";
  }, 0)
})

dropzone.addEventListener("dragover" ,function(event){
  event.preventDefault();
})

dropzone.addEventListener("drop", function(){
  draggable.style.display="block";
  this.append(draggable);
})

let opc = document.querySelector("#opc")
let modalTabla =  document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
opc.addEventListener("change",()=>{
  if(opc.value!=='70'){
   swal.fire({
    title:'Advertencia',
    html:'La opacidad que seleccionaste es: ' + opc.value + 
            ' lo cual puede ocasionar sobrecostos. <a href="#" id="verTablaLink">Ver tabla</a>',
    icon:'warning',
    didOpen:()=>{
        document.getElementById("verTablaLink").addEventListener('click',function(e){
          e.preventDefault()

          Swal.close()
          modalTabla.style.display ="block"
        })
      }       
    })
   }

})

span.onclick =function(){
  modalTabla.style.display="none"
}

window.onclick = function(event) {
  if (event.target == modalTabla) {
    modalTabla.style.display = "none";
  }
}

document.getElementById("btnSi").addEventListener('click',function(){
  modalTabla.style.display="none"
})

document.getElementById("btnNo").addEventListener('click',function(){
  opc.value='70'
  modalTabla.style.display="none"
})