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
    window.location.href = "K/K.html"
  });
  Aclick.addEventListener('click', () => {
    window.location.href = "A/A.html"
  });
  Nclick.addEventListener('click', () => {
    window.location.href = "N/N.html"
  });
  SEclick.addEventListener('click', () => {
    window.location.href = "SE/SE.html"
  });
  Sclick.addEventListener('click', () => {
    window.location.href = "S.html"
  });
  });
}


// サイトメニュー
{
  const instrument = document.getElementById('instrument');
  const clinic = document.getElementById('clinic');
  const map = document.getElementById('map');
  const camp = document.getElementById('camp');
    instrument.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwtools/"
   });
    clinic.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwclinic/"
   });
    map.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwmap/"
   });
    camp.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/nobutocamp/"
   });
}

// サイトメニューアニメーション

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });

  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
}