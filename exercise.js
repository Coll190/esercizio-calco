
window.addEventListener("DOMContentLoaded", e =>{
    const query1 = "http://localhost:3333/users?id=1234&token=abc";
    const query2 = "http://localhost:3333/users/5678/asdf";
    const query3 = "http://localhost:3333/users";
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button =>{
        button.addEventListener("click", e =>{
            let targe =e.target;
            let buttonId= button.id;
            console.log(`you clicked on : ${buttonId}`);
            let calcol = document.querySelector("#calc");
            let square = false;
            
            if(e.target.id=="="){
                console.log("=");
                if(square==true){

                }
                else{
                    const servertir1 = "http://localhost:3333/calc?display=" + encodeURIComponent(calcol.innerText);
                    fetch(servertir1)
                    .then(response =>{
                        return response.json();
                    })
                    .then(message =>{
                        console.log(message);
                        const result = message.result;
                        calcol.value += `${button.innerText}${result}`;
                    })
                    //square = false;
                    let result = eval(calcol.innerText);
                    calcol.innerText += button.id;
                    calcol.innerText += result;
                    console.log(result);
                } 
            }
            else{
                calcol.innerText += button.id;
            }

            if(e.target.id=="<"){
                //square = false;
                const tmp = calcol.innerText.slice(0, -2);
                console.log(tmp);
                calcol.innerText = tmp;
            }

            if(e.target.id=="c"){
                //square = false;
                const tmp2 = calcol.innerText.slice(0, 0);
                console.log(tmp2);
                calcol.innerText = tmp2;
            }
          /* if(e.target.id=="√"){   
                square = true;
            }
           */
        });
    });
});