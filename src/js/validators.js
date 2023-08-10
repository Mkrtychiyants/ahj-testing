function LuhnCheck(value) {
  const checkDigit = Number(value[value.length - 1]);
  let sum = 0;
  for (let index = value.length - 2; index >= 0; index -= 1) {
    if (index % 2 === 0) {
      const mult = Number(value[index]) * 2;
      if (String(mult).length === 2) {
        const partsSum = Number(String(mult)[0]) + Number(String(mult)[1]);
        sum += partsSum;
      } else {
        sum += mult;
      }
    } else {
      sum += Number(value[index]);
    }
  }
  return checkDigit === (10 - (sum % 10));
}
function firstNumberCheck(value) {
  switch (value[0]) {
    case '5':
      return 'mc';
    case '6':
      return 'discover';
    case '3':
      return 'jcb';
    case '2':
      return 'mir';
    default:
      return 'visa';
  }
}
function lengthCheck(value) {
  switch (value.length) {
    case 16:
      return firstNumberCheck(value);
    case 15:
      return 'ae';
    case 14:
      return 'dinner';
    default:
      return 'visa';
  }
}

export function isValidInn(value) {
  // Just stub (your logic must be here)
  return !!LuhnCheck(value);
}

export function typeCheck(value) {
  return lengthCheck(value);
}
