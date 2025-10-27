
// connecting button with input and if else condition apply
// function tapOn(){
//     let content = document.getElementById("dashField").value ;
//      if(content=="shivam"){
//         alert("you can proceed")
//      }
//      else{
//         alert("wrong user, try again!")
//      }
// }

//creation of element with the help of DOM,

// function tapOn(){
//     let output="<p> hi new paragraph tag created </p>";
//     document.getElementById('classy').innerHTML= output;

// }

// creation of element with the help of querySelector.

function tapOn(){
    const newOutput=document.createElement('input');

    
    // newOutput.innerHTML=data;
    // if(Input.value==shivam){
    //     alert("you are logged in");
    // }else{
    //     alert("try again!")
    // }
    document.querySelector('div').appendChild(newOutput);
    if( document.querySelector('div').appendChild(newOutput)==input){
        const Data="shivam"
         document.querySelector('div').appendChild(newOutput).value= Data;
         alert("you are shivam")
    }
    else{
        alert("incorrect")
    }
}