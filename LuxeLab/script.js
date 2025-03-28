// Get references to the elements
const minusButtons = document.getElementsByClassName("minus");
const plusButtons = document.getElementsByClassName("plusNum");
const numElements = document.getElementsByClassName("num");

// Event listeners for the minus buttons
Array.from(minusButtons).forEach((minusButton, index) => {
  minusButton.addEventListener("click", () => {
    let quantity = parseInt(numElements[index].textContent);
    if (quantity > 1) {
      quantity--;
      numElements[index].textContent = quantity;
    } else {
      alert("At least one item must be added to the cart");
    }
  });
});

// Event listeners for the plus buttons
Array.from(plusButtons).forEach((plusButton, index) => {
  plusButton.addEventListener("click", () => {
    let quantity = parseInt(numElements[index].textContent);
    quantity++;
    numElements[index].textContent = quantity;
  });
});

// js for menu toggle
var Menuitems = document.getElementById("menuitems");
Menuitems.style.maxHeight = "0px";
console.log((Menuitems.style.maxHeight = "0px"));
document.querySelector(".menu").addEventListener("click", function () {
  if (Menuitems.style.maxHeight == "0px") {
    Menuitems.style.maxHeight = "230px";
  } else {
    Menuitems.style.maxHeight = "0px";
  }
});
