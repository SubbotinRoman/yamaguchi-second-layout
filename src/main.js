import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'normalize.css';

document.addEventListener('DOMContentLoaded', function () {
    const ellipse = document.querySelector('.image-block__ellipse');
    const womanImage = document.querySelector('.image-block__woman');

    function startAnimation() {
        // Начальное появление эллипса
        requestAnimationFrame(() => {
            ellipse.classList.add('appear');

            // Расширение эллипса
            setTimeout(() => {
                ellipse.classList.add('expand');
            }, 100);

            // Появление женщины
            setTimeout(() => {
                womanImage.classList.add('appear');
            }, 800);

            // Уменьшение эллипса до финального размера
            setTimeout(() => {
                ellipse.classList.remove('expand');
                ellipse.classList.add('final');
            }, 1600);
        });
    }

    // Добавляем Intersection Observer для запуска анимации при прокрутке
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.disconnect();
                }
            });
        },
        { threshold: 0.5 },
    );

    observer.observe(document.querySelector('.wrapper'));
});

createApp(App).mount('#app');
