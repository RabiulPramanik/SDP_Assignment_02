const Saving = (allP,cost) =>{
    let totalValue = 0;
    for(let element of allP){
        if(element >=3000){
            totalValue += element - (element * 0.2);
        }
        else{
            totalValue += element
        }
    }
    let save = totalValue - cost;
    if(save < 0){
        return 'earn more';
    }
    else{
        return save;
    }

}


var values = [1000,2000,3000];
var costs = 5400;

if(typeof(values) != 'object' && typeof(costs) != 'number'){
    return 'Invalid input';
}
else{
    const result = Saving(values,costs);
    console.log(result);
}