function exponentiation(a, b){
    return a ** b;
}

function multiplay(a, b){
    return  a * b;
}

function divisor(a, b){
    return  a / b;
}

function modulo(a, b){
    return  a % b;
}


function mainFunction(callback){
    let a = +(prompt('Введите число А!'));
    let b = +(prompt('Введите число В!'));
    return callback(a, b);
}

let result = mainFunction(exponentiation);
let result2 = mainFunction(multiplay);
let result3 = mainFunction(divisor);
let result4 = mainFunction(modulo);


// alert(result + ' ' + ' Результат возвидения в степень!');
// alert(result2 + ' ' + ' Результат умножения!');
// alert(result3 + ' ' + ' Результат диления!');
// alert(result3 + ' ' + ' Остаток от диления!');


alert(result + ' ' + ' Результат возвидения в степень!\n' + result2 + ' ' + ' Результат умножения!\n' + result3 + ' ' + ' Результат диления!\n' + result4 + ' ' + ' Остаток от диления!' );