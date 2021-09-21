<template>
  <div :style="styleCSS">{{ displayValue }}</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'medal-cell-renderer',
  data() {
    return {
      /** @type { import('ag-grid-community').ICellRendererParams } **/
      params: null,
      state: {}
    };
  },
  mounted() {
  },
  computed: {
    styleCSS() {
      const props = this.params.$props || {};

      return {
        backgroundColor: props.backgroundColor,
        color: props.color
      };
    },
    displayValue() {
      const v = this.params.value;
      return Array.from({ length: v }, () => '#').join('');
    }
  }
});
</script>