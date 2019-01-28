/* const promiseFunction = () => (
    new Promise((resolve, reject)=>{
        setTimeout(() => {
            return resolve('abc') 
        }, 500);
    })
)

promiseFunction()
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.error(error, 2)
});

console.log('123'); */

/* const passwordSystem = (username) => {
    const usernameList = [1,2,3,4,5]
    if(usernameList.find(u => u === username)){
        return Promise.resolve('Login complete')
    }else{
        return Promise.reject('Login not allowed')
    }
}

passwordSystem('doyin')
.then(result => console.log(result))
.catch(error=>console.error(error)) */

const addPromise_1 = () => Promise.resolve(1)
const addPromise_2 = () => Promise.resolve(2)

const processResult = async () => {
    try{
        const result1 = await addPromise_1()
        const result2 = await addPromise_2()
        console.log(result1 + result2)
    }catch(error){
        console.error(e, 'Error occurred')
    }
}

processResult();

/* addPromise_1().then(result1 => {
    addPromise_2().then(result2 => {
        addPromise_3().then(result2 => {
            //...
            addPromise_4().then(result2 => {
                addPromise_5().then(result2 => {
                    addPromise_6().then(result2 => {
                        //...
                        addPromise_7().then(result2 => {
                            //...
                        })
                    })
                })
            })
        })
    })
}) */