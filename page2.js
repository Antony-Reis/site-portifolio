// Referências aos elementos HTML
var openModal_hiv = document.getElementById("hiv-card");



var modal = document.querySelector('.portifolio-texts');
var closeBtn = document.querySelector('.close');


// Quando o usuário clica no card, abre o modal
openModal_hiv.addEventListener('click', function () {
  document.getElementById("hiv-text").style.display = 'block'
  modal.style.display = 'flex';  // mostra o modal
});

// Quando o usuário clica no botão de fechar (X), fecha o modal
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';   // esconde o modal
});


