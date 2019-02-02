// # 2
/* const phone = {
    type: 'iPhone',
    model: 'Xs',
    colour: 'Rose red'
} */

// #3
/* const foo = {
    color : "red",
    getColor : function(){
        return this.color
      //make this function return foo.color
      //without using the word: "foo"
    }
} */

//console.log(foo.getColor())

// #4 
/* console.log(foo.color, foo['color'])
console.log(
    foo['getColor']()
); */

// # 5

const Calculator = function () {}
Calculator.prototype.addition = function () {
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
Calculator.prototype.subtraction = function (num1, num2) {
    return num1 - num2
}
Calculator.prototype.multiplication = function () {
    let result = 1
    for(let i = 0; i < arguments.length; i++){
        result *= arguments[i]
    }
    return result
}
Calculator.prototype.division = function (num1, num2) {
    return num1/num2
}

const calculatorInstance = new Calculator();
/* console.log(calculatorInstance.addition(2, 3, 4))
console.log(calculatorInstance.subtraction(10, 2));
console.log(calculatorInstance.multiplication(2,2,2));
console.log(calculatorInstance.division(100, 2)); */

// # 6
const printMyName = _ => console.log('Doyin')

//setTimeout(printMyName, 1000);
//console.log('Olarewaju')

// Callback hell
function one() {
    setTimeout(function() {
      console.log('1. First thing setting up second thing');
      setTimeout(function() {
        console.log('2. Second thing setting up third thing');
        setTimeout(function() {
          console.log('3. Third thing setting up fourth thing');
          setTimeout(function() {
            console.log('4. Fourth thing');
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
};

// #7
/* const array = [1,2,3,4,5]
for (const i of array) {
    console.log(i)
} */

// # 8
/* const object = {name: "Luke Skywalker", occupation: "Jedi", powers: "The force"}
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(object[key])
    } 
} */

// #9
/* for (let i = 2;i < 10; i++){
    //console.log(i % 2 === 1 ? `odd ${i}`:`even ${i}`);
    if(i % 2 === 1){
        console.log('odd', i)
    }else{
        console.log('even', i)
    } 
} */

// # 10

/* function sumBackwards (n) {
    if(n == 0){
        return 0;
    }else{
        return n + sumBackwards(n - 1);
    }
}

console.log(sumBackwards(5)) */

// # 11
const fruitsFood = ['Rice', 'Apple', 'Watermelon', 'Cheesecake']

const PromiseFunc = foodItem => {
    if(fruitsFood.find(f=>f === foodItem)){
        return Promise.resolve(true)
    }else{
        return Promise.reject(false)
    }
}
/*(
    fruitsFood.find(f=>f === foodItem) ? Promise.resolve(true) : Promise.reject(false)
)*/

const executeProgram = async _ => {
    try{
        const result = await PromiseFunc('Rice1')
        console.log('fruit exists')
    }catch(e){
        console.log('error fruit does not exist')
    }
} 
Object.prototype.Doyin = 'mee'
const object = {name: "Luke Skywalker", occupation: "Jedi", powers: "The force"}
for (const key in object) {
    console.log(key)
}
