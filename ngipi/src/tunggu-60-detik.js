const output = document.getElementById('output');
const suara = new Audio('/minecraft-xp-sfx.mp3');

function putarSuara() {
    suara.play();
}

setTimeout(() => {
    output.textContent = 'Selamat.. kamu sabar';
    putarSuara();
}, 60000);