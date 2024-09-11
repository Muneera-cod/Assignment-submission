function factorial(num) {
  
    if (num === 0 || num === 1) {
        return 1;
    }
   
    return num * factorial(num - 1);
}


const number = 2;
console.log(`The factorial of ${number} is ${factorial(number)}`);
