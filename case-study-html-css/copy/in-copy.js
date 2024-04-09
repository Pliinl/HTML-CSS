// const container = getElementById('container');
// const registerBtn = getElementById('register');
// const loginBtn = getElementById('login');

// registerBtn.addEventListener('clisk', () => {
//     container.classList.add('actice');
// });

// loginBtn.addEventListener('clisk', () => {
//     container.classList.remove('actice');
// });
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
