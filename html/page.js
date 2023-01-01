function valid(){
  var a=document.getElementById("text1").value;
  if(a==""){
    document.getElementById("message").innerHTML="**please enter valid name";
    return false;
  }
}