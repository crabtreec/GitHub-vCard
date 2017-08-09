const body = document.querySelector('body')
const url = 'https://api.github.com/users/crabtreec';
let vCard = [];

function recieve(data) {
  return data;
}

function transfer(data) {
  return data.json();
}

function makevCard(data) {
    vCard = data;
  return vCard;
}

//====================================//

function makeTitle(data) {
  const div = document.createElement('div');
  div.className = "title";
  div.innerHTML = `<h1>${vCard.name}</h1>`;

    body.appendChild(div);
    return vCard;
}
