
function checksendMail(){
   const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
   const message = document.querySelector("#message").value;
if(name != "" && email != "" && message != "" && subject!="" && !/^[A-Za-z]+([-' ][A-Za-z]+)*$/.test(input.value.trim()) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
{
    sendMail();
}
else{
    checkEmail();
    checkMsg();
    checkName();
    checkSubject();
}
}


function sendMail(){
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

 emailjs
  .send("service_n451ogh","template_dnn4m1a",templateParams).then(() => 
    alert("Email sent successfully! ")).catch(() => alert("Failed to send email. please try again."));
  }
function checkName(){
const input = document.getElementById("name");
const error = document.getElementById("error-name");


  if (input.value.trim() === "") {
    error.textContent = "Field is empty!!";
     error.style.backgroundColor = "red";
  } 
  else if (!/^[A-Za-z]+([-' ][A-Za-z]+)*$/.test(input.value.trim())) {
    error.textContent = "Name should contain only letters!!";
     error.style.backgroundColor = "red";
   
  }
  else
{
    error.textContent = ""; error.style.backgroundColor = "";
}
}


function checkMsg(){
const input = document.getElementById("message");
const error = document.getElementById("error-msg");


  if (input.value.trim() === "") {
 error.textContent = "Field is empty!!";
  error.style.backgroundColor = "red";
  } 
  else
{
    error.textContent = "";
     error.style.backgroundColor = "";
}
}

function checkEmail(){
const input = document.getElementById("email");
const error = document.getElementById("error-email");


  if (input.value.trim() === "") {
    error.textContent = "Field is empty!!";
     error.style.backgroundColor = "red";
  } 
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
     error.textContent = "This is not a valid email id!!";
   error.style.backgroundColor = "red";
  }
  else
{
    error.textContent = ""; error.style.backgroundColor = "";
}
}

function checkSubject(){
const input = document.getElementById("subject");
const error = document.getElementById("error-subject");


  if (input.value.trim() === "") {
     error.textContent = "Field is empty!!";
      error.style.backgroundColor = "red";
  } 
  else
{
    error.textContent = ""; error.style.backgroundColor = "";
}
}