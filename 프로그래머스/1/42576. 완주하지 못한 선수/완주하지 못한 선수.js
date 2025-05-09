function solution(participant, completion) {
    const map = new Map();
    //console.log(map) // Map(0) {}
    
    // 1. 전체 참가자 세기
    for(const name of participant){
        //console.log(name)
        const count = map.get(name) || 0;
        map.set(name,count + 1);
    }
    
    // 2. 완주자 이름 빼기
    for (const name of completion) {
        map.set(name, map.get(name) - 1);
    }
    
    // 3. 값이 1인 사람 찾기
    for(const [name,count] of map){
        if (count > 0) return name
    }
}