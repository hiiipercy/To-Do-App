const inputBox=document.getElementById("input-task");
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
}

inputList.addEventListener("click", function(item){
    if(item.target.tagName === "LI"){
        item.target.classList.toggle("checked");
    }else if(item.target.tagName === "SPAN"){
        item.target.parentElement.remove();
    }
},false)