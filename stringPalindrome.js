exports.checkStringPal=checkStringPal;
function checkStringPal(str)
{

    //str = str.toLowerCase()
    //let str3=str.split(",")
    //console.log(str3);
    let len=str.length;
    let newStr=[]
    for(let i=str.length-1;i>0;i--)
    {
      newStr=newStr.push(str[i]);
        }
      if(str!=newStr)
      {
      return false;
      }
      else
      return true;

     }
      console.log(checkStringPal(['r','A','c','e','c','a','r']));
    
