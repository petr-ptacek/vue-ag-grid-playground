<template>
  <TheDatepicker
    v-model="state.picker.value"
    :datepickerOptions="datepickerOptions"
  />
</template>

<script>
import Vue           from 'vue';
import TheDatepicker from '@/components/Datepicker/App';

export default Vue.extend({
  name: 'ag-date-input',
  data() {
    return {
      /**
       * @type { import('ag-grid-community').IDateParams }
       */
      params: null,
      state: {
        picker: {
          value: null
        }
      }
    };
  },
  computed: {
    /**
     * @returns { import('@/components/Datepicker/types.d.ts').DatepickerOptions }
     */
    datepickerOptions() {
      const { $datepickerOptions = {} } = this.params.filterParams;

      return Object.assign(
        {},
        $datepickerOptions || {},
        {
          onChange: (...params) => {
            $datepickerOptions.onChange?.(...params);
            this.params.onDateChanged();
          }
        }
      );
    }
  },
  methods: {
    /**
     * @return {Date|null}
     */
    getDate() {
      return this.state.picker.value;
    },
    /**
     * @param {Date|null} date
     * @return {*}
     */
    setDate(date) {
      return this.state.picker.value = date;
    }
  },
  components: {
    TheDatepicker
  }
});
</script>