function checkSpam(str)
{
          

    if(str.includes ("lottery"))
    {
        return true
    }
    else
    {
        return false;
    }
}
console.log(checkSpam("lottery"));
console.log(checkSpam("prize"));
console.log(checkSpam("lotterysssfd"));