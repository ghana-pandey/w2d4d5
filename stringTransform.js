exports.transformStr=transformStr;
function transformStr(str)
{
    let newStr=[];
    newStr=str.reverse().join("_");

    //let revStr=newStr.reverse()
    return newStr;
}
console.log(transformStr(['quick','brown','Fox']));
