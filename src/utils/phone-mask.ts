const PATTERN = /\D/g;

const getInputNumbersValue = (value: string) => {
  // return only numbers
  return value.replace(PATTERN, "");
};

export const handlePhoneInput = (phone: string) => {
  let inputNumbersValue = getInputNumbersValue(phone);
  let formattedInputValue = "";

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    // Russian phone number
    if (inputNumbersValue[0] === "9") {
      formattedInputValue = "+7" + inputNumbersValue;
    }

    const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }
  } else if (inputNumbersValue[0]) {
    // Not Russian phone number
    formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
  }

  console.log(inputNumbersValue, formattedInputValue);

  return formattedInputValue;
};
