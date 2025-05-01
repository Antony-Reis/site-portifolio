// 1. Referências aos cards
const cardHIV  = document.getElementById('hiv-card');
const cardSite = document.getElementById('site-card');

// 2. Referências aos modais
const modalHIV  = document.getElementById('hiv-text');
const modalSite = document.getElementById('site_text');

// 3. Abrir modais ao clicar nos cards
cardHIV.addEventListener('click', () => {
  modalHIV.style.display = 'inline-flex';
});
cardSite.addEventListener('click', () => {
  modalSite.style.display = 'inline-flex';
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