const numberOne = Number(prompt('Digite o primeiro número:'));
const numberTwo = Number(prompt('Digite o segundo número:'));

const sum = (numberOne, numberTwo) => {
  const result = numberOne + numberTwo;
  return result;
};

const subtraction = (numberOne, numberTwo) => {
  const result = numberOne - numberTwo;
  return result;
};

const multiplication = (numberOne, numberTwo) => {
  const result = numberOne * numberTwo;
  return result;
};

const division = (numberOne, numberTwo) => {
  const result = numberOne / numberTwo;
  return result;
};

const rest = (numberOne, numberTwo) => {
  const result = numberOne % numberTwo;
  return result;
};

const oddOrEven = (numberOne, numberTwo) => {
  const result = sum(numberOne, numberTwo);

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

alert(`A soma dos dois números é: ${sum(numberOne, numberTwo)}`);

alert(`A subtração dos dois números é: ${subtraction(numberOne, numberTwo)}`);

alert(`A multiplicação dos dois números é: ${multiplication(numberOne, numberTwo)}`);

alert(`A divisão dos dois números é: ${division(numberOne, numberTwo)}`);

alert(`O resto da divisão dos dois números é: ${rest(numberOne, numberTwo)}`);

oddOrEven(numberOne, numberTwo);
sameOrDifferent(numberOne, numberTwo);