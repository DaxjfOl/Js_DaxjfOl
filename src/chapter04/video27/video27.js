console.log("Video 27")

const randomDay = Math.floor(Math.random() * 6);

switch (randomDay) {
    case 0: {
        console.log("Sunday");
        break;
    }
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    }
    case 3: {
        console.log("Wednesday");
        break;
    }
    case 4: {
        console.log("Thursday");
        break;
    }
    case 5: {
        console.log("Friday");
        break;
    }
    default: {
        console.log("Saturday")
    }
}
