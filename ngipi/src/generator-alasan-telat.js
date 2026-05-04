const btn = document.getElementById('btn');
const lists = document.getElementById('lists');

lists.style.display = 'none';

btn.addEventListener('click', function() {
    lists.style.display = 'block';
});