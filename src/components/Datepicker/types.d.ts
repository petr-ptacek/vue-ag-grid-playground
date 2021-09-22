export type Vue2DatetimePickerProps = Partial<{
  type: 'date' | 'datetime' | 'year' | 'month' | 'time' | 'week';
  range: boolean;
  format: string;
  formatter: object;
  valueType: 'date' | 'timestamp' | 'format';
  defaultValue: Date;
  lang: object;
  placeholder: string;
  editable: boolean;
  clearable: boolean;
  confirm: boolean;
  confirmText: string;
  multiple: string;
  disabled: boolean;
  disabledDate: (date: Date, currentValue: Date[]) => boolean;
  disabledTime: (date: Date) => boolean;
  appendToBody: boolean;
  inline: boolean;
  inputClass: string;
  inputAttr: object;
  open: boolean;
  defaultPanel: 'year' | 'month';
  popupStyle: object;
  popupClass: string;
  shortcuts: Array<{ text: string; onClick: Function }>;
  titleFormat: string;
  partialUpdate: boolean;
  rangeSeparator: string;
  showWeekNumber: boolean;
  hourStep: number;
  minuteStep: number;
  secondStep: number;
  hourOptions: number[];
  minuteOptions: number[];
  secondOptions: number[];
  showHour: boolean;
  showMinute: boolean;
  showSecond: boolean;
  use12h: boolean;
  showTimeHeader: boolean;
  timeTitleFormat: string;
  timePickerOptions: { start: string; step: string; end: string; format: string };
  prefixClass: string;
  scrollDuration: number;
}>


export type Vue2DatetimepickerEvents = Partial<{
  onInput:
    (date: Date) => void;
  onChange:
    (date: Date, type: 'date' | 'hour' | 'minute' | 'second' | 'am' | 'pm') => void;
  onOpen:
    () => void;
  onClose:
    () => void;
  onConfirm:
    (date: Date) => void;
  onClear:
    () => void;
  onInputError:
    () => void;
  onFocus:
    () => void;
  onBlur:
    () => void;
  onPick:
    () => void;
  onCalendarChange:
    (date: Date, oldDate: Date, type: 'year' | 'month' | 'last-year' | 'next-year' | 'last-month' | 'next-month' | 'last-decade' | 'next-decade') => void;
  onPanelChange: (type: 'year' | 'month' | 'date', oldType: 'year' | 'month' | 'date') => void;
}>

export type DatepickerOptions =
  Vue2DatetimePickerProps &
  Vue2DatetimepickerEvents