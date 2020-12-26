const NUMBER_SIZE = 3;

export const setRandomNumbers = () => {
    const randomNumbers = [];

    let computerInputNumbers = '';
    while (randomNumbers.length < NUMBER_SIZE) {
      let candidate = Math.floor((Math.random() * 9) + 1);
      if (!randomNumbers.includes(candidate)) {
        randomNumbers.push(candidate);
      }
    }
    computerInputNumbers = randomNumbers.join('');
    
    console.log(computerInputNumbers);
    
    return computerInputNumbers;
  }