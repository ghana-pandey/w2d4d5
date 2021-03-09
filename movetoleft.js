exports.rotateLeft=rotateLeft
function rotateLeft(list)
{
    let temp=list[0];
    let j=0;
    for(let i=0;i<list.length;i++)
    {
    list[i]=list[i+1];
    
    }
    list[list.length-1]=temp;
return list;
}
let list = [ 17, 8, 9, 5, 20 ]; 
console.log(rotateLeft( list));