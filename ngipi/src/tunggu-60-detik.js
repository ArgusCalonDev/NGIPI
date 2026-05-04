const output = document.getElementById('output');

setTimeout((timeout) => {
    output.textContent = 'Selamat.. kamu sabar';
    console.log(timeout);
}, 60000);