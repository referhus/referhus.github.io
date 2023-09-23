<template>
  <v-row class="row" justify="center">
    <v-btn dark fab small @click.stop="dialog = !dialog">
      <v-icon x-large> mdi-alert-circle </v-icon>
    </v-btn>
    <v-fade-transition>
      <v-alert
        class="alert"
        v-if="dialog"
        v-click-outside="close"
        :class="{ _left: positionLeft }"
        prominent
        shaped
        elevation="11"
        dark
        text
      >
        <p>
          {{ item.task }}
        </p>

        <v-text-field
          label="Введите код"
          required
          v-model="code"
          @input="$emit('set-code', { item: item.name, code: code })"
        ></v-text-field>
        <v-btn v-if="!help && item.help" @click="help = !help" dark>
          <v-icon> mdi-help </v-icon>
        </v-btn>
        <span v-else-if="item.help">
          {{ item.help }}
        </span>
      </v-alert>
    </v-fade-transition>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      code: "",
      help: "",
    };
  },

  props: {
    item: {
      type: Object,
      default: () => {},
    },
    positionLeft: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.row {
  position: relative;
  font-family: "Source Code Pro";
  margin-top: 0 !important;
}

.alert {
  position: absolute;
  top: 140%;
  right: 0;
  width: 400px;
  z-index: 4;
  word-break: break-word;
}

.v-alert--text {
  background: rgba(0, 0, 0, 0.5) !important;
}

._left {
  right: auto;
  left: 0;
}
</style>
