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
      window.location.href = "index.html"
    });
    Tclick.addEventListener('click', () => {
      window.location.href = "index.html"
   });
    Kclick.addEventListener('click', () => {
      window.location.href = "index.html"
    });
    Aclick.addEventListener('click', () => {
      window.location.href = "index.html"
    });
    Nclick.addEventListener('click', () => {
      window.location.href = "index.html"
    });
    SEclick.addEventListener('click', () => {
      window.location.href = "index.html"
    });
    Sclick.addEventListener('click', () => {
      window.location.href = "index.html"
    });
  });
}
