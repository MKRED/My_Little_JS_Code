function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Mikhail',
    age: 21,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23,
}

//person.logInfo.bind(lena, 'frontend', '8-800-555-35-35')() // Нужно вызвать как функцию

// person.logInfo.call(lena, 'frontend', '8-800-555-35-35') //Вызывает сразу

person.logInfo.apply(lena, ['frontend', '8-800-555-35-35']) //только через массив

// ==========

const array1 = [1,2,3,4,5]
const array2 = [2,3,4,5,6]

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array1.multBy(13))

console.log(array2.multBy(6))