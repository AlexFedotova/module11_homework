// Задание 3//
function GetSum(a){
    return function(b){
      return(a+b);
      };
    }
    
    console.log(GetSum(1)(10));