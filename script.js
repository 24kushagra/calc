const btnElements = document.querySelectorAll("button");

const inputFieldArea = document.getElementById("result");

for (let i = 0; i < btnElements.length; i++) {
  btnElements[i].addEventListener("click", () => {
    const buttonValue = btnElements[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldArea.value = "";
}

function calculateResult() {
  inputFieldArea.value = eval(inputFieldArea.value);
}

function appendValue(buttonValue) {
  inputFieldArea.value += buttonValue;
  //   inputFieldArea.value = inputFieldArea.value + buttonValue;
}