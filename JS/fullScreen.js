// Seletor para todas as fotos do feed
const photos = document.querySelectorAll('.post .photo');

// Variável para controlar se uma foto em tela cheia está aberta
let isFullScreenOpen = false;

// Função para abrir a foto em tela cheia
function openFullScreen(photo) {
  // Verifica se já há uma foto em tela cheia aberta
  if (isFullScreenOpen) {
    return;
  }

  // Define a variável como true para indicar que uma foto em tela cheia está aberta
  isFullScreenOpen = true;

  // Cria o elemento de sobreposição
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Cria a foto em tela cheia

  // Gerando números aleatórios para curtidas e comentários
  const likes = Math.floor(Math.random() * 100);
  const comments = Math.floor(Math.random() * 20);

  const fullScreen = document.createElement('div');
  fullScreen.classList.add('full-screen');
  fullScreen.innerHTML = `
    <img src="${photo.src}" alt="Foto em tela cheia">
    <div class="likes"><i class="fi fi-sr-heart"></i>${likes}</div>
    <div class="comments"><i class="fi fi-sr-comment-alt"></i>${comments}</div>
  `;

  // Adiciona o elemento de sobreposição e a foto em tela cheia ao body
  document.body.appendChild(overlay);
  document.body.appendChild(fullScreen);

  // Adiciona o evento de clique ao elemento de sobreposição para fechar a tela cheia
  overlay.addEventListener('click', () => {
    // Remove o elemento de sobreposição e a foto em tela cheia
    overlay.remove();
    fullScreen.remove();

    // Define a variável como false para indicar que nenhuma foto em tela cheia está aberta
    isFullScreenOpen = false;
  });

  // Adiciona o evento de scroll para manter o elemento em tela cheia no centro da janela
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    fullScreen.style.top = `${scrollTop + window.innerHeight / 2}px`;
  });
}

// Adicione o evento de clique a todas as fotos do feed
photos.forEach(photo => {
  photo.addEventListener('click', () => {
    openFullScreen(photo);
  });
});
