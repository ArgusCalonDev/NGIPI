// DOM
const cardList = document.getElementById('cardList');

// input
const goalInput = document.getElementById('goalInput');
const desireInput = document.getElementById('desireInput');
const moneyInput = document.getElementById('moneyInput');

const add = document.getElementById('addBtn');


function addCard() {;

    let card = `
    <div class="card">
      <h3>${goalInput.value}</h3>

      <p>Keinginan: ${desireInput.value}%</p>
      <p>Investasi: ${moneyInput.value}</p>

      <div class="progress-bar">
        <div class="progress" style="width:${desireInput.value}%"></div>
      </div>
    </div>
    `;

    cardList.insertAdjacentHTML("beforeend", card);
    
    
    goalInput.value = "";
    desireInput.value = "";
    moneyInput.value = "";
}


// event
add.addEventListener('click', addCard);