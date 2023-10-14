let num1 = 5;
let num2 = 3;
function multiply(a, b) {
    a = 10;
    const result = a * b;
    return result;
}

// console.log(num1);
const output = multiply(num1, num2);
// console.log(output);


/* if( [] == true){
    console.log('true');
}
else{
    console.log('false');
} */
function isNumber(value){
    return typeof value === 'number';
}
// console.log(isNumber());

let storeFalsyValue  = true;
if(storeFalsyValue){
    // console.log('nothing to show');
}
else{
    // console.log('you are amazing');
}


function isSame(a, b){
    return typeof a === typeof b;
}

const opration = (num1 , num2, type) =>{
    if(type === 'add'){
        return num1 + num2;
    }
    else if(type === 'subtract'){
        if(num1 > num2){
            return num1 - num2;
        }
        else{
            return num2 - num1;
        }
    }
    else if(type === 'multiply'){
        return num1 * num2;
    }
    else if(type === 'divide'){
        if(num1 > num2){
            return num1 / num2;
        }
        else{
            return num2 / num1;
        }
    }
    else if(type === 'modulus'){
        if(num1 > num2){
            return num1 % num2;
        }
        else{
            return num2 % num1;
        }
    }
    else{
        console.log('invalid operation');
    }
}

 const result = opration(90, 90, 'divide');
//  console.log(result);

const isEven = ( num1, num2) =>{
    const result = num1 + num2;
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        if(result % 2){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return 'something went wrong';
    }
}

const add = isEven([], 2);
console.log(add);
