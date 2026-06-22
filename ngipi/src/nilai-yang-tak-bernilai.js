const nilai = document.getElementById('nilai');

function generatePersentase() {
    const persentase = Math.floor(Math.random() * 101);
    nilai.textContent = `${persentase} %`;
    setTimeout(generatePersentase, 60000);
}

generatePersentase();