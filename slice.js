function reverse(arr)
{
    let arr2=[];
    for(let i=arr.length-1;i>=0;i--)
    {
       arr2.push(arr[i]);
    }
    return arr2;
}
let arr1=[1,2,3,4]
console.log(arr1);
console.log(reverse(arr1));