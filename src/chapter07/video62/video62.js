console.log("Video 62")

// setTimeout(() => {
//     console.log("Timeout executed after 5 seconds")
// }, 5000)

// console.log("End of script")

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Timeout executed after 5 seconds")
            resolve("DaxjfOl")
        }, 5000)
    })
}
const test = myPromise();

console.log("test:", test)

console.log("End of script")

myPromise().then(data => {
    console.log("Data received:", data)
    console.log("After calling myPromise")
})

