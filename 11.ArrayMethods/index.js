const people = [
    {name: 'Mikhail', age: 21, budget: 30000},
    {name: 'Max', age: 17, budget: 3400},
    {name: 'Vladimir', age: 49, budget: 50000},
    {name: 'Igor', age: 15, budget: 1800},
    {name: 'Lena', age: 24, budget: 25000},
    {name: 'Stas', age: 38, budget: 2300},
]

//ES5
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

//ES6
// for (let person of people) {
//     console.log(person)
// }

// === ForEach

// people.forEach(function(person, index, pArr) {
//     console.log(person)
//     console.log(index)
//     console.log(pArr)
// })

//ES6
// people.forEach(person => console.log(person))

// === Map

// Возможно преобразовывать массив

// const newPeople = people.map(person => {
//     return `${person.name} (${person.age})`
// })
// console.log(newPeople)

// === Filter

// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })
// console.log(adults)

//ES6
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

// === Reduce

// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }
// console.log(amount)

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

// === Find 

// const igor = people.find(person => person.name === 'Igor')
// console.log(igor)

// === FindIndex

// const igorIndex = people.findIndex(person => person.name === 'Igor')
// console.log(igorIndex)

// === 

const newPeople = people
    .filter(person => person.budget > 3000) // запись назывется чейн)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
const amount = newPeople.reduce((total, person) => total + person.budget, 0)

console.log(newPeople)
console.log(amount)
