
  // ページ読み込み後のアニメーション
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

  // スクロールでフェードイン
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach((el) => observer.observe(el));

  // ===== ギャラリー画像クリックで拡大表示（モーダル） =====
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const closeBtn = document.querySelector(".close");

    galleryItems.forEach(item => {
      item.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = item.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  
  
