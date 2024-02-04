let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgCont = document.querySelector(".msgCont");
let msg = document.querySelector("#msg");

let turnO = true; //PlayerO turn

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxs();
  msgCont.classList.add("hide");
  count = 0;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box clicked.");
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    // checkWinner();
    count++;

    let isWinner = checkWinner();

    console.log(count);
    if (count == 9 && !isWinner) {
      console.log("Draw");
      showDraw();
    }
  });
});

const enableBoxs = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disableBoxs = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgCont.classList.remove("hide");
  disableBoxs();
};

const showDraw = (draw) => {
  msg.innerText = `Draw Game. Please, Try Again`;
  msgCont.classList.remove("hide");
  disableBoxs();
};

let count = 0;
let checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log(pos1val, "You are Winner.");
        showWinner(pos1val);
        return true;
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
