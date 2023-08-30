"use strict";
const creates = (prosessor) => {
    console.log("berhasil membuat prosessor " + prosessor.brand);
};
const createIntel = (prosessor) => {
    console.log("berhasil membuat prosessor " + prosessor.turboBoost);
};
const createAMD = (prosessor) => {
    console.log("berhasil membuat prosessor " + prosessor.precisionBoost);
};
const intelCorei5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350F",
    clockSize: 4,
    turboBoost: true,
};
const amdRyzen3 = {
    brand: "AMD",
    baseModel: "ryzen 3",
    modelName: "r-5570x",
    clockSize: 6,
    precisionBoost: false,
};
// console.log(creates(intelCorei5));
console.log(createIntel(intelCorei5));
console.log(createAMD(amdRyzen3));
