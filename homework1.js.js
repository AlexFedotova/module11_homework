//Модуль 11. Задание 1//

function InfoNum () {
    let arr = [0, 2, null, 0.5,undefined, 123];
    let countEvenNumber = 0;
    let countOddNumber = 0;
    let countOther = 0;
    
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEvenNumber++;
            } else {
                countOddNumber++;
            }
        }
      }
      console.log("Number of even numbers: " + countEvenNumber);
      console.log("Number of odd numbers: " + countOddNumber);
      console.log("Number of other elements: " + countOther);
      }
    
      InfoNum();