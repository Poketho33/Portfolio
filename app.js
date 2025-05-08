document.addEventListener('DOMContentLoaded', function () {

    // hero circle - dark / light theme 
    const heroCirc = document.querySelector(".hero__circ");
  
    if (!heroCirc) return;
  
    let dark = 0;
  
    function toggleMenu() {
      heroCirc.classList.toggle('dark');
      dark = dark ? 0 : 1; 

      if (dark) {
        document.documentElement.style.setProperty('--light-bg', '#F6F6F6');
        document.documentElement.style.setProperty('--light-prim', '#5E60C3');
        document.documentElement.style.setProperty('--light-sec', '#ECEAFF');
      } else {
        document.documentElement.style.setProperty('--light-bg', '#FFFDE8');
        document.documentElement.style.setProperty('--light-prim', '#FFA088');
        document.documentElement.style.setProperty('--light-sec', '#FFE0C4');
      }
    }
  
    heroCirc.addEventListener('click', toggleMenu);
  });
  