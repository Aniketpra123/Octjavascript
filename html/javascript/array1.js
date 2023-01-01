var arr=["aniket","Prabhudesai","Ratnagiri","mumbai"];


function longArray(){
  var maxarr=arr[0].length;
  console.log(maxarr);
  var ans=arr[0];
  for(var i=1;i<arr.length;i++){
    var max=arr[i].length;
    if(max>maxarr){
     ans=arr[i];
     maxarr=max
    
  }
  }
    return ans;
}
