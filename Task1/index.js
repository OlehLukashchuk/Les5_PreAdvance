//Task1 Closure

function closure(n){
  
  return function addNumber(addNum){
    n+=addNum;
    console.log(`${n}`);
  }

}

let newNumber = closure(0);

newNumber(3)
newNumber(5)
newNumber(228)