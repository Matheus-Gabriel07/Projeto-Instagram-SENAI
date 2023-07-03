//Programa teste

// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha) {
    // Verifica se o usuário já está cadastrado
    if (localStorage.getItem(nome)) {
      console.log('O usuário já está cadastrado!');
      return;
    }
  
    // Cria um objeto com os dados do usuário
    const usuario = {
      nome: nome,
      senha: senha
    };
  
    // Armazena os dados do usuário no localStorage
    localStorage.setItem(nome, JSON.stringify(usuario));
  
    console.log('Usuário cadastrado com sucesso!');
    enviarMensagem('cadastroConcluido');
  }
  
  // Função para fazer login
  function fazerLogin(nome, senha) {
    // Obtém os dados do usuário com base no nome de usuário
    const usuario = localStorage.getItem(nome);
  
    // Verifica se o usuário existe e se a senha está correta
    if (usuario) {
      const usuarioObj = JSON.parse(usuario);
  
      if (usuarioObj.senha === senha) {
        console.log('Login bem-sucedido!');
        enviarMensagem('loginConcluido');
        return;
      }
    }
  
    console.log('Nome de usuário ou senha incorretos!');
  }
  
  // Função para enviar mensagem para a outra janela
  function enviarMensagem(mensagem) {
    window.opener.postMessage(mensagem, '*');
  }
  
  // Captura o formulário de cadastro
  const cadastroForm = document.getElementById('cadastroForm');
  
  // Adiciona um evento de submit ao formulário de cadastro
  cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    // Chama a função cadastrarUsuario com os valores coletados
    cadastrarUsuario(nome, email, senha);
  });
  