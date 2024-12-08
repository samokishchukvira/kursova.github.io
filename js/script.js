AOS.init();

if (window.innerWidth > 350) {  
    AOS.init({
      disable: false,  
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false, 
      debounceDelay: 50, 
      throttleDelay: 99, 
      offset: 120, 
      delay: 5, 
      duration: 400, 
      easing: 'ease',
      once: false, 
      mirror: false, 
      anchorPlacement: 'top-bottom'
    });
  } else {
    AOS.init({
      disable: true,  
    });
  }

document.addEventListener('DOMContentLoaded', () => {
    fetch('json/contact.json')
    .then((response) => response.json())
    .then((data) => {
        const contactSection = document.querySelector('.contact-form-section');
        if (!contactSection) {
            console.error('Contact section not found');
            return;
        }
        contactSection.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.description}</p>
            <form>
                ${data.fields.map((field) => `
                    <div>
                        <label>${field.label}</label>
                        <input type="${field.type}" placeholder="${field.placeholder}">
                    </div>
                `).join('')}
                <textarea placeholder="${data.message.placeholder}"></textarea>
                <button>${data.button}</button>
            </form>
        `;
    })
    .catch((error) => console.error('Error loading data:', error));
    
    fetch('json/video.json')
      .then((response) => response.json())
      .then((data) => {
        const videoSection = document.querySelector('.video-section');
        videoSection.innerHTML = `
          <a href="${data.link}" target="_blank">
            <div class="play-button" data-aos="${data.animation.effect}" data-aos-duration="${data.animation.duration}"></div>
          </a>
        `;
      })
      .catch((error) => console.error('Error loading video data:', error));
});

const nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if(nav.classList.contains("openSearch")){
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { 
      nav.classList.add("scrolled");
  } else {
      nav.classList.remove("scrolled");
  }
});

const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index<animItems.length; index++) {
            const animItem =animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.animHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active')
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect();
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

const arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        arrowUp.classList.add('visible'); 
    } else {
        arrowUp.classList.remove('visible'); 
    }
});

arrowUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
});

  const modal = document.getElementById("modal");
  const openModalBtn = document.querySelector("[data-target='#modal']");
  const closeModalBtn = document.querySelector(".close");

  openModalBtn.addEventListener("click", () => {
      modal.style.display = "flex"; 
  });

  closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none"; 
  });

  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
