
//Los métodos son las acciones que se pueden realizar en un objeto
//Los métodos son propiedades, que tienen dentro a una función.
// la sintaxis de los métodos
/*<nombre-método> : function() {
  //Instrucciones
} */


const validator = {

  isValid: function(creditCardNumber){
    //Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de lunh
    let arrayNumber = creditCardNumber.split('').reverse();
    
    for (let i=0; i < arrayNumber.length; i++){
      console.log('este ' + arrayNumber[i]);

      if (i % 2 != 0){
        let result = arrayNumber[i]*2;
        let newArray = (result).toString().split('');

        if(newArray.length > 1){
          console.log(newArray);
          let sum = 0;

          for (let j = 0; j < newArray.length; j++){
            sum = sum + parseInt(newArray[j]);
          }
          // console.log('suma = '+ sum);

          arrayNumber[i] = sum;
        } else {
          arrayNumber[i] = result;
        }
      }
    }

    let finalSum = 0;
    for (let k = 0; k < arrayNumber.length; k++){
      finalSum = finalSum + parseInt(arrayNumber[k]);
    }
    console.log('finalSum = ' + finalSum);

    return arrayNumber;
  },
  




  maskify: function(){
    //debe retornar un string donde todos menos los ultimos cuatro caracteres sean reemplazados por un numeral

  }
};

export default validator;
