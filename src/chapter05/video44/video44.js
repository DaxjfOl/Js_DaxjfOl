console.log("Video44")


const sv1 = {
    name: "DaxjfOl",
    score: 10
}
const sv2 = {
    name: "Hoang",
    score: 4
}
const sv3 = {
    name: "Nguyen",
    score: 7
}

const students = [sv1, sv2, sv3];

console.log(">>>> check sinh viên", students);

students.forEach((item, index) => {
    console.log("index", index, "student", item.name);
})

for (let key in students) {
    console.log("key", key, "student", students[key].name);
}
for (let item of students) {
    console.log("item", item.name);
}