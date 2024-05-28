let btnInfo = document.getElementById('btnInfo');
btnInfo.addEventListener('click', () => {
let popup = document.getElementById('popup');
popup.style.display = 'flex';

});

let btnCancelar = document.getElementById('btnCancelar');
btnCancelar.addEventListener('click',() => {
let popup = document.getElementById('popup');
popup.style.display = 'none';
});