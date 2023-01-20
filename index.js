//ESERCIZIO UNO
const getResistenza = (number) => {
  let arrayNumber = number.toString().split("");
  let resistorNumber = arrayNumber.reduce((a, value) => a * value);
  if (resistorNumber > 9) {
    return getResistenza(resistorNumber);
  } else {
    return resistorNumber;
  }
};

//ESERCIZIO DUE
let array = [2, 4, 1, 5, 6, 3, 4, 2, 7, 4, 5, 4, 5];

const sortArray = (arrayNumber) => {
  let frequenzaNumeri = arrayNumber.reduce((a, value) => {
    a[value] = a[value] ? a[value] + 1 : 1;
    return a;
  }, {});
  let chiaveMax = Object.entries(frequenzaNumeri).sort((a, b) => b[1] - a[1]);
  return chiaveMax;
};

const getFrequente = (arrayNumber) => sortArray(arrayNumber)[0];
const getFrequenti = (arrayNumber, end) => sortArray(arrayNumber).slice(0, end);

console.log("ARRAY SORTED", sortArray(array));
console.log("FREQUENZA NUMERO_PT1 - TOP one", getFrequente(array));
console.log("FREQUENZA NUMERO_PT2 - TOP three", getFrequenti(array, 3));
