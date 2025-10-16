
function openBookingPopup() {
    const popup = document.getElementById('bookingPopup');
    if (popup) popup.style.display = 'flex';
}

function closeBookingPopup() {
    const popup = document.getElementById('bookingPopup');
    if (popup) popup.style.display = 'none';
}


window.addEventListener('DOMContentLoaded', () => {


    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e){
            e.preventDefault(); // зупиняємо перезавантаження
            closeBookingPopup();

            const msg = document.getElementById('successMsg');
            if (msg) {
                msg.style.display = 'block';
                setTimeout(() => { msg.style.display = 'none'; }, 3000);
            }
        });
    }

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');

    const minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    const checkIn = document.querySelector('input[placeholder="Check-in"]');
    const checkOut = document.querySelector('input[placeholder="Check-out"]');

    if (checkIn) checkIn.min = minDateTime;
    if (checkOut) checkOut.min = minDateTime;
});


// Форма відправлення повідомлення

window.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const msg = document.getElementById('contactSuccessMsg');

    if (contactForm && msg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // зупиняємо перезавантаження
            msg.style.display = 'block'; // показуємо повідомлення
            contactForm.reset(); 
            setTimeout(() => { msg.style.display = 'none'; }, 3000); 
        });
    }
});
