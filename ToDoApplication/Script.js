const inputsHolders=document.getElementById('inputsHolder');
const lis_container=document.getElementById('li_container');

function addTask(){
    if(inputsHolders.value === ''){
        alert("you must write something");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputsHolders.value;
        lis_container.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputsHolders.value="";
    saveData();
}

lis_container.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false
);

function saveData(){
    localStorage.setItem('data',lis_container.innerHTML);
}

function showTask(){
    lis_container.innerHTML=localStorage.getItem('data');
}
showTask();