const toggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show'); // shows/hides the menu
});


// WhatsApp form
function sendWhatsApp(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    const text = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/254706913131?text=${text}`, '_blank');
}

// Back to Top
const backBtn = document.querySelector('.back-to-top');
backBtn.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});
