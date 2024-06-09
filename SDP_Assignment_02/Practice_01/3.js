const quickSort= (arr) =>{
    if(arr.length <=1){
        return arr;
    }

    let temp = arr[0];
    let leftPart = [];
    let righttPart = [];
    for(let i=1;i<arr.length;i++){
        if(arr[i] < temp){
            leftPart.push(arr[i]);
        }
        else{
            righttPart.push(arr[i]); 
        }
    }

    return [...quickSort(leftPart), temp, ...quickSort(righttPart)];
}

let valus = [2,1,4,3,5,10,20,9,19,18,8,12,13,15,6,16,17,7,14,11];
valus = quickSort(valus);
console.log(...valus);