exports.sumOfTwo=sumOfTwo;
function sumOfTwo(arr1,arr2)
{

    let arr3=[];
    for(let i=0;i<arr1.length&&arr2.length;i++)
    {
        arr3.push(arr1[i] + arr2[i]);
      //sum=arr3;
    }
    return arr3;
}
console.log(sumOfTwo([1,2,3,4,5] , [5,4,3,2,1]));
