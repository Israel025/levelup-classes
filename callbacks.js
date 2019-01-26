/* setTimeout(() => {
    console.log('I am done')
}, 100);

console.log('I am done 2'); */

/* const sendEmail = _ => console.log('Email sent');

const performTask = callback => {
    setTimeout(()=>callback(), 1000)
}

performTask(sendEmail); */

/* const addition = (value1, value2) => value1 + value2
const subtraction = (value1, value2) => value1 - value2

const calculator = (value1, value2, callback) => callback(value1, value2)

//console.log(calculator(3, 2, addition))
console.log(calculator(3, 2, subtraction)); */

/* const myAccount = {
    requestBalance: callback => {
        const balance = 1000000
        setTimeout(()=>callback(balance), 1000)
    }
}

const printBalance = balance => {
    console.log(balance)
}
myAccount.requestBalance(printBalance); */

/* function printName (name) {
    console.log(name)
} */

const printName = x => (console.log(x))

const printDataInbracket = _ => ({
    name: 'Doyin', 
    complexion: 'Black'
});

const add = () => {
    const a = 1
    const b = 2

}

//printName(2)
console.log(printDataInbracket())