function sum(a, b, c){
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(2, 4, 27, 34, 564, 54);
console.log(total);