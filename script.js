
// ===== Sidebar Menu Toggle =====
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Close sidebar when clicking on a sidebar link
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// ===== Generate 50 Sample Products =====
const productsGrid = document.getElementById('products-grid');

if (productsGrid) {
    const categories = [
        'استراتيجيات تداول',
        'دورات تدريبية',
        'كتب إلكترونية',
        'أدوات تحليل',
        'قوالب احترافية'
    ];

    const productNames = [
        'استراتيجية المليون',
        'كورس التداول المتقدم',
        'دليل التحليل الفني',
        'مؤشرات التداول الذكية',
        'قوالب المتاجر الإلكترونية',
        'استراتيجية العملات الرقمية',
        'كورس الفوركس الشامل',
        'كتاب أسرار التداول الناجح',
        'أداة تحليل الأسهم',
        'قوالب المواقع التعليمية',
        'استراتيجية السكالبينج',
        'كورس التحليل الأساسي',
        'دليل إدارة المخاطر',
        'مؤشر الزخم الذكي',
        'قوالب المدونات الاحترافية',
        'استراتيجية التداول الآلي',
        'كورس التداول بالذكاء الاصطناعي',
        'كتاب التداول النفسي',
        'أداة تحديد الاتجاهات',
        'قوالب المتاجر الرقمية',
        'استراتيجية الباوند دولار',
        'كورس تداول الذهب',
        'دليل التداول اليومي',
        'مؤشر القوة النسبية',
        'قوالب الصفحات المقصودة',
        'استراتيجية اليورو دولار',
        'كورس التداول بالخيارات',
        'كتاب إدارة المحافظ',
        'أداة تحليل الزوج',
        'قوالب المواقع التجارية',
        'استراتيجية التداول بالأخبار',
        'كورس التداول بالمؤشرات',
        'دليل التداول بالرافعة',
        'مؤشر المتوسطات المتحركة',
        'قوالب المواقع الشخصية',
        'استراتيجية التداول بالفجوات',
        'كورس التداول بالأنماط',
        'كتاب التداول بالدعم والمقاومة',
        'أداة تحليل الحجم',
        'قوالب المواقع الإخبارية',
        'استراتيجية التداول بالترند',
        'كورس التداول بالفيبوناتشي',
        'دليل التداول بالموجات',
        'مؤشر MACD المتقدم',
        'قوالب المواقع التفاعلية',
        'استراتيجية التداول بالقنوات',
        'كورس التداول بالزمن',
        'كتاب التداول بالسعر',
        'أداة تحليل التقلبات',
        'قوالب المواقع متعددة اللغات'
    ];

    const descriptions = [
        'أقوى استراتيجية تداول في الشرق الأوسط',
        'دورة شاملة لتعلم التداول من الأساسيات حتى الاحتراف',
        'دليل شامل لفهم وتطبيق التحليل الفني',
        'مجموعة من المؤشرات الذكية لتحسين تداولاتك',
        'قوالب احترافية لمتاجرك الإلكترونية',
        'استراتيجية مثبتة لتداول العملات الرقمية',
        'كورس متكامل لتعلم تداول الفوركس',
        'كتاب شامل يشرح أسرار التداول الناجح',
        'أداة متقدمة لتحليل الأسهم بدقة',
        'قوالب احترافية للمواقع التعليمية',
        'استراتيجية فعالة للتداول السريع',
        'كورس شامل للتحليل الأساسي للأسواق',
        'دليل عملي لإدارة المخاطر في التداول',
        'مؤشر ذكي لقياس الزخم في السوق',
        'قوالب أنيقة للمدونات الاحترافية',
        'استراتيجية متقدمة للتداول الآلي',
        'كورس حديث عن التداول بالذكاء الاصطناعي',
        'كتاب يشرح الجانب النفسي للتداول',
        'أداة دقيقة لتحديد اتجاهات السوق',
        'قوالب احترافية للمتاجر الرقمية',
        'استراتيجية متخصصة لتداول الباوند دولار',
        'كورس شامل لتداول الذهب',
        'دليل عملي للتداول اليومي',
        'مؤشر متقدم للقوة النسبية',
        'قوالب فعالة للصفحات المقصودة',
        'استراتيجية ناجحة لتداول اليورو دولار',
        'كورس متقدم للتداول بالخيارات',
        'كتاب شامل عن إدارة المحافظ الاستثمارية',
        'أداة متخصصة لتحليل أزواج العملات',
        'قوالب احترافية للمواقع التجارية',
        'استراتيجية فعالة للتداول بالأخبار',
        'كورس شامل للتداول بالمؤشرات الفنية',
        'دليل عملي للتداول بالرافعة المالية',
        'مؤشر متقدم للمتوسطات المتحركة',
        'قوالب أنيقة للمواقع الشخصية',
        'استراتيجية ناجحة للتداول بالفجوات السعرية',
        'كورس شامل للتداول بالأنماط السعرية',
        'كتاب يشرح التداول بالدعم والمقاومة',
        'أداة متقدمة لتحليل حجم التداول',
        'قوالب احترافية للمواقع الإخبارية',
        'استراتيجية فعالة للتداول بالترند',
        'كورس شامل للتداول بفيبوناتشي',
        'دليل عملي للتداول بنظرية الموجات',
        'مؤشر متقدم لـ MACD',
        'قوالب تفاعلية للمواقع الحديثة',
        'استراتيجية ناجحة للتداول بالقنوات السعرية',
        'كورس شامل للتداول بالتحليل الزمني',
        'كتاب يشرح التداول بأسعار العمل',
        'أداة متقدمة لتحليل تقلبات السوق',
        'قوالب احترافية للمواقع متعددة اللغات'
    ];

    const prices = [
        250, 150, 75, 100, 120, 200, 180, 90, 110, 130,
        220, 160, 85, 95, 115, 210, 190, 80, 105, 125,
        230, 170, 88, 98, 118, 215, 195, 82, 108, 128,
        240, 175, 92, 102, 122, 225, 185, 87, 97, 117,
        235, 165, 93, 103, 123, 220, 180, 89, 99, 119
    ];

    const ratings = [
        5.0, 4.8, 4.9, 4.7, 4.8, 5.0, 4.9, 4.8, 4.7, 4.9,
        5.0, 4.8, 4.9, 4.7, 4.8, 5.0, 4.9, 4.8, 4.7, 4.9,
        5.0, 4.8, 4.9, 4.7, 4.8, 5.0, 4.9, 4.8, 4.7, 4.9,
        5.0, 4.8, 4.9, 4.7, 4.8, 5.0, 4.9, 4.8, 4.7, 4.9,
        5.0, 4.8, 4.9, 4.7, 4.8, 5.0, 4.9, 4.8, 4.7, 4.9
    ];

    const images = [
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600',
        'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600',
        'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600',
        'https://images.unsplash.com/photo-1526304640152-d4619684e484?w=600',
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600',
        'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600'
    ];

    // Generate 50 products
    for (let i = 0; i < 50; i++) {
        const categoryIndex = Math.floor(i / 10) % categories.length;
        const imageIndex = i % images.length;

        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-image">
                <a href="checkout.html" class="product-link">
                    <img src="${images[imageIndex]}" alt="${productNames[i]}">
                </a>
                <div class="product-overlay">
                    <a href="checkout.html" class="btn btn-buy"><i class="fas fa-cart-shopping"></i> شراء</a>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${categories[categoryIndex]}</span>
                <h3>${productNames[i]}</h3>
                <p class="product-description">${descriptions[i]}</p>
                <div class="product-rating">
                    ${generateStars(ratings[i])}
                    <span>(${ratings[i]})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${prices[i]}</span>
                </div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    }
}

// Helper function to generate star ratings
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
});

// ===== Buy Button Animation =====
const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// ===== Contact Form Handling =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Show success message (you can replace this with your form submission logic)
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.innerHTML = '<i class="fas fa-check-circle"></i> شكراً لتواصلك معنا! سنرد عليك قريباً';
        document.body.appendChild(notification);

        // Reset form
        this.reset();

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    });
}

// ===== Newsletter Form Handling =====
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = this.querySelector('input[type="email"]').value;

        // Show success message
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.innerHTML = '<i class="fas fa-check-circle"></i> شكراً لاشتراكك في النشرة البريدية!';
        document.body.appendChild(notification);

        // Reset form
        this.reset();

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    });
}

// ===== Scroll to Top Button =====
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Add Notification Styles =====
const style = document.createElement('style');
style.textContent = `
    .success-notification {
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        animation: slideDown 0.3s ease;
        transition: opacity 0.3s ease;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .scroll-to-top.active {
        opacity: 1;
        visibility: visible;
    }

    .scroll-to-top:hover {
        background: var(--primary-dark);
        transform: translateY(-5px);
    }
`;
document.head.appendChild(style);

// ===== Product Card Hover Effect Enhancement =====
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.product-image img').style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', function() {
        this.querySelector('.product-image img').style.transform = 'scale(1)';
    });
});

// ===== Header Background on Scroll =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});
