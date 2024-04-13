var Popupoverlays=document.querySelector(".popup-overlay")
var popupboxes=document.querySelector(".popup-box")
var addb=document.getElementById("addpopup")
addb.addEventListener("click",function(){
    Popupoverlays.style.display="block";
    popupboxes.style.display="block";

})
var cancelbutton=document.getElementById("Cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    Popupoverlays.style.display="none";
    popupboxes.style.display="none";
})
var container=document.querySelector(".container")
var title=document.getElementById("Booktitle")
var author=document.getElementById("Bookauthor")
var desc=document.getElementById("description")
var bookad=document.getElementById("book-Add")

bookad.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "Bookcontainer");
    div.innerHTML = `
        <h1>${title.value}</h1>
        <h2>${author.value}</h2>
        <p>${desc.value}</p>
        <button onclick="deletebook(event)">delete</button>
    `
    container.append(div);
    Popupoverlays.style.display="none";
    popupboxes.style.display="none";
})
var deleteicon=document.getElementById("deletebutton")
function deletebook(event)
{
    event.target.parentElement.remove()

}