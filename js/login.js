document.getElementById('btn-submit').addEventListener('click', function(){

    // getting the email
    const emailField = document.getElementById('user-email');
    const inputEmail = emailField.value;

    // getting the email
    const passField = document.getElementById('user-password');
    const inputPass = passField.value;

    if(inputEmail == 'tr@gmail.com' && inputPass == '123456'){
        window.location.href = 'bank.html'
    }

    else{
        alert('Invalid login credential!\nPlease try again')
    }
})