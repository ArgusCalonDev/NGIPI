const searchInput = document.getElementById('search');
const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');

output.style.display = 'none';

function search() {
    output.textContent = 'Gatau... coba tanya google';
    output.style.display = 'block';
}

searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        search();
    }
});

submitBtn.addEventListener('click', search);