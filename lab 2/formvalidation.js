let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    phone = id("phone"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success_icon"),
    failureIcon = classes("failure_icon");

  form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    formValidate();

  })

 function formValidate() {

     validUsername();
     validEmail();
     validPhone();
     validPassword();
      
  }

 // for username start

  function validUsername() {


    const u = username.value.trim();
    const char= /^[A-Za-z]*$/; 
     


      if (u ==='') {

        errorMsg[0].innerHTML = "Username cannot be blank";
        failureIcon[0].style.visibility = "visible";
        successIcon[0].style.visibility = "hidden";

    }else if (!u.match(char)) {

        errorMsg[0].innerHTML = "Username only allow alphabets";
        failureIcon[0].style.visibility = "visible";
        successIcon[0].style.visibility = "hidden";

    }else if (u.length < 3) {

        errorMsg[0].innerHTML = "Username must be mini 3 character";
        failureIcon[0].style.visibility = "visible";
        successIcon[0].style.visibility = "hidden";

    }else {

         errorMsg[0].innerHTML = " ";
         successIcon[0].style.visibility = "visible";
         failureIcon[0].style.visibility = "hidden";

    }
    
    }

  //  for username end

  // for email start

 function validEmail() {

    let e = email.value.trim();
    let  pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (e === '') {

        errorMsg[1].innerHTML = "Email cannot be blank";
        failureIcon[1].style.visibility = "visible";
        successIcon[1].style.visibility = "hidden";

    }else if (!e.match(pattern)) {

        errorMsg[1].innerHTML = "Enter valid email address";
        failureIcon[1].style.visibility = "visible";
        successIcon[1].style.visibility = "hidden";

    }else {

         errorMsg[1].innerHTML = " ";
         successIcon[1].style.visibility = "visible";
         failureIcon[1].style.visibility = "hidden";


    }

      
  }

  // for email end

  // for phone start
    
function validPhone() {
        
     let p = phone.value.trim();
     let  num = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (p === '') {

        errorMsg[2].innerHTML = "Phone number cannot be blank";
        failureIcon[2].style.visibility = "visible";
        successIcon[2].style.visibility = "hidden";

    }else if (!p.match(num)) {

        errorMsg[2].innerHTML = "Enter valid phone number";
        failureIcon[2].style.visibility = "visible";
        successIcon[2].style.visibility = "hidden";

    }else {

         errorMsg[2].innerHTML = " ";
         successIcon[2].style.visibility = "visible";
         failureIcon[2].style.visibility = "hidden";

    }


    }

  // for phone end

  // for password start

 function validPassword() {

     let pwd = password.value.trim();

    if (pwd === '') {

        errorMsg[3].innerHTML = "Password cannot be blank";
        failureIcon[3].style.visibility = "visible";
        successIcon[3].style.visibility = "hidden";

    }else if (pwd.length < 6) {

        errorMsg[3].innerHTML = "Password must be mini 6 character";
        failureIcon[3].style.visibility = "visible";
        successIcon[3].style.visibility = "hidden";

    }else {

         errorMsg[3].innerHTML = " ";
         successIcon[3].style.visibility = "visible";
         failureIcon[3].style.visibility = "hidden";

    }

     }


  // for password end