function solution(a, b) {
    const strAB = Number(String(a) + String(b)) // a+b
    const strBA = Number(String(b) + String(a)) // b+a
    
    if(strAB === strBA) return strAB
    
    return Math.max(strAB,strBA)
}