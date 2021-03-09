let users = [
    {
      name: 'abc',
      age: 200
    },
    {
      name: 'xyz',
      age: 10
    }, 
  ]
  function getAverageAge(users)
 
  {
    let item,sum=0,count=0;
    for (let i = 0; i < users.length; i++) {
      //item = users[i];
      sum=users[i].age+sum;
      count=count+1;
  }
  return sum/count;
  }
  console.log(getAverageAge(users));