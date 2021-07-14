//Contiene lógica

const validator = {

  
  isValid: function(creditCardNumber) {
    debugger;
    let arrayNumber = creditCardNumber.split('');
    let arrayReverse = arrayNumber.reverse();
    let multiplicacion = paresX2(arrayReverse);
    let finalArray = paresSuma(multiplicacion);
    let resultado =  sumaDigits(finalArray);

    return module(resultado);
  },
  
  maskify: function(creditCardNumber) {
    return numeral(creditCardNumber.split(''));
  }
}

//[a, b, c] valores/elementos
//[0, 1, 2] indices/posiciones
// x[2] = 5;

function paresX2(numbers) {
  for (let i = 0; i < numbers.length; i++) { 
   if(i % 2 !== 0) {
    //se reescribe el valor de la misma posicion
    numbers[i] = (numbers[i] * 2).toString();
   }
  }
 return numbers;
}

function paresSuma(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if(i % 2 !== 0) {
      let oneDigit = numbers[i].split('');
      
      if(oneDigit.length > 1 ) {   
        //Guardo en numbers 
        numbers[i] = sumaDigits(oneDigit);
      }
    }
  }
  return numbers;
}

function sumaDigits(numbers) {
  let number = 0;

  for (let i = 0; i < numbers.length; i++) {
    number += parseInt(numbers[i]);
   }
   return number;
}

//debo saber el residuo del resultado y que retorne true o false
function module(numbers) {
  
  if(numbers % 10 == 0) {
    return true;
  } else {
    return false;
  }
}
 
//debe retornar un string donde todos menos los ultimos cuatro caracteres sean reemplazados por un numeral


function numeral(numbers){
  for (let i = 0; i < numbers.length; i++) {
    if(i < numbers.length - 4) {
      numbers[i] = "#";
    } 
  }
  return numbers.join('');
}

//validar si es blanco no valide- limpiar el string
//transformación de string a numero

// numbers[i] = (numbers[i] * 2).toString();
export default validator;
