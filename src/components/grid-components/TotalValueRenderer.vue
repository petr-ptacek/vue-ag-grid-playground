<template>
  <div>
    <span>{{ cellValue }}</span>
    <button style="margin-left: 5px"
            class="btn btn--primary"
            @click="pushForTotalHandler">
      Push For Total
    </button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'total-value-renderer',
  data() {
    return {
      /** @type { import('ag-grid-community').ICellRendererParams } */
      params: null,
      state: {}
    };
  },
  computed: {
    cellValue() {
      return this.params.value;
    }
  },
  mounted() {

  },
  methods: {
    pushForTotalHandler() {
      alert(`${ this.cellValue } medals won!`);
    }
  }
});
</script>