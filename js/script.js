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

