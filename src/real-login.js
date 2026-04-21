const username = document.getElementById('username');
const submit = document.getElementById('submit');
const output = document.getElementById('output');

let count = 0;
submit.addEventListener('click', function() {
    count++;

    if (count === 5) {
        output.textContent = '5 kali membuang waktu...';
    } else if (count === 10) {
        output.textContent = '10 kali membuang waktu...';
    } else if (count >= 15) {
        output.textContent = 'Rekor membuang waktu';
    }
});