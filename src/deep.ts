type CoreCount = 2 | 4 | 6 | 8;
type CoreName = "dual core" | "quad core";
type Core = CoreCount | CoreName; // union type bro
// type Core = 2 | 4 | 6 | 8 | "dual core" | "quad core";

interface IProsessor {
  brand: string;
  baseModel: string;
  modelName: string;
  // coreTotal: 2 | 4 | 6 | 8 | "dual core" | "quad core"; // spesifik
  coreTotal: Core; // representasi dari type
  clockSize: number;
}

// extendabel
interface Intel extends IProsessor {
  turboBoost: boolean;
}

interface AMD extends IProsessor {
  precisionBoost?: boolean; // opsional
}

const creates = (prosessor: IProsessor): void => {
  console.log("berhasil membuat prosessor " + prosessor.brand);
};

const createIntel = (prosessor: Intel): void => {
  console.log("berhasil membuat prosessor " + prosessor.turboBoost);
};
const createAMD = (prosessor: AMD): void => {
  console.log("berhasil membuat prosessor " + prosessor.precisionBoost);
};

const corei5: Intel = {
  brand: "intel",
  baseModel: "core i5",
  modelName: "i5-11350F",
  clockSize: 4,
  coreTotal: 2,
  turboBoost: true,
};

const ryzen3: AMD = {
  brand: "AMD",
  baseModel: "ryzen 3",
  modelName: "r-5570x",
  clockSize: 6,
  coreTotal: 4,
  precisionBoost: false,
};

// console.log(creates(corei5));
console.log(createIntel(corei5));
console.log(createAMD(ryzen3));
