import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'normalize.css';

// Ждем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы для анимации
    const ellipse = document.querySelector('.image-block__ellipse');
    const womanImage = document.querySelector('.image-block__woman');

    // Показываем и расширяем эллипс
    ellipse.classList.add('appear');
    ellipse.classList.add('expand');

    // Через 800мс показываем изображение женщины
    setTimeout(() => {
        womanImage.classList.add('appear');
    }, 800);

    // Через 1600мс уменьшаем эллипс до финального размера
    setTimeout(() => {
        ellipse.classList.remove('expand');
        ellipse.classList.add('final');
    }, 1600);
});

createApp(App).mount('#app');
