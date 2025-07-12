// Обработчики для кнопок
document.getElementById('windows-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('instruction-modal').style.display = 'flex';
});

document.getElementById('android-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Здесь должна быть реальная ссылка на скачивание
    window.location.href = 'downloads/vpn-android.apk';
});

// Закрытие модального окна
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
        document.getElementById('instruction-modal').style.display = 'none';
    });
});

// Анимация тумана при наведении
const buttons = document.querySelectorAll('.btn');
const backgroundEffect = document.querySelector('.background-effect');

buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        backgroundEffect.style.setProperty('--mouse-x', `${x + rect.left}px`);
        backgroundEffect.style.setProperty('--mouse-y', `${y + rect.top}px`);
    });
});

// Плавная анимация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hero h2, .hero p, .download-buttons, .telegram-btn');
    
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Эффект нажатия для кнопок
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'translateY(1px) scale(0.98)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
});
