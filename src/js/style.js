document.addEventListener('DOMContentLoaded', () => {
    // SOCIAL LINK
    const socialData = [
        {
            name: "Facebook",
            icon: "src/images/icons/fb-icon.png",
            account: "@yourfacebook",
            extra: "User: Trương Ngọc Dương",
            link: "https://facebook.com/yourprofile"
        },
        {
            name: "Discord",
            icon: "src/images/icons/discord-icon.png",
            account: "@yourdiscord",
            link: "#"
        },
        {
            name: "Telegram",
            icon: "src/images/icons/tele-icon.png",
            account: "@yourtelegram",
            link: "#"
        },
        {
            name: "TikTok",
            icon: "src/images/icons/douyin-icon.png",
            account: "@yourtiktok",
            link: "#"
        },
        {
            name: "Douyin",
            icon: "src/images/icons/douyin-icon.png",
            account: "@yourdouyin",
            link: "#"
        }
    ];

    const row = document.querySelector('#social-section .row');

    socialData.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = index === 0 ? "col-12" : "col-12 col-md-6";

        let innerHTML = `
            <a href="${item.link}" class="card-style social-item d-flex align-items-center p-3">
                <img src="${item.icon}" alt="${item.name}" class="social-icon me-3">
                <div class="d-flex justify-content-between flex-grow-1">
                    <div class="fw-bold">${item.account}</div>
                    ${item.extra ? `<small class="d-none d-md-block">${item.extra}</small>` : ''}
                </div>
            </a>
        `;

        col.innerHTML = innerHTML;
        row.appendChild(col);
    });

    // QR
    const qrData = [
        {
            name: "MB Bank",
            icon: "src/images/icons/mb-icon.png",
            qr: "src/images/qr/mb.png",
            account: "9704 1234 5678 9999"
        },
        {
            name: "MoMo",
            icon: "src/images/icons/momo-icon.png",
            qr: "src/images/qr/momo.png",
            account: "0123 456 789"
        },
        {
            name: "ACB",
            icon: "src/images/icons/acb-icon.png",
            qr: "src/images/qr/acb.png",
            account: "1234567890"
        }
    ];

    const qrSection = document.getElementById('qr-section');

    qrData.forEach(item => {
        const col = document.createElement('div');
        col.className = "col-12 col-md-6 col-lg-4 text-center";

        col.innerHTML = `
        <div class="card-style qr-item p-4 h-100">
            <img src="${item.qr}" alt="${item.name} QR" class="qr-img img-fluid rounded mb-3 d-none d-md-block">
            <div class="qr-content card-style d-flex align-items-center justify-content-center p-2">
                <img src="${item.icon}" alt="${item.name}" class="qr-icon me-2">
                <span class="fw-bold">${item.account}</span>
            </div>
            <img src="${item.qr}" alt="${item.name} QR" class="qr-img qr-img-mobile img-fluid rounded mt-3 d-md-none">
        </div>
    `;
        qrSection.appendChild(col);
    });

    document.querySelectorAll('.qr-item').forEach(item => {
        item.addEventListener('click', () => {
            const qrMobile = item.querySelector('.qr-img-mobile');
            if (qrMobile) {
                qrMobile.classList.toggle('show');
            }
        });
    });

})