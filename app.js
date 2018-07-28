const readlineSync = require('readline-sync');

let a = " ";
let b = " ";
let c = " ";
let d = " ";
let e = " ";
let f = " ";
let g = " ";
let h = " ";
let i = " ";
let turn = "X";

console.log("tictactoe");
function drawboard() {
  console.log("   |    |");
  console.log(" "+a+" | "+b+"  | "+c+"   ");
  console.log("   |    |");
  console.log("--------------");
  console.log("   |    |");
  console.log(" "+d+" | "+e+"  | "+f+"   ");
  console.log("   |    |");
  console.log("--------------");
  console.log("   |    |");
  console.log(" "+g+" | "+h+"  | "+i+"   ");
  console.log("   |    |");
  checkForWinner("X");
  checkForWinner("O");
  const input = readlineSync.question(turn+': ');
  let inputCheck = eval(input);
  if(inputCheck === "X" || inputCheck === "O") {
    console.log("No no no, there is already a letter there");
    return drawboard();
  }
  eval(input+"=turn");
  if(turn === "X") turn = "O";
  else turn = "X";
  drawboard();
}

function checkForWinner(player) {
  // there are 8 ways to win tictactoe
  let topRow = a === player && b === player && c === player;
  let middleRow = d === player && e === player && f === player;
  let bottomRow = g === player && h === player && i === player;

  let topColumn = a === player && d === player && g === player;
  let middleColumn = b === player && e === player && h === player;
  let rightColumn = c === player && f === player && i === player;

  let diag1 = a === player && e === player && i === player;
  let diag2 = c === player && e === player && g === player;

  if(topRow || middleRow || bottomRow ||
     topColumn || middleColumn || rightColumn ||
     diag1 || diag2) {
    console.log(player+" WON!!");
    process.exit();
  }
}

drawboard();
