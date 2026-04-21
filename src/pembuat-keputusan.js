const input = document.getElementById('input');
const submit = document.getElementById('btn');
const output = document.getElementById('output');

output.style.display = 'none';

submit.addEventListener('click', function() {
    const value = input.value.trim();

    if (value === '') return;

    output.textContent = 'Coba tanya AI..';
    output.style.display = 'block';
});