let namaSaya: string = "zakyasra"; // string
let username: number = 123; // number
let isDead: boolean = true; // boolean

// initilisasi awal kosong nilai
let pacarSaya: number;
pacarSaya = 5;

let pacarsSaya: number | string; // union
pacarsSaya = "lima";

let listPacar: string[]; // array biasa
listPacar = ["sana", "yuna"];

let selingkuhanSaya: [string, number, boolean]; // tupple => bagian dari array
selingkuhanSaya = ["lisa", 812, true];

// tipe data custom
type TemanType = {
  nama: string;
  isKampret: boolean;
  hutang: number;
  isPunyaPacar?: boolean; // opsional bisa ada nilai atau tidak
};

let temanKita: TemanType;

temanKita = {
  nama: "andi",
  isKampret: true,
  hutang: 45_000,
};

// Function
// CARA BACA => gw punya FUNCTION yang nama nya CREATE dan tipe datanya STRING dan bernilai HELLO
function create(): string {
  return "hello";
}

const arrowCreate = (): void => {
  let a = 1;
  let b = 2;
  let z = a + b;
  console.log("no return = void" + z);
};

// parameter
const add = (x: number, y: number): number => {
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
