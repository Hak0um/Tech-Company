const SignUpButton = document.getElementById('signUp');
const SignInButton = document.getElementById('signIn');
const block = document.getElementById('block');

SignUpButton.addEventListener('click', () => {
    block.classList.add("right-panel-active");
});

SignInButton.addEventListener('click', () => {
    block.classList.remove("right-panel-active");
});
