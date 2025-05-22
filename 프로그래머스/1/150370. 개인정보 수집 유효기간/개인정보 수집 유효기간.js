function solution(today, terms, privacies) {
    let result = [];
    
    // 날짜를 총 일수로 바꾸는 함수
    const dateToDays = (date) => {
        const [y,m,d] = date.split('.').map(Number);
        console.log("log 확인:"+y,m,d)
        return y * 12 * 28 + m * 28 + d;
    }
    console.log("log 확인:"+dateToDays(today))
    
    
    // 약관 종류와 유효기간을 쉽게 다루기 위해 객체 형태로 바꿔주기
    const termMap = {};
    for (const term of terms) {
        const [type, months] = term.split(' ');
        console.log(term.split(' '))
        termMap[type] = Number(months);
    }

    console.log(termMap)
    
    
    // 개인정보 하나씩 확인
    for(let i=0; i<privacies.length; i++){
        const [date,type] = privacies[i].split(' ');
        console.log("log 확인:"+date,type)
        
        // 수집일
        const collectDays = dateToDays(date);
        
        // 만료일 계산
        const validUntil = collectDays + termMap[type] * 28
        // 오늘 날짜랑 비교 
        if (validUntil <= dateToDays(today)){
            result.push(i+1) // 인덱스는 0부터 시작이니까 +1
        }
    }
    
    return result;
    
}

