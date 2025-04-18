window.addEventListener('load', function () {
    const startAnime = document.getElementById('start-anime');
    const scrollWrapper = document.querySelector('.scroll-wrapper');
    const mainContent = document.getElementById('main-content');
  
    setTimeout(function () {
      startAnime.classList.add('fade');
      setTimeout(function () {
        startAnime.style.display = 'none';
        scrollWrapper.style.display = 'block';
        mainContent.style.display = 'block';
        scrollWrapper.classList.add('show');
        mainContent.classList.add('show');
      }, 800);
    }, 3000);
  });
  
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeEls.forEach((el) => observer.observe(el));
  
