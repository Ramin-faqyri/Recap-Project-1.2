console.clear();

const addButton1 = document.querySelector('[data-js="button1"]');

function lightboxWithAnswer() {}

addButton1.addEventListener("click", () => {
  const multiplyResult = operand1 * operand2;
  console.log(multiplyResult);
});
