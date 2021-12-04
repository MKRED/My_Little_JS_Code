

const url = 'https://jsonplaceholder.typicode.com/users'

// === XHR ===

function sendRequest(method, urlReq, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, urlReq)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => reject(xhr.response)

        xhr.send(JSON.stringify(body))
    })

}

// sendRequest('GET', url)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'Mikhail',
    age: 21
}

sendRequest('POST', url, body)
    .then(data => console.log(data))
.catch(err => console.log(err))