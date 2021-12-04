

// === Map ===

const obj = {
    name: 'Mikhail',
    age: 21,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Mikhail'],
    ['age', 26],
    ['job', 'Fullstack'],
]

// console.log(Object.entries(obj))

// console.log(Object.fromEntries(entries))

const map = new Map(entries)

map
    .set('newField', 42)
    .set(obj, 'Value of object')
.set(NaN, 'NaN ??')

// map.delete('job')
// console.log(map.delete('job'))
// console.log(map.has('job'))
// console.log(map.size)

// map.clear()

// console.log(map.size)

// console.log(map)

// ===

// for (let [key, value] of map) {
//     console.log(key, value)
// }

// for (let val of map.values()) {
//     console.log(val)
// }

// for (let key of map.keys()) {
//     console.log(key)
// }

// map.forEach((val, key, m) => console.log(key, val))

// ===

// const array = [...map]
const array = Array.from(map)
// console.log(array)

const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// === 

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Max'},
    {name: 'Mikhail'},
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
.set(users[2], new Date(new Date().getTime() + 5000 * 60))


function lastVisits(user) {
    return visits.get(user)
}

// console.log(lastVisits(users[2]))

// === Set ===

const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

set.add(10).add(20).add(20).add(30)

// console.log(set)
// console.log(set.has(30))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// set.clear()
// console.log(set.size)

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// for (key of set) {
//     console.log(key)
// }

// ===

function uniqValues(array) {
    return [...new Set(array)]
}

//console.log(uniqValues([1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5]))

// === Weekmap ===

let obj2 = {name: 'weekmap'}

// const arr = [obj2]

// obj2 = null

// console.log(obj2)
// console.log(arr[0])

const map2 = new WeakMap([
    [obj2, 'obj data']
])
// get set delete has

obj2 = null

// console.log(map2.has(obj2))

// ===

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Akex'}

cacheUser(lena)
cacheUser(alex)

lena = null

// console.log(cache.has(lena))
// console.log(cache.has(alex))

// === WeekSet ===

const visits2 = new WeakSet()

visits2.add(users[0]).add(users[1])

users.splice(1, 1)

console.log(visits2.has(users[0]))
console.log(visits2.has(users[1]))



