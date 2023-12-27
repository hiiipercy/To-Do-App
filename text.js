/*const inputBox=document.getElementById("input-task");
const inputList=document.getElementById("item-list");

function Additem(){
    if(inputBox.value === ""){
        alert("Please add task first! ")
    } else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        inputList.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value="";
    saveData();
}

inputList.addEventListener("click", function(item){
    if(item.target.tagName === "LI"){
        item.target.classList.toggle("checked");
        saveData();
    }
    
    else if(item.target.tagName === "SPAN"){
        item.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("Data", itemlist.innerHTML);
}
function showData(){
    itemlist.innerHTML= localStorage.getItem("Data");
}
showData();*/
const inputBox = document.getElementById("input-task");
const inputList = document.getElementById("item-list");

function addItem (){
    if(inputBox.value === ""){
        alert("Add item first!");
    }
    else if(inputBox.value.length >25 ){
        alert("Write less than 25 charecter");
    }

    else {
        let li=document.createElement("LI");
        li.innerHTML=inputBox.value;
        inputList.appendChild(li);

        let span=document.createElement("SPAN");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value="";
    saveData();
    
}

inputList.addEventListener("click", function(item){
    if(item.target.tagName === "LI"){
       item.target.classList.toggle("checked");
       saveData();
    }
    
    else if(item.target.tagName ==="SPAN"){
        item.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("Data", inputList.innerHTML);
}
function showData(){
    inputList.innerHTML= localStorage.getItem("Data");
}
showData();