var UsertEmail=document.getElementById('UsertEmail');
var UsertName=document.getElementById('UsertName');
var Userpass=document.getElementById('Userpass');
var inputError=document.getElementById('inputError');
var inputContainer=[];

function addAcc(){
 if(validateUserEmail()  && validateUserpass() &&  validateUserName()){
   
        var user={
            email:UsertEmail.value,
            pass:Userpass.value,
            name:UsertName.value
        }

    console.log(user);
    inputContainer.push(user)
    // displayData();
    addToLocalStorage();
    clearForm();
    
}else{
    // inputErro();
    // console.log('error');
    inputValid.classList.replace("d-none", "d-block")
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
    UsertName.value=null
}


// function inputErro(){
//     inputError.classList.replace("d-block", "d-none")

//     var alert;
//     for (var i = 0; i < inputContainer.length; i++) {
//         alert += `All inputs is required`;
//       }
//       document.getElementById('inputInvalid').innerHTML=alert
//     }


    function validateUserEmail(){
    var emailRegex = /^[A-Za-z]\d/;
    if(emailRegex.test(UsertEmail.value)){
      console.log("match");
    //   UsertEmail.classList.add("is-valid");
    //   UsertEmail.classList.remove("is-invalid")
      inputError.classList.replace("d-block", "d-none")
      return true;
    }else{
     inputError.classList.replace("d-none", "d-block")
      console.log("not match");
    //   UsertEmail.classList.add("is-invalid");
    //   UsertEmail.classList.remove("is-valid");
      inputError.classList.replace("d-none", "d-block")
      return false;
    }
  }
  function validateUserpass(){
    var passRegex = /^[A-Za-z]\d/;
    if(passRegex.test(Userpass.value)){
      console.log("match");
    //   Userpass.classList.add("is-valid");
    //   Userpass.classList.remove("is-invalid")
      inputError.classList.replace("d-block", "d-none")

      return true;
    }else{
      console.log("not match");
    //   Userpass.classList.add("is-invalid");
    //   Userpass.classList.remove("is-valid");
      inputError.classList.replace("d-none", "d-block")
      return false;
    }
  } clearForm()

  function validateUserName(){
    var passRegex = /^[A-Za-z]\d/;
    if(passRegex.test(Userpass.value)){
      console.log("match");
    //   Userpass.classList.add("is-valid");
    //   Userpass.classList.remove("is-invalid")
      inputError.classList.replace("d-block", "d-none")

      return true;
    }else{
      console.log("not match");
    //   Userpass.classList.add("is-invalid");
    //   Userpass.classList.remove("is-valid");
      inputError.classList.replace("d-none", "d-block")


      return false;
    }

}