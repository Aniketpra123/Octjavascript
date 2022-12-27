var car={
    carname:'swift',
    price:800000,
    color:'white',

}
for(let i in car){
    if(i=='color')
    console.log(car[i]);
}
let cars=['swift','i10','enova']
for(let h of cars){
if(h=='i10'){
break;
}
console.log(h);
}

let g =20;
while(g>10){
    console.log(g);
    g--;
}

var b=10;
do{
console.log(b);
b++;
}
while(b<11);