<template>
  <div class="mx-datepicker">
    <div class="mx-input-wrapper">
      <input type="text"
             autocomplete="off"
             class="mx-input"
             v-model="state.modelValue"
             @input="inputHandler"
      >
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ag-text-column-floating-filter',
  data() {
    return {
      /**
       * @type {import('ag-grid-community').IFloatingFilterParams}
       **/
      params: null,
      state: {
        modelValue: null
      }
    };
  },
  mounted() {
  },
  methods: {
    inputHandler() {
      const value = this.state.modelValue;

      this.params.parentFilterInstance(
        /**
         * @param {import('ag-grid-community').TextFilter} instance
         */
        (instance) => {
          instance.onFloatingFilterChanged('contains', value);
        });
    },

    /**
     * @param { import('ag-grid-community').TextFilterModel | null } parentModel
     */
    onParentModelChanged(parentModel) {
      // When the filter is empty we will receive a null value here
      if ( !parentModel ) {
        this.state.modelValue = '';
      } else {
        this.state.modelValue = parentModel.filter;
      }
    }
  }
});
</script>