const btn = document.getElementById('btn-random');
const output = document.getElementById('output');

let count = 0;

output.style.display = 'none';

btn.addEventListener('click', function() {
    count++;
    if (count === 10) {
        output.textContent = 'WAH BENER BENER GABUT NIH ORANG';
    } else if (count === 20) {
        output.textContent = 'Perihal apa yang membuatmu melakukan ini?';
    } else if (count === 50) {
        output.textContent = 'TAMAT';
        return;
    }
    output.style.display = 'block';
});