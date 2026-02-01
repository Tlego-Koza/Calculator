let newline = true;
let value1 = 0;
let currentOperator = "";

function digitBtnPressed(digit) {
  const input = document.getElementById("inputBox");
  if (newline || input.value === "0") {
    input.value = digit;
    newline = false;
  } else {
    input.value += digit;
  }
}

function btnACPressed() {
  document.getElementById("inputBox").value = "0";
  newline = true;
  value1 = 0;
  currentOperator = "";
}

function operatorBtnPressed(op) {
  value1 = parseFloat(document.getElementById("inputBox").value);
  currentOperator = op;
  newline = true;
}

function equalsBtnPressed() {
  const value2 = parseFloat(document.getElementById("inputBox").value);
  let result = 0;
  switch (currentOperator) {
    case "+": result = value1 + value2; break;
    case "-": result = value1 - value2; break;
    case "*": result = value1 * value2; break;
    case "/": result = value2 !== 0 ? value1 / value2 : "Error"; break;
    default: result = value2;
  }
  document.getElementById("inputBox").value = result;
  newline = true;
}
