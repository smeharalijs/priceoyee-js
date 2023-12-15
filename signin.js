
//  let btnSignIn = document.querySelector('#btnSignIn')


//  function signIn(event) {
//      event.preventDefault();


//      let loginEmail = document.querySelector('#email1').value
//      let password1 = document.querySelector('#password1').value

    //  let obj = {

    //      'email1': loginEmail,
    //      'password1': password1

    //  }
    //  console.log(obj);

//     let items = JSON.parse(localStorage.getItem('userData')) || [];
//     for (let i =0 ; i< items.length ; i++) {
   
//     if(items[i];loginEmail === loginEmail && items[i].password1 === password1){
   
//         console.log('You are login');
//         break;
   
//     }else{
//     console.log('Go TO sign Up Page');
//     break;
   
//     }
//     }
//  }

//  btnSignIn.addEventListener('click', signIn);

     

// let btnSignIn = document.querySelector('#btnSignIn');

// function signIn(event) {
//     event.preventDefault();

//     let loginEmail = document.querySelector('#email1').value;
//     let password1 = document.querySelector('#password1').value;

//     let obj = {
//         'email1': loginEmail,
//         'password1': password1 
//     };

//     console.log(obj);

//     let items = JSON.parse(localStorage.getItem('userData'));

//     for (let i = 0; i < items.length; i++) {
//         if (items[i].email1 === loginEmail && items[i].password1 === password1) {
//             console.log('You are logged in');
//             return; // Exit the function when login is successful
//         }else{

//             console.log('Go to the sign-up page');
//             break; //
//         }
      
//     }

// }

// btnSignIn.addEventListener('click', signIn);







let btnSignIn = document.querySelector('#btnSignIn');
let data = localStorage.getItem('userData');
let items = JSON.parse(data)

let loginEmail = document.querySelector('#email1');
let password1 = document.querySelector('#password1');
function signIn(event) {
event.preventDefault();
let isCredentialsCorrect = false;

for (let i = 0; i < items.length; i++) {
// console.log(items[i]);
if (items[i].email === loginEmail.value && items[i].password === password1.value) {
console.log('credientals match');
isCredentialsCorrect = true;
break
}
}

if (isCredentialsCorrect) {

console.log('You are logged in');
window.location = "index.html"

} else {
console.log('Your email address is incorrect');
console.log('Go to the sign-up page');
Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Incorrect Email or Password. Please try again.",
    footer: '<a href="./signup.html">Sign up here</a>'
  });
}
}

btnSignIn.addEventListener('click', signIn);







