
function createCalcFunction (n) {
    return function() {
        console.log(1000 * n)
    }
}

createCalcFunction(42)()

// =========

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))

console.log(addTen(10))

// =========

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')


console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('yandex'))
console.log(ruUrl('vk')) // на самом деле com

// =========

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// function bind(person, func) {
//     return function(...args) {
//         func.apply(person, args)
//     }
// }

// ~~ or ~~

Object.prototype.logPerson = function () {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function bind(person, func) {
    return func.bind(person)
}

const person1 = {name: 'Mikhail', age: 21, job: 'Frontend'}
const person2 = {name: 'Lena', age: 23, job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()

