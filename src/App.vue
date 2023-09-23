<template>
  <div id="app">
    <main
      :style="
        tasks.backgroundColor.code.indexOf('background') > -1
          ? tasks.backgroundColor.code
          : ''
      "
    >
      <section
        class="t-container"
        :style="
          tasks.textFont.code.indexOf('font-family') > -1
            ? tasks.textFont.code
            : ''
        "
      >
        <div
          class="promo"
          :style="
            tasks.paddingTop.code.indexOf('padding') > -1
              ? tasks.paddingTop.code
              : ''
          "
        >
          <header :style="tasks.imgCenter.code">
            <img
              :style="
                tasks.logoFixed.code.indexOf('position') > -1
                  ? tasks.logoFixed.code
                  : ''
              "
              src="./assets/asap.png"
              alt="logo"
            />
          </header>
          <task-item
            @set-code="setCode"
            :item="tasks.imgCenter"
            position-left
            class="t-code-logo-center"
          ></task-item>
          <task-item
            @set-code="setCode"
            :item="tasks.paddingTop"
            position-left
            class="t-code-padding-top"
          ></task-item>
          <task-item
            @set-code="setCode"
            :item="tasks.logoFixed"
            position-left
            class="t-code-fixed"
          ></task-item>

          <div class="promo-wrap">
            <p
              class="promo-text"
              :style="
                tasks.textOpacity.code.indexOf('opacity') > -1
                  ? tasks.textOpacity.code
                  : ''
              "
            >
              frontend development { <br />
              speed: quick; <br />
              level: easy; <br />
              spirit: fun; <br />
            </p>
            <task-item
              @set-code="setCode"
              :item="tasks.textOpacity"
              class="t-code-text-opacity"
            ></task-item>
            <task-item
              @set-code="setCode"
              :item="tasks.textFont"
              class="t-code-text-font"
            ></task-item>
          </div>
        </div>
      </section>

      <section class="slider">
        <task-item
          @set-code="setCode"
          :item="tasks.backgroundColor"
          position-left
          class="t-code-background-color"
        ></task-item>
        <task-item
          @set-code="setCode"
          :item="tasks.backgroundImg"
          position-left
          dark
          class="t-code-background-img"
        ></task-item>
        <task-item
          v-if="tasks.backgroundImg.code.indexOf('background-image: url(') > -1"
          @set-code="setCode"
          :item="tasks.borderRadius"
          position-left
          class="t-code-border-radius"
        ></task-item>
        <task-item
          v-if="tasks.backgroundImg.code.indexOf('background-image: url(') > -1"
          @set-code="setCode"
          :item="tasks.textPosition"
          position-left
          class="t-code-text-position"
        ></task-item>
        <swiper class="slider-swiper" :options="swiperOptions" ref="swiper">
          <swiper-slide
            :style="
              tasks.borderRadius.code.indexOf('border-radius') > -1
                ? tasks.borderRadius.code
                : ''
            "
          >
            <div
              :style="
                tasks.backgroundImg.code.indexOf('background-image') > -1
                  ? tasks.backgroundImg.code
                  : ''
              "
              class="slide-wrap"
            >
              <span
                class="slide-one"
                :style="
                  tasks.textPosition.code.indexOf('margin') > -1 ||
                  tasks.textPosition.code.indexOf('align-self') > -1
                    ? tasks.textPosition.code
                    : ''
                "
                >слайдер <br />
                делает</span
              >
              <span class="slide-two">вжух</span>
            </div>
          </swiper-slide>
          <swiper-slide
            :style="
              tasks.borderRadius.code.indexOf('border-radius') > -1
                ? tasks.borderRadius.code
                : ''
            "
          >
            <div
              style="background-image: url(img/slide-2.png)"
              class="slide-wrap"
            >
              <span class="slide-center">ого...</span>
            </div>
          </swiper-slide>
          <div
            class="swiper-button-next"
            :style="
              tasks.arrowShow.code.indexOf('display') > -1
                ? tasks.arrowShow.code
                : ''
            "
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3333 14.0002L14 27.3335L11.625 25.0002L20.9583 15.6668L0.666626 15.6668L0.666626 12.3335L20.9583 12.3335L11.625 3.00016L14 0.66683L27.3333 14.0002Z"
                fill="#F9F4DE"
              />
            </svg>
          </div>
          <div class="swiper-button-prev">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3333 14.0002L14 27.3335L11.625 25.0002L20.9583 15.6668L0.666626 15.6668L0.666626 12.3335L20.9583 12.3335L11.625 3.00016L14 0.66683L27.3333 14.0002Z"
                fill="#F9F4DE"
              />
            </svg>
          </div>
        </swiper>
        <task-item
          @set-code="setCode"
          :item="tasks.arrowShow"
          class="t-code-arrow"
        ></task-item>
      </section>

      <section class="modal-block">
        <div
          class="modal-button"
          :style="
            tasks.cursor.code.indexOf('cursor') > -1 ? tasks.cursor.code : ''
          "
          @click="openModal()"
        >
          <span>
            {{ textBtn }}
          </span>
        </div>
        <task-item
          @set-code="setCode"
          :item="tasks.cursor"
          class="t-code-cursor"
        ></task-item>
        <task-item
          v-if="!firstClick"
          @set-code="setCode"
          :item="tasks.modal"
          class="t-code-modal"
        ></task-item>
      </section>
      <modal-cmp
        v-if="modal"
        :dialog="modal"
        @closeModal="closeModal"
      ></modal-cmp>

      <section class="promo-wrap block">
        <p>Cверстай сам</p>
        <v-textarea
          label="Введите html код"
          filled
          auto-grow
          clearable
          clear-icon="mdi-close-circle"
          dark
          v-model="block"
        ></v-textarea>
        <div class="block-html" v-html="block"></div>
      </section>
      <section class="promo-wrap block">
        <p>Создай свой блок!</p>
        <v-textarea
          label="Введите html код"
          filled
          auto-grow
          clearable
          clear-icon="mdi-close-circle"
          dark
          v-model="html"
        ></v-textarea>
        <div class="block-html" v-html="html"></div>
      </section>
    </main>
  </div>
</template>

<script>
import TaskItem from "./components/TaskItem.vue";
import ModalCmp from "./components/ModalCmp.vue";

export default {
  components: {
    TaskItem,
    ModalCmp,
  },

  data() {
    return {
      firstClick: true,
      html: '<p style="font-size: 20px; color: red; margin-left: 20px"> пример </p>',
      textBtn: "a нажми",
      block:
        '<p style="font-size: 20px; color: red; margin-left: 40px"> здесь пишем html-код, а в атрибуте style у каждого тега - inline стили </p>',
      modal: false,
      tasks: {
        logoFixed: {
          name: "logoFixed",
          task: "А давай зафиксируем логотип, чтоб при скролле он оставался прибитым к верху",
          help: "position: fixed",
          code: "",
        },
        textOpacity: {
          name: "textOpacity",
          task: "Кажется, текст слишком бледный... Измени прозрачность цвета",
          help: "opacity: 1",
          code: "",
        },
        textFont: {
          name: "textFont",
          task: "Шрифт не тот, давай сделаем Source Code Pro? Он подключен, осталось применить :)",
          help: 'font-family: "Source Code Pro"',
          code: "",
        },
        backgroundColor: {
          name: "backgroundColor",
          task: "Кажется, цвет фона тоже не соответствует макету. Исправим на черный?",
          help: "background-color: #000000",
          code: "",
        },
        paddingTop: {
          name: "paddingTop",
          task: "А сверху отступа не хватает, давай попробуем добавить внутренний. Сколько там по макету?",
          help: "padding-top: 32px",
          code: "",
        },
        imgCenter: {
          name: "imgCenter",
          task: "Нужно логотип выровнять по центру (по горизонтали), есть идеи? Можно использовать больше одного правила через точку с запятой :)",
          help: "",
          code: "",
        },
        backgroundImg: {
          name: "backgroundImg",
          task: "Кажется у фона слайда пропала картинка, попробуем вернуть? Ее относительный путь: img/slide-1.png",
          help: "background-image: url(img/slide-1.png)",
          code: "",
        },
        borderRadius: {
          name: "borderRadius",
          task: "Скруглим края картинки?",
          help: "border-radius: 24px",
          code: "",
        },
        textPosition: {
          name: "textPosition",
          task: "Поправим расположение текста? Он должен прижиматься к нижнему краю картинки. К блоку с картинкой применен display: flex",
          help: "align-self: flex-end или margin-top: auto",
          code: "",
        },
        arrowShow: {
          name: "arrowShow",
          task: "Тут должна быть стрелка! Где она? А в разметке есть. Может, изменим ей свойство display? Только не блочный и не строчный, прошу",
          help: "display: inline-flex или display: flex",
          code: "",
        },
        cursor: {
          name: "cursor",
          task: "Нужно заменить курсор на кнопке с дефолтного на pointer. Легко же звучит?",
          help: "cursor: pointer",
          code: "",
        },
        modal: {
          name: "modal",
          task: "Нужно кнопку починить, чтоб открылась модалка... Как быть?",
          help: 'Это пока слишком сложно для тебя, поэтому пока просто введи "Откройся"',
          code: "",
        },
      },

      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 16,
        grabCursor: true,
        effect: "flip",
        flipEffect: {
          slideShadows: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    setCode(el) {
      this.tasks[el.item].code = el.code;

      if (el.item === "modal" && el.code.toLowerCase() === "откройся") {
        this.textBtn = "а вот щас?";
      }
    },
    openModal() {
      if (this.firstClick) {
        this.firstClick = false;
        this.textBtn = "блин, не работает";
      } else {
        if (this.tasks.modal.code.toLowerCase() === "откройся") {
          this.modal = true;
        }
      }
    },
    closeModal() {
      this.modal = false;
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Arial";
  transition: 0.3s;
}

main {
  overflow-x: hidden;
}

.t-container ::-webkit-scrollbar {
  display: none;
}

header {
  height: 50px;
}

.promo {
  background: url(./assets/bg.png);
  background-repeat: no-repeat;
  background-size: 100%;
  height: 900px;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
}

.promo::before {
  content: "";
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 5.97%,
    rgba(0, 0, 0, 0.276001) 29.99%,
    #000000 61.99%
  );
  height: 426px;
  width: 100%;
  bottom: -114px;
  left: 0;
}

.promo-wrap {
  padding-top: 180px;
  position: relative;
  margin: 0 auto;
  max-width: 780px;
  width: 100%;
  text-align: center;
  font-size: 80px;
}

.promo-wrap p {
  color: #f9f4de;
}

.promo-text {
  opacity: 0.3;
  color: #f9f4de;
  position: relative;
}

.promo-text::before {
  position: absolute;
  bottom: -80px;
  left: 0;
  content: "}";
}

.slider {
  position: relative;
}

.slider-swiper {
  max-width: 81.6%;
  width: 100%;
  margin-bottom: 180px;
}

.swiper-slide {
  overflow: hidden;
}

.slide-wrap {
  height: 600px;
  background-repeat: no-repeat;
  background-size: 100%;
  font-size: 64px;
  display: flex;
  justify-content: space-between;
  color: #f9f4de;
}

.slide-one {
  padding: 80px;
  color: #242529;
}

.slide-two {
  padding: 160px;
}

.slide-center {
  margin: auto;
}

.swiper-button-next,
.swiper-button-prev {
  background: #242529;
  border-radius: 50%;
  width: 64px;
  height: 64px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
}

.swiper-button-next {
  right: -96px;
  display: none;
}

.swiper-button-prev {
  left: -96px;
}

.swiper-button-prev svg {
  transform: rotate(180deg);
}

.swiper-button-disabled {
  background: transparent;
}

.swiper-button-disabled svg path {
  fill: #4b4b49;
}

.modal-block {
  display: flex;
  justify-content: center;
  padding-bottom: 180px;
  position: relative;
}

.modal-button {
  padding: 16px 48px;
  background-color: #242529;
  border-radius: 100px;
  color: #f9f4de;
  font-size: 32px;
}

.t-code-fixed,
.t-code-text-opacity,
.t-code-text-font,
.t-code-text-width,
.t-code-text-position,
.t-code-logo-center,
.t-code-padding-top,
.t-code-background-color,
.t-code-background-img,
.t-code-border-radius,
.t-code-arrow,
.t-code-cursor,
.t-code-modal {
  position: absolute;
}

.t-code-text-opacity {
  top: 230px;
  right: -80px;
}

.t-code-text-font {
  top: 278px;
  right: -80px;
}

.t-code-text-width {
  top: 326px;
  right: -80px;
}

.t-code-logo-center {
  top: 80px;
  left: 32px;
}

.t-code-padding-top {
  top: 80px;
  left: 80px;
}

.t-code-fixed {
  top: 80px;
  left: 128px;
}

.t-code-background-color {
  top: 80px;
  left: 80px;
}

.t-code-background-img {
  top: 128px;
  left: 80px;
}

.t-code-border-radius {
  top: 176px;
  left: 80px;
}

.t-code-text-position {
  top: 224px;
  left: 80px;
}

.t-code-arrow {
  top: calc(50% + 96px);
  right: 80px;
}

.t-code-cursor {
  top: 10px;
  left: 65%;
}

.t-code-modal {
  top: 10px;
  left: calc(65% + 48px);
}

.block p {
  padding-bottom: 40px;
}

.block-html {
  font-size: 32px;
  text-align: start;
  min-height: 250px;
  border: 1px solid #f9f4de;
  background: #fff;
}
</style>
