let Menuitems = document.getElementById("menuitems");

Menuitems.style.maxHeight = "0px";

console.log((Menuitems.style.maxHeight = "0px"));
document.querySelector(".menu").addEventListener("click", function () {
  if (Menuitems.style.maxHeight == "0px") {
    Menuitems.style.maxHeight = "230px";
  } else {
    Menuitems.style.maxHeight = "0px";
  }
});
