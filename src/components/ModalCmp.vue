<template>
  <div class="overlay" v-show="dialog">
    <div class="modal-content">
      <span>ну и ну, хех)</span>
      <div class="modal-close" @click="closeModal">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.6 26L0 23.4L10.4 13L0 2.6L2.6 0L13 10.4L23.4 0L26 2.6L15.6 13L26 23.4L23.4 26L13 15.6L2.6 26Z"
            fill="#F9F4DE"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    disableScroll() {
      const body = document.querySelector("body");
      if (body.style.position !== "fixed") {
        const heightScroll = window.pageYOffset;
        const width = window.innerWidth;
        if (this.hasScrollbar()) {
          body.style.cssText = `top: ${-heightScroll}px; position: fixed; overflow-y: scroll; max-width: ${width}px`;
        } else {
          body.style.cssText = `top: ${-heightScroll}px; position: fixed; max-width: ${width}px`;
        }
      }
    },
    enableScroll() {
      const body = document.querySelector("body");
      const heightTop = body.style.top;

      if (heightTop) {
        body.style.cssText =
          "top: auto; position: static; overflow-y: auto; max-width: 100%";
        window.scrollTo({
          top: -parseInt(heightTop, 10),
          behavior: "instant",
        });
      }
    },

    closeModal() {
      this.enableScroll();
      this.$emit("closeModal");
    },

    // проверка на боковой скролл
    hasScrollbar() {
      return document.body.offsetHeight > window.innerHeight;
    },
  },

  mounted() {
    if (this.dialog) {
      this.disableScroll();
    }
  },
};
</script>

<style scoped>
.overlay {
  display: none;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.overlay._show {
  display: flex !important;
}

.modal-content {
  border-radius: 24px;
  max-width: 48.62%;
  width: 100%;
  height: 400px;
  background-image: url("../assets/modal.png");
  display: flex;
  justify-content: center;
  align-items: center;
  color: #242529;
  font-size: 64px;
  font-weight: 500;
  position: relative;
  background-size: 100%;
}

.modal-close {
  position: absolute;
  bottom: 20px;
  left: calc(50% - 32px);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: #242529;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
