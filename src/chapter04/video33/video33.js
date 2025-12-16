console.log("Video 33")


let globalVar = "Tôi là biến toàn cục";
function show() {
    console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được




function sayHi() {
    let name = "hoidanit";
    console.log("Hi " + name);
    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y); // ✅ Truy cập được
    }
    console.log(Y); // ❌ Lỗi: x is not defined
}
sayHi();
console.log(name); // ❌ Lỗi: name is not defined



