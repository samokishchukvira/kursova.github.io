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

const descriptions = [
    "Porttitor eget nisl gravida lacus sed gravida volutpat. Est pellentesque quam felis nisi eu tincidunt id scelerisque non. Commodo leo gravida enim felis. Sapien vitae urna ut eget a ornare pellentesque. Eu non elit fermentum nam. Turpis tempor viverra amet pretium nunc ac posuere mattis in.",
    "Commodo leo gravida enim felis. Sapien vitae urna ut eget a ornare pellentesque. Eu non elit fermentum nam. Turpis tempor viverra amet pretium nunc ac posuere mattis in. Porttitor eget nisl gravida lacus sed gravida volutpat. Est pellentesque quam felis nisi eu tincidunt id scelerisque non.",
    "Eu non elit fermentum nam. Turpis tempor viverra amet pretium nunc ac posuere mattis in. Porttitor eget nisl gravida lacus sed gravida volutpat. Est pellentesque quam felis nisi eu tincidunt id scelerisque non. Commodo leo gravida enim felis. Sapien vitae urna ut eget a ornare pellentesque."
];

let currentIndex = 0; 

const descriptionText = document.getElementById('description-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateDescription() {
    descriptionText.textContent = descriptions[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + descriptions.length) % descriptions.length;
    updateDescription();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % descriptions.length; 
    updateDescription();
});

updateDescription();
