function solution(absolutes, signs) {
    let result = [];
    
    signs.forEach( i => {
        result = absolutes.map((val,i) => signs[i] == false ? -(val) : val )
    })
    return result.reduce((arr,cnt) => arr += cnt)
}