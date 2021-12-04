const citiesRussia = ['Москва', 'СПБ', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'париж']

const citiesRussiaWithPopulation = {
    Moscow: 29,
    SPB: 8,
    Kazan: 5,
    Novosibirsk: 3
}
const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2,
}

// === Spread ===

// console.log(...citiesRussia)
// console.log(...citiesEurope)

const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope]
// const allCities = citiesEurope.concat(citiesRussia)

// console.log(allCities)

// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})

// ===

//const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers))

const divs = document.querySelectorAll('div')
const nodes = [...divs]

// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))

// === Rest ===

function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5]

// Spread!!
//console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...other] = numbers

// console.log(a, b, other)

const person = {
    name: 'Max',
    age: 21,
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...adress} = person

console.log(name, age, adress);

// Spread разворачивает массивы, обьекты
// Rest собирает все параметры

