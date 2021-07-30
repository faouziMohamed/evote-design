const buttons = document.querySelectorAll(".vote-btn");

const inputs = document.querySelectorAll(".vote-checkbox");
inputs.forEach((input, index) => {
  input.checked = false;
  buttons[index].classList.remove("enabled");
  input.addEventListener("change", () => {
    buttons[index].classList.toggle("enabled");
  });
});
