let boxes = document.querySelectorAll(".box");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");


let turnO = true;
let count =0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
         count++;

         let isWinner = winnerCheck();
         if(count === 9 && !isWinner){
            gameDraw();
         }
    });
    
});

const reset = () =>{
   turnO = true;
   count =0;
   enableBoxes();
   msg_container.classList.add("hide");
   msg.innerText="Reset Game!";
     
};

const enableBoxes = () =>{
   for(let box of boxes){
    box.disabled=false;
    box.innerText="";
   }
};

const gameDraw = () =>{
    msg.innerText = `Game was Draw`;
    msg_container.classList.remove("hide");
    disableBoxes();
    console.log("game was draw");
};

const disableBoxes = () =>{
   for(let box of boxes){
    box.disabled =true;
   }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msg_container.classList.remove("hide");
  disableBoxes();

};

const winnerCheck =() => {
    for(let pattern of winPatterns){
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;

     if(pos1Val !== "" && pos2Val !=="" && pos3Val !== ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        return true;
        }
     }

    }

};
newBtn.addEventListener("click",() =>{
    reset();
  msg.innerText="New Game !play again";
});
resetBtn.addEventListener("click",reset);