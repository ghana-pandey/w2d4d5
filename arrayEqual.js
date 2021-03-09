exports.isArrayEqual=isArrayEqual;
function isArrayEqual(arr1,arr2)
{
    for(i=0;i<arr1.length&&arr2.length;i++)
    {
        if(arr1[i]===arr2[i])
        {
            return true;
        }
    }
    return false;

}
c1=[1,2,3,4];
c2=[2,3,4];
console.log(isArrayEqual(c1,c2));