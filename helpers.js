export const betterNumber = (num) =>{
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

export const validNum = (num) =>{
    if(num === ""){
        return num = 1;
    }
    else if(num <= 0){
        return num = 1;
    }
    else{
        return num;
    }
}

