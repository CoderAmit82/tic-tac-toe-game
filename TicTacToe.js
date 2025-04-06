let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let newgamebtn = document.querySelector("#newgamebtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if (turnO) { //playerO
            box.innerText = "O";
            turnO = false;
        } else { //playerX
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner =() =>{
    for(let pattern of winPatterns){
        
            let pos1val =boxes[pattern[0]].innerText;
            let pos2val =boxes[pattern[1]].innerText;
            let pos3val =boxes[pattern[2]].innerText
            
            if(pos1val!=""&& pos2val != ""&& pos3val !=""){
                if(pos1val===pos2val&&pos2val===pos3val){
                   
                    showWinner(pos1val);
                }
            }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);



// countvowels();
// function countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
    

//     return count;
// }

