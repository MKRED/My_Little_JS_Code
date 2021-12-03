const person = Object.create(
    {
        calculateAge() {
            console.log('Age: ', new Date().getFullYear() - this.birthYear)
        }
    }, 
    {
    name: {
        value: 'Mikhail',
        enumerable: true,
        writable: true,
        configurable: true,
    },
    birthYear: {
        value: 2000,
        enumerable: false, // по умолчанию
        writable: false, // по умолчанию
        configurable: false, // по умолчанию
    },
    age: { // preson.age
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value){
            document.body.style.background = 'red'
            console.log('Set age', value)
        },
    }
})

// person.name = 'Maxim'

for (let key in person) {
    if(person.hasOwnProperty(key)) { // не выводит calculateAge
        console.log('Key', key, person[key])
    }
    
}

