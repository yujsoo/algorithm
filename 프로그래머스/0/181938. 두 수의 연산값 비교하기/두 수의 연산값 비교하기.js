function solution(a, b) {
    const compareA = Number(`${a}${b}`)
    const compareB = 2*a*b
    
    return compareA === compareB ? compareA : Math.max(compareA, compareB)
}