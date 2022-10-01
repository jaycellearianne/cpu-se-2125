const loadButton = () => {

    const buttonLogin = document.querySelector('#login');


    buttonLogin.onclick = () => {

        const input_Username = document.querySelector('#Username').value;
        const input_password = document.querySelector('#Password').value;


        if (!input_Username) {
            alert("Input your email");
            return;
        }
        else if (input_Username.length < 3) {
            alert("Username must not be less than 3");
            return;

        }

        if (!input_password) {
            alert("Input your password");
        }
        else if (input_password.length < 3) {
            alert("Password must not be less than 3")
        }
        else {
            window.location.assign('main.html')
        }
    }
}

window.onload = loadButton;

