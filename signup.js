// let btn = document.querySelector('#btn');
// let arr = []



// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
// btn.addEventListener('click', (event) => {
// event.preventDefault();
// let obj = {
// email: email.value,
// password: password.value
// }
// arr.push(obj);
// console.log(arr);
// localStorage.setItem('userData', JSON.stringify(arr));
// window.location = 'signin.html'

// })

let btn = document.querySelector('#btn');
let arr = []



let email = document.querySelector('#email');
let password = document.querySelector('#password');
btn.addEventListener('click', (event) => {
event.preventDefault();
let obj = {
email: email.value,
password: password.value
}
arr.push(obj);
console.log(arr);
localStorage.setItem('userData', JSON.stringify(arr));
// window.location = 'signin.html'
console.log("Account Created");
console.log("Go To Log In");

})