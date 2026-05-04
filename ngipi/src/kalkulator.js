const form = document.getElementById('form');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const output = document.getElementById('output');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    output.textContent = 'Gatau, coba tanya kalkulator yang asli';
});