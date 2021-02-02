function solution(s){
    const bracketList = s.split('');
    const temp = [];
    
    if (bracketList[0] === ')' 
        || bracketList[bracketList.length - 1] === '(') {
        return false;
    }
    
    bracketList.forEach((bracket, i) => {
        bracket === '(' ? temp.push(i) : temp.pop();
    })
    
    return temp.length > 0 ? false : true;
}