function solution(str1, str2) {
   return [...str1].map((currentValue,i) => currentValue + str2[i]).join("")
}