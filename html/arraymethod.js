emp=[{firstname:"aniket",lastname:"prabhudesai", age:26},
{firstname:"aniket1",lastname:"prabhudesai1", age:27},
{firstname:"aniket2",lastname:"prabhudesai2", age:28}]

var data=emp.filter((element)=>{
    return element.age==28 && element.firstname=='aniket2';

})
console.log(data);

let newname=[];
emp.forEach(element => {
    newname.push(element.firstname)
});
console.log(newname);
