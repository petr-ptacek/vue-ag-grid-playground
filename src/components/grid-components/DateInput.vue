<template>
  <DatePicker
    v-model="state.picker.value"
    type="date"
  />
</template>

<script>
import Vue        from 'vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default Vue.extend({
  name: 'date-input',
  data() {
    return {
      state: {
        picker: {
          value: null
        }
      }
    };
  },
  components: {
    DatePicker
  }
});
</script>