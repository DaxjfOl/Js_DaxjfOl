console.log("Video 29")

for (i = 1; i < 10; i++) {
    console.log("i =", i)
    if (i === 7) {
        break;
    }
}

console.log("=============")


for (i = 1; i < 10; i++) {
    if (i === 4) {
        continue;
    }

    console.log("i =", i)
}