document.addEventListener('DOMContentLoaded', function () {
  const heroCirc = document.querySelector(".hero__circ");
  const homeID = document.getElementById("home");
  const stars = document.querySelectorAll(".star");

  if (!heroCirc || !homeID || stars.length === 0) return;

  let dark = 0;

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function updateStarProperties(star) {
    star.style.top = `${getRandomNumber(0, window.innerHeight * 0.4)}px`;
    star.style.left = `${getRandomNumber(0.2 * window.innerWidth, window.innerWidth)}px`;
    star.style.animationDuration = `${getRandomNumber(2, 6)}s`;
    star.style.animationDelay = `${getRandomNumber(0, 5)}s`;
  }

  function activateStars() {
    stars.forEach(star => {
      updateStarProperties(star);
      star.classList.remove('active'); // Reset animation
      void star.offsetWidth;           // Force reflow
      star.classList.add('active');    // Start animation
    });
  }

  function deactivateStars() {
    stars.forEach(star => {
      star.classList.remove('active');
    });
  }

  stars.forEach(star => {
    star.addEventListener('animationend', () => {
      if (!dark) return;

      setTimeout(() => {
        star.classList.remove('active');
      }, 10);

      setTimeout(() => {
        updateStarProperties(star);
      }, 20);

      setTimeout(() => {
        star.classList.add('active');
      }, 40);
    });
  });

  function toggleMenu() {
    homeID.classList.toggle('dark');
    dark = dark ? 0 : 1;

    if (dark) {
      document.documentElement.style.setProperty('--light-bg', '#F6F6F6');
      document.documentElement.style.setProperty('--light-prim', '#5E60C3');
      document.documentElement.style.setProperty('--light-sec', '#ECEAFF');

      activateStars();
    } else {
      document.documentElement.style.setProperty('--light-bg', '#FFFDE8');
      document.documentElement.style.setProperty('--light-prim', '#FFA088');
      document.documentElement.style.setProperty('--light-sec', '#FFE0C4');

      deactivateStars();
    }
  }

  heroCirc.addEventListener('click', toggleMenu);
});
