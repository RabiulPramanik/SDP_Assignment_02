var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let result = friends[0];
for(let i=0; i< friends.length; i++){
    if( friends[i].length > result.length){
        result = friends[i];
    }
}
console.log(result);
