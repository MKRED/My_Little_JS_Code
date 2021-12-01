

// const person = {
//     name: 'Mikhail',
//     age: 21,
//     greet: function() {
//         console.log('Greet!')
//     }
// }

const person = new Object({
    name: 'Mikhail',
    age: 21,
    greet: function() {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = 'I am string'
// We can srt.sayHello wow!

// ~~ Its all) ~~