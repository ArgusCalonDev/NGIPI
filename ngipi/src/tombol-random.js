const btn = document.getElementById('btn-random');
const output = document.getElementById('output');

output.style.display = 'none';

btn.addEventListener('click', function() {
    output.style.display = 'block';
});