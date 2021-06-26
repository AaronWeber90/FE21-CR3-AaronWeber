  ////////////////
 // FUNCTION 1 //
////////////////

var starter = 10;
var maindish = 15;
var dessert = 9;
var beverage = 11;

function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let sum = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    return sum;
}

console.log("Invoice 1 is €" + calculateInvoice(starter, maindish, dessert, beverage));

console.log("Invoice 2 is €" + calculateInvoice(starter, 0, dessert, 0));

console.log("Invoice 3 is €" + calculateInvoice(0, maindish, dessert, 0));


  ////////////////
 // FUNCTION 2 //
////////////////

function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let sum = ((starterPrice + maindishPrice + dessertPrice) * 0.9) + beveragePrice;
    return sum;
}

console.log("Student-Invoice 1 is €" + studentInvoice(starter, maindish, dessert, beverage));

console.log("Student-Invoice 2 is €" + studentInvoice(starter, 0, dessert, 0));

console.log("Student-Invoice 3 is €" + studentInvoice(0, maindish, dessert, 0));


  ////////////////
 // TO TOP BTN //
////////////////

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 