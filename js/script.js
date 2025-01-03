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

document.addEventListener('DOMContentLoaded', () => {
   fetch('json/contact.json')
  .then((response) => response.json())
  .then((data) => {
    const contactSection = document.querySelector('.contact-form-section');

    if (!contactSection) {
      console.error('Contact section not found in the DOM');
      return;
    }

    contactSection.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      
      <form class="contact-form">
        <div class="form-row">
          ${data.fields.map((field) => `
            <div class="form-group">
              <label for="${field.id}">${field.label}</label>
              <input type="${field.type}" id="${field.id}" placeholder="${field.placeholder}">
            </div>
          `).join('')}
        </div>
        <div class="form-group">
          <label for="message">${data.message.label}</label>
          <textarea id="message" placeholder="${data.message.placeholder}"></textarea>
        </div>
        <button type="submit" class="submit-button" data-aos="fade-up" data-aos-duration="1000">${data.button}</button>
      </form>
    `;
  })
  .catch((error) => console.error('Error loading contact data:', error));

    
    fetch('json/video.json')
      .then((response) => response.json())
      .then((data) => {
        const videoSection = document.querySelector('.video-section');
        videoSection.innerHTML = `
          <a href="${data.link}" target="_blank">
            <div class="play-button"></div>
          </a>
        `;
      })
      .catch((error) => console.error('Error loading video data:', error));
});

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

  if (!localStorage.getItem('splashSeen')) {
    document.getElementById('splash-screen').style.display = 'flex';

    setTimeout(function () {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 7000); 
    
    localStorage.setItem('splashSeen', 'true');
} else {
    document.getElementById('main-content').style.display = 'block';
}
