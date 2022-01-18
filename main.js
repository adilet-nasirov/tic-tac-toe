const spanx = document.querySelector(".span");
const restart = document.querySelector("#restart");
const cells = document.querySelectorAll(".cell");
const container = document.querySelector(".container");

const x = "xClass";
const o = "oClass";

const winList = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //diagonal
  [0, 4, 8],
  [6, 4, 2],
  //vertical
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
];

let OsTurn = false;
const click = (event) => {
  const div = event.target;
  const p = document.createElement("p");

  if (OsTurn != true) {
    div.innerHTML = "X";
    spanx.innerHTML = "O's turn";
    OsTurn = true;
    div.classList.toggle(x);
  } else {
    div.innerHTML = "O";
    spanx.innerHTML = "X's turn";
    OsTurn = false;
    div.classList.toggle(o);
  }
  div.removeEventListener("click", click);
  if (isFilled()) {
    gameOver();
  }
  ifWon()
};

const restartGame = () => {
  for (let el of cells) {
    el.className = "cell";
    if (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }
  spanx.innerHTML = "";
  spanx.className='span'
  addEvents();
};

const isFilled = () => {
  let count = 0;
  for (let cell of cells) {
    if (cell.classList.contains(o) || cell.classList.contains(x)) {
      count++;
    }
  }
  if (count === cells.length) return true;
  return false;
};

const gameOver = () => {
  for (let el of winList) {
    let xArr = [];
    let oArr = [];
    for (let index of el) {
      console.log(index);

      if (cells[index].classList.contains(x)) {
        xArr.push(index);
        // console.log(x)
      } else if (cells[index].classList.contains(o)) {
        oArr.push(index);
      }
    }
    let ans = JSON.stringify(el);
    xArr = JSON.stringify(xArr);
    oArr = JSON.stringify(oArr);
    if (xArr === ans) {
      spanx.innerHTML = `X winner`;
    } else if (oArr === ans) {
      spanx.innerHTML = `O winner`;
    } else {
      spanx.innerHTML = `DRAW!!!`;
      spanx.classList.add('draw')
    }
  }
};

const ifWon = () => {
  for (let el of winList) {
    let xArr = [];
    let oArr = [];
    for (let index of el) {
      if (cells[index].classList.contains(x)) {
        xArr.push(index);
      } else if (cells[index].classList.contains(o)) {
        oArr.push(index);
      }
    }
    let ans = JSON.stringify(el);
    xArr = JSON.stringify(xArr);
    oArr = JSON.stringify(oArr);
    if (xArr === ans) {
      spanx.innerHTML = `X winner`;
      spanx.classList.add('winner')
      remEvents()
      break;
    } else if (oArr === ans) {
      spanx.innerHTML = `O winner`;
      spanx.classList.add('winner')
      remEvents()
      break;
    }
  }
};

const addEvents = () => {
  for (let el of cells) {
    el.addEventListener("click", click);
  }
};

function remEvents(){
    for(let el of cells){
        el.removeEventListener("click", click);
    }
}
// container.addEventListener('click', click)
addEvents();
restart.addEventListener("click", restartGame);
