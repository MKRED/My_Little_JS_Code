

function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]

// const [sum, sub] = result

//console.log(sum, sub, mult, other);

// === Object ===

const person = {
    name: 'Mikhail',
    age: '21',
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

//const {name: firstName = 'Без имени', age, car = 'Машины нет', address: {city: homeTown, country}} = person
// console.log(firstName, age, homeTown, country, car);

// const {name: firstName, ...info} = person
// console.log(firstName, info);

function logPerson({name, age}) {
    console.log(name + ' ' + age);
}

logPerson(person)

