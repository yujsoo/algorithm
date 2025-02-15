function solution(my_string, overwrite_string, s) {
    let result = "";
    
    const lastLen = overwrite_string.length + s;
    const firstWord = my_string.slice(0,s);
    const lastWord = my_string.slice(lastLen);
   
    result = firstWord + overwrite_string + lastWord
    return result
}