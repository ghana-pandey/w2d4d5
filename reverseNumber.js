function reverseNumber(number)
{
    let revNum=0;
    let rem;
    while(number > 0)
    {
         rem=number%10;
        revNum=revNum*10+rem;
        number=Math.floor(number/10);
       
       
    }
    return revNum;
}
console.log(reverseNumber(1234)); 