function solution(n)
{
    const div = (n+"").split('');
    let sum = 0;
    div.forEach(ele => {
        sum += parseFloat(ele);
    })
    return sum;
}