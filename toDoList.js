const items = document.getElementById("itemsList")

toDos=[];
function addItem(){

    const listElement = `<li id="addedItem">${document.getElementById("itemInput").value}
        <button onclick="removeItem(this)">done</button>
        <button class='delete' onclick="this.parentElement.remove()">delete</button>
    </li>`
    items.innerHTML+=listElement
    toDos+=document.getElementById("itemInput").value;

    
    

}
function removeItem(button){
    button.parentElement.style.textDecoration = "line-through";
    
}

