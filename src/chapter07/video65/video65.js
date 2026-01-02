console.log("Video 65")

const greeting = (name, callback) => {
    console.log(`Hello, ${name}!`)
    callback();
}

const farewell = () => {
    console.log("Goodbye callback.....!")
}

greeting("daxjf", farewell);