function isPalindrome(str)
{
    revStr=[];
for(let i=str.length-1;i>=0;i--)
{
    revStr.push(str[i]);
    
}
if(revStr.join===str)
{
    return true;
}

return false;
}

console.log(isPalindrome("racecar"));