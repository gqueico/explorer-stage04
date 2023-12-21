const numberOne = Number(prompt('Digite o primeiro número:'));
const numberTwo = Number(prompt('Digite o segundo número:'));

const sum = (numberOne, numberTwo) => {
  const result = numberOne + numberTwo;
  alert(`A soma dos dois números é: ${result}`);
};

const subtraction = (numberOne, numberTwo) => {
  const result = numberOne - numberTwo;
  alert(`A subtração dos dois números é: ${result}`);
};

const multiplication = (numberOne, numberTwo) => {
  const result = numberOne * numberTwo;
  alert(`A multiplicação dos dois números é: ${result}`);
};

const division = (numberOne, numberTwo) => {
  const result = numberOne / numberTwo;
  alert(`A divisão dos dois números é: ${result}`);
};

const rest = (numberOne, numberTwo) => {
  const result = numberOne % numberTwo;
  alert(`O resto da divisão dos dois números é: ${result}`);
};

const oddOrEven = (numberOne, numberTwo) => {
  const result = numberOne + numberTwo;

  if(result % 2 == 0) {
    alert(`A soma dos dois números é par: ${result}`);
  } else {
    alert(`A soma dos dois números é impar: ${result}`);
  };
};

const sameOrDifferent = (numberOne, numberTwo) => {
  if(numberOne === numberTwo) {
    alert(`Os números inseridos são iguais.`);
  } else {
    alert(`Os números inseridos são diferentes.`);
  };
};

sum(numberOne, numberTwo);
subtraction(numberOne, numberTwo);
multiplication(numberOne, numberTwo);
division(numberOne, numberTwo);
rest(numberOne, numberTwo);
oddOrEven(numberOne, numberTwo);
sameOrDifferent(numberOne, numberTwo);