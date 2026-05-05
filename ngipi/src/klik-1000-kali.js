const btn = document.getElementById('btn');
const countText = document.getElementById('count');
const output = document.getElementById('output');

let count = 0;

btn.addEventListener('click', function() {
    count++;

    countText.textContent = count + 'x';

    if (count === 1000) {
        output.textContent = 'Kamu butuh kegiatan lain.';
        return;
    }
});