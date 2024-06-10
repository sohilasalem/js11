var UsertEmail=document.getElementById('UsertEmail');
var Userpass=document.getElementById('Userpass');
var inputError=document.getElementById('inputError');
var submit=document.getElementById('submit');
var inputContainer=[];

function addAcc(){
 if(validateUserEmail()   && validateUserpass()){
   
        var user={
            email:UsertEmail.value,
            pass:Userpass.value
        }

    console.log(user);
    inputContainer.push(user)
    addToLocalStorage();
    clearForm();
    
}else{
    console.log('error');
    inputInvalid.classList.replace("d-none", "d-block")
    inputError.classList.replace("d-block", "d-none")

  }
}
submit.addEventListener('click', addAcc)

function addToLocalStorage() {
    localStorage.setItem("inputContainer", JSON.stringify(inputContainer));
  }

function clearForm(){
    UsertEmail.value=null
    Userpass.value=null
}


    function validateUserEmail(){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(UsertEmail.value)){
      console.log("match");
      UsertEmail.classList.add("is-valid");
      UsertEmail.classList.remove("is-invalid")
      inputError.classList.replace("d-block", "d-none")
      return true;
    }else{
     inputError.classList.replace("d-none", "d-block")
      console.log("not match");
      UsertEmail.classList.add("is-invalid");
      UsertEmail.classList.remove("is-valid");
      inputError.classList.replace("d-none", "d-block")
      return false;
    }
  }
  function validateUserpass(){
    var passRegex = /^[A-Za-z]/;
    if(passRegex.test(Userpass.value)){
      console.log("match");
      Userpass.classList.add("is-valid");
      Userpass.classList.remove("is-invalid")
      // inputError.classList.replace("d-block", "d-none")
      inputError.classList.replace("d-block", "d-none")

      return true;
    }else{
      console.log("not match");
      Userpass.classList.add("is-invalid");
      Userpass.classList.remove("is-valid");
      inputError.classList.replace("d-none", "d-block")
      return false;
    }
   
  } clearForm()


 