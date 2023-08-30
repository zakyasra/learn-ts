"use strict";
let namaSaya = "zakyasra"; // string
let username = 123; // number
let isDead = true; // boolean
// initilisasi awal kosong nilai
let pacarSaya;
pacarSaya = 5;
let pacarsSaya; // union
pacarsSaya = "lima";
let listPacar; // array biasa
listPacar = ["sana", "yuna"];
let selingkuhanSaya; // tupple => bagian dari array
selingkuhanSaya = ["lisa", 812, true];
let temanKita;
temanKita = {
    nama: "andi",
    isKampret: true,
    hutang: 45000,
};
// Function
// CARA BACA => gw punya FUNCTION yang nama nya CREATE dan tipe datanya STRING dan bernilai HELLO
function create() {
    return "hello";
}
const arrowCreate = () => {
    let a = 1;
    let b = 2;
    let z = a + b;
    console.log("no return = void" + z);
};
// parameter
const add = (x, y) => {
    return x + y;
};
console.log({ namaSaya });
console.log({ username });
console.log({ isDead });
console.log({ pacarSaya });
console.log({ listPacar });
console.log({ selingkuhanSaya });
console.log({ temanKita });
console.log(create());
console.log(arrowCreate());
console.log(add(10, 20));
