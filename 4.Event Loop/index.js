console.log('Start')

console.log('Start 2')

// setTimeout(() => {
//     console.log('InsideTimeOut')
// }, 2000)

//Event Loop

setTimeout(() => {
    console.log('InsideTimeOut')
}, 0) // Выполнится последним

console.log('End')