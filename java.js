
//* likes micro animatie *//



const likeButtons = document.querySelectorAll('.like-button'); /////*  selecteer elementen *///////
const aantalLikes = document.getElementById('aantalLikes'); 

var teller = 0; ////* houdt bij hoe vaak er is geklikt

likeButtons.forEach((hartje) => {    ////* foreach dus voor elk hartje in de list likeButtons */////
    hartje.addEventListener("click", function() {
        if (hartje.classList.contains('ik_ben_aangeklikt')) {
            hartje.classList.remove('ik_ben_aangeklikt');
            teller--; //* verwijder de class als hij al is aangeklikt en verlaag de teller
            hartje.src = "images/hartje_leeg.png";
        } else {
            hartje.classList.add('ik_ben_aangeklikt');
            teller++; //* als hartje niet is aangeklikt, dan gaat de teller omhoog
            hartje.src = "images/hartje_vol.png";
        }
        
        aantalLikes.textContent = teller; //*textcontent van het Id aantalLikes wordt het aantal van de teller
    });
});



//*hamburger menu



document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const closeButton = document.getElementById('closeButton');
  
    hamburgerIcon.addEventListener('click', function () {
      hamburgerMenu.classList.toggle('open');
    });
  
    closeButton.addEventListener('click', function () {
      hamburgerMenu.classList.remove('open'); // Verwijder de 'open'-class om het menu te sluiten
    });
  });









//* gegenereerd met meerdere pogingen van chatGPT: beschreven in bronnenlijst *//

const sterrenbeeldenLink = document.querySelector('[data-submenu-trigger]');
const submenu = document.querySelector('header nav:nth-of-type(2)');

let isSterrenbeeldenLinkHovered = false;

sterrenbeeldenLink.addEventListener('mouseover', () => {
  isSterrenbeeldenLinkHovered = true;
  submenu.classList.add('show');
});

sterrenbeeldenLink.addEventListener('mouseout', () => {
  isSterrenbeeldenLinkHovered = false;
  setTimeout(() => {
    if (!isSterrenbeeldenLinkHovered) {
      submenu.classList.remove('show');
    }
  }, 2000); // Verberg het submenu na 2 seconden als de link niet wordt gehoverd
});

submenu.addEventListener('mouseover', () => {
  isSterrenbeeldenLinkHovered = true;
});

submenu.addEventListener('mouseout', () => {
  isSterrenbeeldenLinkHovered = false;
  setTimeout(() => {
    if (!isSterrenbeeldenLinkHovered) {
      submenu.classList.remove('show');
    }
  }, 2000);
});