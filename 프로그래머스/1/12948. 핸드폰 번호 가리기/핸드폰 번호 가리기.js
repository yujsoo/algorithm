function solution(phone_number) {
    // 뒤에 4자리 숫자
    const remainNum = phone_number.slice(-4);
    
    // 앞에 4자리 숫자
    const frontNum = [...phone_number.slice(0,-(remainNum.length)) ];
    
    // 새로연 배열 반환 후 합치기
    const frontNumArr = frontNum.map(i => i.replace(i,"*")).join("");
    
    return frontNumArr + remainNum             
}