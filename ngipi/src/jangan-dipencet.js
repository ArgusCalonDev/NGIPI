const btn = document.getElementById('btn');
const output = document.getElementById('output');

let count = 0;

btn.addEventListener('click', function() {
    count++;

    if (count === 1) {
        output.textContent = 'DIBILANGIN JANGAN';
    } else if (count === 2) {
        output.textContent = 'WOI JANGAN';
    } else if (count === 3) {
        output.textContent = 'AAAAAAAAAAAA';
    } else if (count === 4) {
        output.textContent = 'SEKALI LAGI';
    } else if (count === 5) {
        output.textContent = 'KAU AKAN MENERIMA INI';
        window.open('https://youtu.be/T8IZA64Xq44?si=1hBE9m8z-Xqfa1Zu', '_blank');
    } else if (count === 6) {
        window.location.href = '/'
    }
});