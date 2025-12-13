let userId=document.getElementById('userID');
let userPin=document.getElementById('userPin');
let hideIt=document.getElementById('hideIt')

function receiver(){
    let AccountNumber='sr12345';
    // let password = Math.ceil(Math.random()*10000)
    let password= 1113;
    if(userId.value==AccountNumber && userPin.value==password){
        alert("you can continue...");
        userId.value='';
        userPin.value='';
    }
    else{
        alert(" you have enter something wrong... Try Again!");
        

    }
}
function newPhase(){
    Math.random(0,9)
    let userInfo=Math.ceil(Math.random()*10000)
    alert("check your otp "+userInfo);
    let small=userInfo.value;
    small= prompt("enter your otp")
    if(userInfo==small){
        alert("asigning you to new page")

        let dataPro=[{},{},{},{},{}]

        // function productItem(){
            // let CardData=document.querySelector("#card")

            for(const items of dataPro){
                let card = document.createElement('div')
                card.innerHTML=`<p>enter last four digit of your number</p>
                <input type='number' id = 'userNew' placeholder='enter last 4 digits'>
                <button onclick='granted()'>Submit</button> >`
                     let CardData=document.querySelector("#Again")
                CardData.appendChild(card)
                items.pop;

                hideIt.innerHTML='';
            }
            let larger=userNew.value;
            function granted(){
            if(userinfo==larger){
                document.writeln("you are logged in")
            }
            else{
                alert("you have entered wrong details")      
                  }
                }
        // }
        // let input= document.createElement('p');
        // input.innerHTML='its showing';
        // document.querySelector('Again').appendchild(input);
    }
    else{
        alert('wrong otp')
    }
    // let CreateIt=document.createElement('input');
    // CreateIt.innerHTML=
    // // CreateIt.value=Math.floor(Math.random()*100000);
    // CreateIt.value=prompt("enter your pin")
    // if(CreateIt.value==1212){
    // }
    // document.querySelector("createIt").appendChild(CreateIt);
}

