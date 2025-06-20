// 1. Referências aos cards
const cardHIV  = document.getElementById('hiv-card');
const cardSite = document.getElementById('site-card');
const cardFlask = document.getElementById('flask-card');

// 2. Referências aos modais
const modalHIV  = document.getElementById('hiv-text');
const modalSite = document.getElementById('site_text');
const modalFlask = document.getElementById('flask-text');

// 3. Abrir modais ao clicar nos cards
cardHIV.addEventListener('click', () => {
  modalHIV.style.display = 'inline-flex';
});
cardSite.addEventListener('click', () => {
  modalSite.style.display = 'inline-flex';
});
cardFlask.addEventListener('click', () => {
  modalFlask.style.display = 'inline-flex';
});

// 4. Função para fechar um modal
function attachClose(modalEl) {
  const btn = modalEl.querySelector('.close');
  btn.addEventListener('click', () => {
    modalEl.style.display = 'none';
  });
}

// 5. Vincula o fechamento em cada modal
attachClose(modalHIV);
attachClose(modalSite);
attachClose(modalFlask);