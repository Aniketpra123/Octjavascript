let username=document.getElementById("name");
let emailId=document.getElementById("mail");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let submitButton=document.getElementById("btn");
function nameHandler(){
if(username.value===""){
  setErrorForInput(username,"username can't be blank");
}else{
  setSuccessForInput(username);
}
}
function checkAll(field){
 
   switch(field){
    case "name":
      nameHandler();
      break;
      case "email":
        emailHandler();
        break;
        case "password":
          passwordHandler();
          break;
        case "confirmPassword":
          confirmPasswordHandler();
          break;
        case "submit":
          checkAll();

   }

}
submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  inputHandler("submit");
})

function setSuccessForInput(field){
const formHandle=field.parentElement;
}