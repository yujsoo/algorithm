function solution(order) {
    const price45 = 4500;
    const price50 = 5000;
    let result = 0;
    
    for(i = 0; i< order.length; i++){
        switch(order[i]) {
            case "americano":
            case "iceamericano":         
            case "americanoice": 
            case "hotamericano": 
            case "americanohot" : 
                result += price45
                break
            case "cafelatte":
            case "icecafelatte":
            case "cafelatteice":
            case "hotcafelatte":
            case "cafelattehot":
                result += price50
                break
            default: result += price45
        }
    }
    
    return result
}