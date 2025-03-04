//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const adicionarAmigo = () => {
  const input = document.querySelector('.input-name');
  const amigos = document.querySelector('.name-list');
  const amigo = input.value.trim()

  if (amigo) {
    const amigoItem = document.createElement('li');
    amigoItem.textContent = amigo;
    amigos.appendChild(amigoItem);
    input.value = '';
  } else {
    alert('Por favor, insira um nome válido!');
  }
}
const sortearAmigo = () => {
  const amigos = document.querySelectorAll('.name-list li');
  if (amigos.length === 0) {
    alert('Nenhum amigo foi adicionado.');
    return;
  }
  const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)].textContent;
  const resultado = document.querySelector('.result-list');
  const amigoSecretoElement = document.createElement('li');
  
  amigoSecretoElement.textContent = `O amigo secreto escolhido foi: ${amigoSecreto}`;
  amigos.forEach(amigo => amigo.remove());
  resultado.innerHTML = '';
  resultado.appendChild(amigoSecretoElement);
}