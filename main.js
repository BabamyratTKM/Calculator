var dispalay = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
console.log(display);
buttons.map(button => {
  button.addEventListener("click", e => {
    console.log("clikked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "DEL":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Ýalňyş!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
