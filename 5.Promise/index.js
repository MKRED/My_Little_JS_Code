console.log('Request data...')

// ~~ Old ~~

// setTimeout(() => {
//     console.log('Prepearing data...')
    
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

// ~~ New ~~

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Prepearing data...')
    
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

// ~~ Maybe, but no ~~

// p.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })

//     p2.then(clientData => {
//         console.log('Data resolved', clientData)
//     })
    
// })

// ~~ Its ok ~~

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
            //reject(data)
        }, 2000)
    })
})
    .then(clientData => {
    console.log('Data resolved', clientData)
    clientData.fromPromise = true
    return clientData
})
    .then(data => {
    console.log('Modified', data)
})
    .catch(err => console.error('Error: ', err))
    .finally(() => console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => 
        {
            setTimeout(() => resolve(), ms)
        })
}

// ~~ Its ok ~~

// sleep(5000).then(() => console.log('After 5 sec'))
// sleep(6000).then(() => console.log('After 6 sec'))

Promise.all([
    sleep(5000).then(() => console.log(`After 5 sec`)), 
    sleep(7000).then(() => console.log(`After 7 sec`))])
    .then(() => {
        console.log('All promises')
    })

Promise.race([sleep(5000), sleep(7000)])
    .then(() => {
        console.log('Race promises')
    })