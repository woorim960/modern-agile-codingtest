const NUMBER_SIZE = 3;

export const numberValidator = userInput => {
    const userInputNumbersArray = userInput.split('');
    const setUserInput = new Set(userInput);

    userInputNumbersArray.some(value => {
      if (isNaN(parseInt(value))) {
        alert("숫자만 입력해주세요.");
      }
      return false;
    });

      if (userInput.length !== NUMBER_SIZE) {
        alert("숫자 길이가 다릅니다.");
        return false;
      }
    
      if (setUserInput.size !== NUMBER_SIZE) {
        alert("숫자가 중복됩니다.");
        return false;
      }
    return true;
}