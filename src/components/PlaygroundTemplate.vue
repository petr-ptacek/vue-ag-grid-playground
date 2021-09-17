<template>
  <div class="playground">
    <h1 class="playground__title" v-show="title">
      {{ title }}
    </h1>

    <div class="playground__controls">
      <slot name="controls" />
    </div>

    <div class="playground__content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PlaygroundTemplate',
  props: {
    title: String
  }
});
</script>

<style lang="scss"
       scoped>
.playground {
  display: grid;
  grid-template-rows: min-content minmax(70px, max-content) 1fr;
  grid-template-areas:
    "title"
    "controls"
    "content";
}

.playground__title {
  grid-area: title;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: dimgray;
  color: white;
  margin: 0;
  font-style: italic;
  padding: 4px 10px;
}

.playground__controls {
  background-color: dimgray;
  grid-area: controls;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
}

.playground__content-wrapper {
  height: 100%;
  width: 100%;
  grid-area: content;
}
</style>