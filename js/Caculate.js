var countWin = 0,
  countLose = 0,
  winrate = 0,
  total = 0,
  displayResult = 0;

function backtest(x) {
  if (x == "minus-win-btn" && countWin > 0) {
    countWin--;
  } else if (x == "plus-win-btn" && countWin >= 0) {
    countWin++;
  } else if (x == "minus-lose-btn" && countLose > 0) {
    countLose--;
  } else if (x == "plus-lose-btn" && countLose >= 0) {
    countLose++;
  }
  document.querySelector("#win-number").value = countWin;
  document.querySelector("#lose-number").value = countLose;
  total = Number(countWin) + Number(countLose);
  winrate = (countWin / total) * 100;
  displayResult = winrate.toFixed(2);
  if (displayResult == "NaN") {
    displayResult = 0;
  }
  document.querySelector(".Result").textContent = displayResult;
}

function caculateInput() {
  countWin = document.querySelector("#win-number").value;
  countLose = document.querySelector("#lose-number").value;
  console.log(countWin);
  console.log(countLose);
  total = Number(countWin) + Number(countLose);
  winrate = (countWin / total) * 100;
  displayResult = winrate.toFixed(2);
  if (displayResult == "NaN") {
    displayResult = 0;
  }
  document.querySelector(".Result").textContent = displayResult;
}
