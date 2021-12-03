

// Wrapper

const withDefaultValue = (target, dafaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : dafaultValue)
    })
}

const position = withDefaultValue(
    {
    x: 24,
    y: 42
    },
    0
)

// console.log(position)

// Hidden properies

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver)
        ? obj[prop]
        : void 0
    })
}

const data = withHiddenProps({
    name: 'Mikhail',
    age: 21,
    _uid: '345342'
})

// Optimization

// Обычный массив

// const userData = [
//     {id: 1, name: 'Mikhail', job: 'Fullstack', age: 21},
//     {id: 2, name: 'Lena', job: 'Student', age: 22},
//     {id: 3, name: 'Vlad', job: 'Backend', age: 29},
//     {id: 4, name: 'Max', job: 'Teacher', age: 24}
// ]

// const index = {}
// userData.forEach(i => (index[i.id] = i))

const IndexArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => index[item.id] = item);

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById': 
                        return id => index[id]
                    default:
                        return arr[prop];
                }
            }
        }) 
    }
})

const users = new IndexArray([
    {id: 1, name: 'Mikhail', job: 'Fullstack', age: 21},
    {id: 2, name: 'Lena', job: 'Student', age: 22},
    {id: 3, name: 'Vlad', job: 'Backend', age: 29},
    {id: 4, name: 'Max', job: 'Teacher', age: 24}
])

// users[2]
// users.push({id: 5, name: 'Gena'})
// users.findById(1)