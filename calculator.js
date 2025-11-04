const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const id = button.id;

    if (id === "clear") {
      display.value = ""; 
    } 
    else if (id === "equals") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    else {
      
      if (id === "add") display.value += "+";
      else if (id === "subtract") display.value += "-";
      else if (id === "multiply") display.value += "*";
      else if (id === "divide") display.value += "/";
      else if (id === "dot") display.value += ".";
      else display.value += button.textContent;
    }
  });
});
