

// Adition, Subtraction and Multiplication

const MyPolyfill = function () {
    this.printNumber = num => console.log(num)
}
MyPolyfill.prototype.addition = function (value1, value2) {
    this.printNumber(2);
    return value1 + value2
}
MyPolyfill.prototype.sumAll = function() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        //console.log(arguments[i])
        sum += arguments[i]
    }
    return sum
}
const polyInstance = new MyPolyfill();
//polyInstance.printNumber(2);

const T = MyPolyfill


//console.log(polyInstance.addition(1,2));
//console.log(polyInstance.sumAll(1,2,3,4))
/* const myCar = function (wheels, body) {
    this.wheels = wheels
    this.body = body
}
myCar.prototype.bodyType = function () {
    return this.body
}

const Toyota = new myCar(3, 'Wood')
console.log(Toyota.bodyType());
const Nissan = new myCar(4, 'Metal') */
//console.log(Nissan.bodyType()) 



