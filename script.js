function clickedMe() {
  console.log('hello!');
  document.getElementById('dikshi1').innerHTML = '';
  var card = document.getElementById('dikshi1').innerHTML;

  card = document.createElement('div');
  card.className = 'card shadow cursor-pointer';

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  let title = document.createElement('h5');
  title.innerText = 'ff';
  title.className = 'card-title';

  let color = document.createElement('div');
  color.innerText = 'try';
  color.className = 'black';

  cardBody.appendChild(title);
  cardBody.appendChild(color);
  card.appendChild(cardBody);
  dikshi1.appendChild(card);
  document.getElementById('img1').src =
    'https://bootstrapmade.com/demo/templates/Maxim/assets/img/features-1.png';
}
