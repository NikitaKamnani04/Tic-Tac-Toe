let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector('#msg');
let count = 0;

let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
            count++;
        }
        else{
            box.innerText = "X";
            turnO= true;
            count++;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}


const checkWinner = ()=>{
    let winnerFound = false;
    for(let pattern of winPatterns){
    //    console.log(pattern[0],pattern[1],pattern[2]);
    //    console.log(
    //     boxes[pattern[0]].innerText,
    //     [pattern[1]].innerText,
    //     [pattern[2]].innerText
    //    );

       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val== pos3Val){
            winnerFound=true;
            console.log("winner");
            showWinner(pos1Val);
            return;
        }
       }

    }

    if(!winnerFound && count==9){
        msg.innerText = "Its tie";
        msgContainer.classList.remove("hide");
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


