function solution(answers) {
    const person = [1,2,3,4,5];
    const secPerson = [2,1,2,3,2,4,2,5];
    const thirdPerson = [3,3,1,1,2,2,4,4,5,5];
    const count = [0,0,0]
    const result = [];
    let seq = 0, max;
    
    answers.map ((value, se) => {
        if (value == person[se % person.length]) count[0]++;
        if (value == secPerson[se % secPerson.length]) count[1]++;
        if (value == thirdPerson[se % thirdPerson.length]) count[2]++;
    });
    
    
    max = Math.max(count[0],count[1],count[2]);
    
    if (max === count[0]) result.push(1);
    if (max === count[1]) result.push(2);
    if (max === count[2]) result.push(3);
    
    return result;
}