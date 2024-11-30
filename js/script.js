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
  

const menuIcon = document.querySelector('.menu-icon');
const navSelectors = ['.nav1', '.nav2', '.nav3', '.nav4']; 

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active'); 
    navSelectors.forEach(selector => {
        const nav = document.querySelector(selector);
        if (nav) {
            nav.classList.toggle('open'); 
        }
    });
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
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    if (!localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "flex";
    }
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true"); 
        banner.style.display = "none"; 
    });
});

const nav1 = document.querySelector('.nav1');

function checkScroll() {
    if (window.scrollY > 50) {  
        nav1.classList.add('scrolled');
    } else {
        nav1.classList.remove('scrolled'); 
    }
}
window.addEventListener('scroll', checkScroll);


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

// function checkLink(link) {
//     fetch(link, { method: 'HEAD' })
//       .then(response => {
//         if (!response.ok) {
//           window.location.href = '404.html'; 
//         } else {
//           window.location.href = link;
//         }
//       })
//       .catch(() => {
//         window.location.href = '404.html';
//       });
//   }

//   document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function(event) {
//       event.preventDefault(); 
//       checkLink(link.href);  
//     });
//   });

document.addEventListener('DOMContentLoaded', () => {
    fetch('json/classes.json')
      .then(response => response.json())
      .then(classes => {
        const classesSection = document.querySelector('.classes-grid');
        classes.forEach(classItem => {
          const classDiv = document.createElement('div');
          classDiv.classList.add('class-item');
          classDiv.classList.add(classItem.icon);  
  
          const classInfo = `
            <div class="class-info">
              <h3>${classItem.title}</h3>
              <p>${classItem.description}</p>
              <span><i class="${classItem.icon}"></i></span>
            </div>
          `;
          classDiv.innerHTML = classInfo;
          classesSection.appendChild(classDiv);
        });
      })
      .catch(error => console.error('Error loading classes:', error));
  
    fetch('json/trainers.json')
      .then(response => response.json())
      .then(trainers => {
        const trainersSection = document.querySelector('.trainer-list');
        trainers.forEach(trainer => {
          const trainerDiv = document.createElement('div');
          trainerDiv.classList.add('swiper-slide');
  
          const trainerContent = `
            <div class="trainer">
              <div class="trainer-photo" style="background-image: url('${trainer.image}')"></div>
              <h3>${trainer.name}</h3>
              <p>${trainer.role}</p>
              <div class="social-icons">
                <span class="icon1 facebook"><a href="${trainer.social.facebook}" target="_blank">Facebook</a></span>
                <span class="icon1 twitter"><a href="${trainer.social.twitter}" target="_blank">Twitter</a></span>
                <span class="icon1 instagram"><a href="${trainer.social.instagram}" target="_blank">Instagram</a></span>
              </div>
            </div>
          `;
          trainerDiv.innerHTML = trainerContent;
          trainersSection.appendChild(trainerDiv);
        });
      })
      .catch(error => console.error('Error loading trainers:', error));
  });
  
