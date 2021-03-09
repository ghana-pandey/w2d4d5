"use strict"
const sam1={
    name:"sam",
    age:10

};
const sam2={
    name:"sam",
    age:10
};
const John={
    name:"JOhn",
    age:10
};
function isPersonEqual(obj1,obj2)
{
    if(obj1.name===obj2.name && obj1.age===obj2.age)
    {
        return true;
    }
        else {
            return false
        }
    }
console.log("expect true:", isPersonEqual(sam1,sam2));

