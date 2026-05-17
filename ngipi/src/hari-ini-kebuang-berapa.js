const input = document.getElementById('input');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
    const value = Number(input.value);

    if (value === 0) {
        output.textContent = 'Ideal';
    } else if (value <= 10) {
        output.textContent = 'Masih wajar';
    } else if (value <= 30) {
        output.textContent = 'Level 50';
    } else if (value <= 50) {
        output.textContent = 'Level 100';
    } else if (value <= 75) {
        output.textContent = 'Tydack wajar, level 666';
    } else if (value <= 99) {
        output.textContent = 'Orang gyla, level 999';
    } else if (value === 100) {
        output.textContent = 'REKOR BUANG WAKTU SEDUNIA!!!';
    } else if (value > 100) {
        output.textContent = 'Oke ini gak valid.';
    } else if (typeof input.value !== 'number') {
        output.textContent = 'PERINGATAN: WAJIB masukkan angka';
    }
});