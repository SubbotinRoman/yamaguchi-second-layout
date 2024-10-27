<template>
    <div class="wrapper">
        <!-- Блок с текстом  -->
        <div class="text-block">
            <h1 class="text-block__title">Yamaguchi <br />Voice Control</h1>
            <!-- Первый текстовый блок  -->
            <p class="text-block__text">
                Вы можете управлять программами массажа <br />
                или самим креслом с помощью голосовых <br />
                команд, приведённых ниже. Коснитесь <br />
                кратковременно кнопки голосового управления, <br />
                расположенной на левом подлокотнике, <br />
                для запуска сеанса голосового управления.
            </p>
            <!-- Второй текстовый блок  -->
            <p class="text-block__text">
                Произнесите одну из доступных команд. <br />
                Если произнесённая команда распознана, <br />
                вы услышите ответ и кресло приступит <br />
                к выполнению запроса.
            </p>
            <!-- Блок с командой  -->
            <div class="command-block">
                <p class="command-block__title">СКАЖИ:</p>
                <p class="command-block__text">«ОКЕЙ, ЯМАГУЧИ»</p>
            </div>
        </div>
        <!-- Блок с изображениями  -->
        <div class="image-block">
            <img class="image-block__woman" src="../assets/woman.png" alt="Woman" />
            <div class="image-block__ellipse"></div>
            <img class="image-block__interface" src="../assets/interface.png" alt="Interface" />
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    padding: 05%;
    align-items: center;
    overflow: hidden;
}

.text-block {
    width: 50%;
    z-index: 1;
}

.text-block__title {
    font-size: 3.6rem;
    font-weight: normal;
    margin-bottom: 2rem;
}

.text-block__text {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: #c5c5c5;
}

.command-block {
    margin-top: 1rem;
}

.command-block__title {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
}

.command-block__text {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
    margin-left: 7%;
}

.image-block {
    position: relative;
    width: 100%;
    height: 100vh;
    bottom: 1%;
    overflow: visible;
}

.image-block__woman {
    position: absolute;
    height: 90%;
    left: 10%;
    bottom: -100%; /* Изначальная позиция — под отверстием */
    transition: bottom 3s ease-in-out; /* Плавный подъем */
    overflow: hidden; /* Скрыть выход за пределы экрана */
    animation: none; /* Убираем анимацию левитации на начальном этапе */
    z-index: 2;
}

.image-block__woman.appear {
    bottom: 5%;
    animation: levitate 3s infinite alternate ease-in-out; /* Левитация после подъема */
}

@keyframes levitate {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
}

.image-block__ellipse {
    position: absolute;
    width: 0;
    height: 0;
    top: 87%;
    left: 28%;
    transform: translateX(-50%);
    background: #000000;
    border-radius: 50%;
    transition: all 2s ease-in-out;
    opacity: 0;
    z-index: 1;
    overflow: hidden;
}

.image-block__ellipse.appear {
    opacity: 1;
}

.image-block__ellipse.expand {
    width: 270px;
    height: 100px;
}

.image-block__ellipse.final {
    width: 193.78px;
    height: 61.14px;
}

.image-block__ellipse.shrink {
    width: 193.78px;
    height: 61.14px;
    opacity: 1;
}

.image-block__interface {
    position: absolute;
    top: 1%;
    right: 0;
    left: 40%;
    width: 65%;
    z-index: 2;
}

@media screen and (max-width: 400px) {
    .wrapper {
        flex-direction: column;
        height: auto;
        overflow-y: auto;
        padding: 0;
        margin: 0;
    }

    .text-block {
        width: 100%;
        margin: 0 auto;
        padding: 0;
    }

    .text-block__title {
        font-size: 2.8rem;
        text-align: left;
        margin-left: 16.12px;
        margin-top: 17.32px;
        letter-spacing: 0%;
    }

    .text-block__text {
        font-size: 1.2rem;
        text-align: left;
        margin-top: 33.43px;
        margin-left: 16.12px;
        margin-right: 13.58px;
        line-height: 170%;
    }

    .command-block {
        position: absolute;
        margin-left: 16.12px;
        margin-right: 13.58px;
        text-align: left;
        margin-top: 1150px;
    }

    .command-block__title {
        font-size: 2.7rem;
    }

    .command-block__text {
        font-size: 3.8rem;
        margin-left: 0;
    }

    .image-block {
        position: absolute;
        width: 100%;
        height: 400px;
        margin-top: 30px;
    }

    .image-block__woman {
        position: absolute;
        height: 140%;
        left: 10%;
        bottom: -100%; /* Начальная позиция - полностью скрыта */
        transition: bottom 1s ease-in-out;
        z-index: 2;
        opacity: 0; /* Начально невидима */
    }

    .image-block__woman.appear {
        bottom: 200%;
        opacity: 1; /* Становится видимой */
        animation: levitate 3s infinite alternate ease-in-out;
    }

    .image-block__ellipse {
        position: absolute;
        width: 193.78px; /* Начальный размер */
        height: 61.14px;
        top: -110%;
        left: 50%;
        transform: translateX(-50%);
        background: #000000;
        border-radius: 50%;
        transition: all 1.5s ease-in-out;
        opacity: 0;
        z-index: 1;
    }

    .image-block__ellipse.appear {
        opacity: 1;
        animation: pulseEllipse 5s ease-in-out;
    }

    .image-block__interface {
        position: absolute;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        top: -75%;
    }

    br {
        display: none;
    }
}
</style>
