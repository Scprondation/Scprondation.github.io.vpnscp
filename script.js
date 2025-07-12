
        // Обработчики для кнопок
        document.getElementById('windows-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Инструкция по установке для Windows будет доступна в Telegram @scprondation');
        });

        document.getElementById('android-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Скоро будет доступно для скачивания! Для покупки перейдите в Telegram @scprondation');
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
            
            // Добавляем эффект "нажатия" для кнопок
            const buttons = document.querySelectorAll('.btn');
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
    