let car={};

car.make="Toyota";
car.model="camry";
console.log(car);
car['model']="RAV4";
console.log(car)
//delete car;
delete car.model
delete car.make
console.log(car);

let obj1={
    name:'Ram',
    age:20,
};
let obj2={
    name:"Ram",
    age:20,
};
function isPersonEqual(obj1,obj2)
{
    if(obj1.name===obj2.name && obj1.age===obj2.age)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log("Expect True:", isPersonEqual(obj1,obj2));

const cars = {
    color: 'Blue',
    brand: 'Ford',
    model: 'Fiesta'
  }
  var count = 0;
for(let key in cars)
{
    count++
}
console.log(count);