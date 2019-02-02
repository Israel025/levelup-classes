function recursivePower (num, raise) {
    if(raise > 0){
        return num * recursivePower(num, --raise)
    }else{//terminating condition
        return 1
    }
}

//Call stack
//console.log(recursivePower(2, 4));

/* function loopFactorial (n) {
    if(n == 0){//
        return 1
    }else{
        let fac = 1;
        for(let i = n; i > 0; i--){
            fac *= i;
        }
        return fac
    }
}
console.log(loopFactorial(5)) */

/* function recursiveFactorial (n) {
    if(n == 0){
        return 1;
    }else{
        return n * recursiveFactorial(n - 1);
    }
}

console.log(recursiveFactorial(5)); */