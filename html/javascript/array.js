function array(){
var color=['black','red','yellow',22,23];
console.log(color[0]);
color[2]='green';
console.log(color);
//console.log(color.toString());
console.log(color.join('\n'));
color.push('blue');
console.log(color);
console.log(color.shift());
console.log(color.unshift());
color[2]='brown';
color[color.length]='maroon';
delete color[0];
console.log(color);
color.splice('greenred','darkyellow');
console.log(color);
color.slice(1);
console.log(color.toString());
console.log(color.sort());
console.log(color.reverse());
const d=new Date("12-12-2022");
console.log(Date());
var no1=[10,20,30];
var no2=[40,50];
var concat=no1.concat(no2);
console.log(concat);
var no1=[10,20,30,40,50,60,70];
no1.splice(2,1,100);
console.log(no1);
}

