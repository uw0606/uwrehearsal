'use strict';

// タブメニュー
{
  const menuItems = document.querySelectorAll('.tab li a');
  const contents = document.querySelectorAll('.content');
  const homeclick = document.getElementById('homeclick');
  const Tclick = document.getElementById('Tclick');
  const Kclick = document.getElementById('Kclick');
  const Aclick = document.getElementById('Aclick');
  const Nclick = document.getElementById('Nclick');
  const SEclick= document.getElementById('SEclick');
  const Sclick = document.getElementById('Sclick');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
    homeclick.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwrehearsal/"
    });
    Tclick.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwrehearsal/T/T.html"
   });
    Kclick.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwrehearsal/K/K.html"
    });
    Aclick.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwrehearsal/A/A.html"
    });
    Nclick.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwrehearsal/N/N.html"
    });
    SEclick.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwrehearsal/SE/SE.html"
    });
    Sclick.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwrehearsal/S/S.html"
    });
  });
}

// アニメーション
{
  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
    })

  }


  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
}