export const onCounterCheck = (computerInput, userInput) => {
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < computerInput.length; i++) {
        if(computerInput.includes(userInput[i])){
            ballCount++;
        } 
        if (computerInput[i] == userInput[i]) {
            ballCount--;
            strikeCount++;
        } 
    }
    return { ballCount, strikeCount };
}