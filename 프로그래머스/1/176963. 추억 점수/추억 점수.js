function solution(name, yearning, photo) {
    const yearningMap = {};
    
    name.forEach((person, index) => {
        yearningMap[person] = yearning[index];
    });

    // 각 사진 속 인물 점수 합산
    return photo.map( item => 
        item.reduce( (acc, cnt) => acc + (yearningMap[cnt] || 0) , 0)
    )
}