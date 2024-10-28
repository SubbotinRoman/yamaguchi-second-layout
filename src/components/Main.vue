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
    font-size: 3.3rem;
    font-weight: normal;
    margin-bottom: 2rem;
}

.text-block__text {
    font-size: 1.3rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: #c5c5c5;
}

.command-block {
    margin-top: 1rem;
}

.command-block__title {
    font-size: 1.6rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
}

.command-block__text {
    font-size: 2rem;
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
    bottom: -100%;
    transform: translateY(100%);
    transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    clip-path: ellipse(100% 100% at 50% 50%);
    z-index: 2;
    opacity: 0;
}

.image-block__woman.appear {
    bottom: 5%;
    opacity: 1;
    transform: translateY(0);
    animation: levitate 3s infinite alternate ease-in-out;
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
    top: 92%;
    left: 28%;
    transform: translate(-50%, -50%);
    background: #000000;
    border-radius: 50%;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    z-index: 1;
}

.image-block__ellipse.appear {
    opacity: 1;
}

.image-block__ellipse.expand {
    width: 350px;
    height: 120px;
    opacity: 1;
}

.image-block__ellipse.final {
    width: 193.78px;
    height: 61.14px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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
        position: relative;
        flex-direction: column;
        height: auto;
        min-height: 100vh;
        overflow-y: visible;
        padding: 20px;
    }

    .text-block {
        position: relative;
        width: 100%;
        margin: 0 auto;
        padding: 0;
    }

    .text-block__title {
        font-size: 2.6rem;
        text-align: left;
        margin-left: 16.12px;
        margin-top: 17.32px;
        letter-spacing: 0%;
    }

    .text-block__text {
        font-size: 1.1rem;
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
        margin-top: 1300px;
    }

    .command-block__title {
        font-size: 2.2rem;
    }

    .command-block__text {
        font-size: 3rem;
        margin-left: 0;
    }

    .image-block {
        position: relative;
        width: 100%;
        height: 350px;
    }

    .image-block__woman {
        position: absolute;
        height: 200%;
        left: -10%;
        transform: translateX(-50%);
        top: 1200px;
        bottom: auto;
    }

    .image-block__woman.appear {
        top: 0px;
        opacity: 1;
    }

    .image-block__ellipse {
        position: absolute;
        bottom: auto;
        left: 50%;
        transform: translateX(-50%);
        top: 700px;
        width: 350px;
        height: 120px;
    }

    .image-block__ellipse.appear {
        opacity: 1;
        animation: pulseEllipse 5s ease-in-out;
    }

    .image-block__interface {
        position: absolute;
        width: 120%;
        left: 55%;
        transform: translateX(-50%);
        top: 800px;
    }

    br {
        display: none;
    }
}
</style>
