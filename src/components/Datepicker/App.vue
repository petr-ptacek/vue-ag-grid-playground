<template>
  <Vue2Datepicker
    v-model="modelValue"
    v-bind="pickerProps"
    v-on="pickerEvents"
  />
</template>

<script>
import Vue            from 'vue';
import Vue2Datepicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

const vue2DatepickerPropNames = Object.keys(Vue2Datepicker.props);
const vue2DatepickerEventNames = [
  ['onInput', 'input'],
  ['onChange', 'change'],
  ['onOpen', 'open'],
  ['onClose', 'close'],
  ['onConfirm', 'confirm'],
  ['onClear', 'clear'],
  ['onInputError', 'inputError'],
  ['onFocus', 'focus'],
  ['onBlur', 'blur'],
  ['onPick', 'pick'],
  ['onCalendarChange', 'calendarChange'],
  ['onPanelChange', 'panelChange']
];

export default Vue.extend({
  name: 'TheDatepicker',
  props: {
    value: {
      required: false
    },
    datepickerOptions: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      state: {}
    };
  },
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      }
    },
    /**
     * @returns { import('./types.d.ts').Vue2DatetimePickerProps }
     */
    pickerProps() {
      const entries = Object.entries(this.datepickerOptions);
      const props = entries.filter(([key]) => {
        return vue2DatepickerPropNames.includes(key);
      });

      return Object.fromEntries(props);
    },
    /**
     * @returns { import('./types.d.ts').Vue2DatetimepickerEvents }
     * */
    pickerEvents() {
      const events = {};
      const datepickerOptionEntries = Object.entries(this.datepickerOptions);

      datepickerOptionEntries.forEach(([optionKey, optionValue]) => {
        for ( const [_optionKey, pickerEventKey] of vue2DatepickerEventNames ) {
          if ( _optionKey === optionKey ) {
            events[pickerEventKey] = optionValue;
            break;
          }
        }
      });

      return events;
    }
  },
  components: {
    Vue2Datepicker
  }
});
</script>