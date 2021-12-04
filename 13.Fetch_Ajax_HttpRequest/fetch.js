

const url = 'https://jsonplaceholder.typicode.com/users'

// === Fecth ===

function sendRequest(method, urlReq, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(urlReq, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then(error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        })
    })
}

// sendRequest('GET', url)
//     .then(data => console.log(data))
// .catch(err => console.log(err))

const body = {
    name: 'Mikhail',
    age: 21
}

sendRequest('POST', url, body)
    .then(data => console.log(data))
.catch(err => console.log(err))