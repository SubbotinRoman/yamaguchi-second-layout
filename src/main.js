import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'normalize.css';

document.addEventListener('DOMContentLoaded', function () {
    const ellipse = document.querySelector('.image-block__ellipse');
    const womanImage = document.querySelector('.image-block__woman');

    function startAnimation() {
        // Появление эллипса
        ellipse.classList.add('appear');

        // Через 0.5 секунды расширяем эллипс
        setTimeout(() => {
            ellipse.classList.add('expand');
        }, 1000);

        // Через 1.5 секунды начинаем поднимать изображение женщины
        setTimeout(() => {
            womanImage.classList.add('appear');
        }, 2000);

        // Через 3 секунды уменьшаем эллипс до финального размера
        setTimeout(() => {
            ellipse.classList.remove('expand');
            ellipse.classList.add('final');
        }, 4000);
    }

    // Запускаем анимацию при загрузке страницы
    startAnimation();
});
createApp(App).mount('#app');
