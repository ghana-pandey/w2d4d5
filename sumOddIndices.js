function sumOfOdd(arr)
{
let sum=0;
for(let i=1;i<arr.length;i+=2)
{
    
    
        sum=sum+arr[i];
    
}
return sum;
}
console.log(sumOfOdd([1,3,4,6,4,7,2]))