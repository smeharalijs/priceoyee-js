
let btn = document.querySelector('#btn');   
let arr = []



btn.addEventListener('click',(event)=>{

    event.preventDefault(); 
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    arr.push(email.value);
arr.push(password.  value);

localStorage.setItem('userData', JSON.stringify(arr));
window.location = 'signin.html'


console.log(arr);

}   )