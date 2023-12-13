let btnSignIn = document.querySelector('#btnSignIn');

function signIn(event) {
    event.preventDefault();

    let loginEmail = document.querySelector('#email1').value;
    let password1 = document.querySelector('#password1').value;

    let obj = {
        'email1': loginEmail,
        'password1': password1  
    };

    console.log(obj);

    let items = JSON.parse(localStorage.getItem('userData'));
    let isCredentialsCorrect = false;

    for (let i = 0; i < items.length; i++) {
        if (items[i].email1 === loginEmail && items[i].password1 === password1) {
            isCredentialsCorrect = true;
            break; // Exit the loop when login is successful
        }
    }

    if (isCredentialsCorrect) {
        console.log('You are logged in');
    } else {
        console.log('Go to the sign-up page');
    }
}

btnSignIn.addEventListener('click', signIn);
