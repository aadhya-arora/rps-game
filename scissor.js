let userscore=0;
let compscore=0;
const choice=document.querySelectorAll(".img");
const para=document.querySelector("#result");
const msg=document.querySelector(".msg");
const score=document.querySelector("#user");
const score2=document.querySelector("#comp");

const generate = () =>
    {
        const options=["rock","paper","scissor"];
        const idx=Math.floor(Math.random()*3);
        return options[idx];
    }

    const play=(userchoice)=>
        {
           compchoice=generate();
           console.log(compchoice);
           if(userchoice===compchoice)
            {
                para.innerText="Draw";
                msg.style.backgroundColor="yellow";
                msg.style.color="black";
            }
            else
            {
                let userwin=true;
                if(userchoice==="rock")
                    {
                      if(compchoice==="scissor")
                        {
                            para.innerText="You win";
                            msg.style.backgroundColor="Green";
                            userscore++;
                            score.innerText=`${userscore}`;
                        }  
                        else{
                            para.innerText="You lose";
                            msg.style.backgroundColor="Red";
                            compscore++;
                            score2.innerText=`${compscore}`;
                        }
                    }
                if(userchoice==="paper")
                    {
                        if(compchoice==="rock")
                            {
                                para.innerText="You win";
                                msg.style.backgroundColor="Green";
                                userscore++;
                            score.innerText=`${userscore}`;
                            }
                        else
                        {
                            para.innerText="You lose";
                            msg.style.backgroundColor="Red";
                            compscore++;
                            score2.innerText=`${compscore}`;
                        }
                    }
                if(userchoice==="scissor")
                    {
                        if(compchoice==="paper")
                            {
                                para.innerText="You win";
                                msg.style.backgroundColor="Green";
                                userscore++;
                            score.innerText=`${userscore}`;
                            }
                        else
                        {
                            para.innerText="You lose";
                            msg.style.backgroundColor="Red";
                            compscore++;
                            score2.innerText=`${compscore}`;
                        }
                    }
            }

        }
   
choice.forEach((choice)=>
{
    console.log(choice);
    choice.addEventListener("click",() =>
    {
        const choose= choice.getAttribute("id");
       console.log("Choice is selected",choose);  
       play(choose); 
      
    })
})
