// 1. Lấy tên từ URL (?Ten=Bạn Quyền)
const urlParams = new URLSearchParams(window.location.search);
let guestName = urlParams.get('Ten') || urlParams.get('name');

if (guestName) {
    guestName = decodeURIComponent(guestName);
    document.getElementById('guest-name').innerText = guestName;
}



// 3. Xử lý Form RSVP (Demo)
const rsvpForm = document.getElementById('rsvp-form');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Cảm ơn bạn đã gửi xác nhận! Chúng mình rất mong chờ sự hiện diện của bạn.");
        rsvpForm.reset();
    });
}

// 4. Hiệu ứng mưa tim
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3s - 5s
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// 5. Xử lý hiệu ứng mở màn (Cổng chào)

const gate = document.getElementById('gate-container');
if (gate) {
    gate.addEventListener('click', () => {
        gate.classList.add('open');
    }, { once: true });
}




// 6. Hiệu ứng cuộn cho các phần tử
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Chọn các phần tử cần animate
const elements = document.querySelectorAll('.couple-info, .section-title, .section-sub-title, .intro-text, .event-cards, .gallery, .rsvp-form, footer');
elements.forEach(el => observer.observe(el));

// 7. Xử lý Popup Mừng cưới
const giftButton = document.querySelector('.btn-gift');
const giftPopup = document.getElementById('gift-popup');
const closePopupButton = document.querySelector('.close-popup');

if (giftButton && giftPopup && closePopupButton) {
    giftButton.addEventListener('click', () => {
        giftPopup.classList.add('active');
    });

    const closePopup = () => {
        giftPopup.classList.remove('active');
    };

    closePopupButton.addEventListener('click', closePopup);
    // Đóng khi nhấn vào nền mờ
    giftPopup.addEventListener('click', (e) => {
        if (e.target === giftPopup) {
            closePopup();
        }
    });
    
}
