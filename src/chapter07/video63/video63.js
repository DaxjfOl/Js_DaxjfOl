console.log("Video 63")

const response = fetch("http://localhost:8000/users")

// response.then(data => data.json())

// const d = response.then(data => data.json())

// console.log(d)

response.then(res => res.json())
    .then(data => {
        console.log(data)
    })

// console.log(response)    