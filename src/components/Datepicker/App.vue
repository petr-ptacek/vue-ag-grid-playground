<template>
  <Vue2Datepicker
    v-model="modelValue"
    v-bind="datepickerOptions"
  />
</template>

<script>
import Vue                         from 'vue';
import Vue2Datepicker              from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default Vue.extend({
  name: 'TheDatepicker',
  props: {
    value: {
      required: false
    },
    datepickerOptions: {
      type: Object,
      required: false
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      }
    }
  },
  components: {
    Vue2Datepicker
  }
});
</script>

<style scoped>

</style>