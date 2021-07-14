// manipulacion de dom addEventListener

import validator from './validator.js';

let inputNumber = document.getElementById("inputNumber");
let numMaskify = document.getElementById("numMaskify");
let cardValid = document.getElementById("cardValid");
let inValid = document.getElementById("inValid");

inputNumber.focus();
inputNumber.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    let number = inputNumber.value;
    let result = (validator.isValid(number));
    let numeral = validator.maskify(number);
    numMaskify.textContent = numeral;

    inputNumber.value = '';
    cardValid.style.display = "none";
    inValid.style.display = "none";

    
    if (result === true ) {
      cardValid.style.display = "block";
      boxValid.style.display ="block";
    } else {
      inValid.style.display = "block";
      boxInvalid.style.display ="block";
    }
  }
})





// function firstValidator(){hhh
//   // validator.maskify()
//  let inputNumber = document.getElementById("inputNumber".value);
  
 
  
// }







// console.log(validator.isValid('4000123456789010'));
// console.log(validator.maskify('1'))

// 4000123456789010
//4289836966763311