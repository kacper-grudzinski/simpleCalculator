const $display = document.querySelector('input[type="text"]');
const $buttons = document.querySelectorAll('input[type="button"]');

$buttons.forEach(($button) => {
  $button.addEventListener("click", () => {
    const value = $button.value;
    let len = $display.value.length;

    if ($display.value == "" && value == "0" || $display.value == "" && value === "x" || $display.value == "" && value === "/" || $display.value == "" && value === "=") {
      $display.value = "";
      return;
    }

    if (value === "C") {
      $display.value = "";
      return;
    }

    if (value === "=") {
      const express = $display.value.replace(/x/g, "*");
      $display.value = Math.round(eval(express) * 1000) / 1000;
      return;
    }

    if (len > 0) {
      if (
        ($display.value[len - 1] == "/" && value === "/") ||
        ($display.value[len - 1] == "/" && value === "+") ||
        ($display.value[len - 1] == "-" && value === "-") ||
        ($display.value[len - 1] == "-" && value === "x") ||
        ($display.value[len - 1] == "-" && value === "/") ||
        ($display.value[len - 1] == "x" && value === "x") ||
        ($display.value[len - 1] == "x" && value === "+") ||
        ($display.value[len - 1] == "+" && value === "+") ||
        ($display.value[len - 1] == "+" && value === "x") ||
        ($display.value[len - 1] == "+" && value === "/")
      ) {
      } else {
        $display.value += value;
      }
    } else if (len == 0) {
      $display.value += value;
    } 
  });
});

