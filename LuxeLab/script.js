  // Get references to the elements
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plusNum');
    const numElement = document.getElementById('num');

    // Initialize the quantity
    let quantity = 1;

    // Function to update the quantity display
    function updateQuantity() {
        numElement.textContent = quantity;
    }

    // Event listener for the minus button
    minusButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQuantity();
        } else {
            alert("At least one item must be added to the cart");
        }
    });

    // Event listener for the plus button
    plusButton.addEventListener('click', () => {
        quantity++;
        updateQuantity();
    });

    // Initialize the quantity display
    updateQuantity();




    // js for menu toggle
    var Menuitems = document.getElementById("menuitems"); 
    Menuitems.style.maxHeight = "0px ";
   document.querySelector(".menu").addEventListener("click", function(){

           if(Menuitems.style.maxHeight =="0px")
           {
         Menuitems.style.maxHeight = "230px";
          }else
          {
          Menuitems.style.maxHeight = "0px";
          }
  })