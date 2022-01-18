const spanx = document.querySelector(".span");
const restart = document.querySelector("#restart");
const cells = document.querySelectorAll(".cell");
const container = document.querySelector(".container");

const x = "xClass";
const o = "oClass";

const winList=[
    //horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //diagonal
    [0,4,8],
    [6,4,2],
    //vertical
    [0,4,8],
    [1,4,7],
    [2,5,8]
]


let OsTurn = false;
const click = (event) => {
  const div = event.target;
  const p = document.createElement("p");

  if (OsTurn != true) {
    div.innerHTML = "X";
    div.classList.add(x);
    spanx.innerHTML = "O's turn";
    OsTurn = true;
  } else {
    div.innerHTML = "O";
    div.classList.add(o);
    spanx.innerHTML = "X's turn";
    OsTurn = false;
  }
  if(isFilled){
    gameOver();
    }  
    div.removeEventListener("click", click);
};

const restartGame = () => {
  for (let el of cells) {
    if (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }
  spanx.innerHTML = "";
  addEvents()
};

const isFilled = () => {
  let count=0
  for (let cell of cells) {
    if (cell.classList.contains(o) || cell.classList.contains(x) ) {
        count++
    }
  }
  if(count===cells.length) return true
  return false
};

const gameOver=()=>{
 spanx.innerHTML=`X winner`
}

const addEvents=()=>{
    for (let el of cells) {
        el.addEventListener("click", click);
      }
}
// container.addEventListener('click', click)
addEvents()
restart.addEventListener("click", restartGame);
