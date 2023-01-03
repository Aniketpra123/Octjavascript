//emp=[{firstname:"aniket",lastname:"prabhudesai", age:26},
//{firstname:"aniket1",lastname:"prabhudesai1", age:27},
//{firstname:"aniket2",lastname:"prabhudesai2", age:28}]
empdetails=
{
    emp:[{firstname:"aniket",lastname:"prabhudesai", age:26
},{firstname:"aniket1",lastname:"prabhudesai1", age:27
},{firstname:"aniket2",lastname:"prabhudesai2", age:28
}
],
add:[{city:"mumbai"},
{city:"pune"}
],
detail:[
    [
        city='rt',pincode=416702
    ]
]
}
console.log(empdetails.add);

console.log(empdetails.add[1].city);
console.log(JSON.stringify(empdetails));