var studentDetails = { name: 'aniket', age: 25, address: "ratnagiri" };
console.log(studentDetails);
let cars = ['bmw', 'volvo', 'mahindra', 'tata'];
for (var i = 0; i < cars.length; i++) {
    if(cars[i]=='volvo'){ 
        continue;
    }
    console.log(cars[i]);
    return cars;
}

function looping(){
    cars.forEach(item =>{
        console.log(item);
    })
}
looping()
let newcar=[];
cars.forEach(items =>{
    if(items!='volvo'){
        newcar.push(items)
    }
})
console.log(newcar);
let numberArray=[];