const createButton = document.getElementById("createButton");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordMessage = document.querySelectorAll("span");


function addErrorClassToInput() {
    password.classList.add('errorMatch');
    confirmPassword.classList.add('errorMatch');
}

function removeErrorClassToInput() {
    password.classList.remove('errorMatch');
    confirmPassword.classList.remove('errorMatch');
}

function addErrorClass() {
    Array.from(passwordMessage).forEach((message) => message.classList.add('error'));
}

function removeErrorClass() {
    Array.from(passwordMessage).forEach((message) => message.classList.remove('error'));
}

password.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        addErrorClass();
        addErrorClassToInput();
    }
    else if (password.value === confirmPassword.value) {
        removeErrorClass();
        removeErrorClassToInput()
    }
})

confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        addErrorClass();
        addErrorClassToInput();
    }
    else if (password.value === confirmPassword.value) {
        removeErrorClass();
        removeErrorClassToInput()
    }
})
