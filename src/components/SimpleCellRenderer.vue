<template>
  <span>{{ displayValue }}</span>
</template>

<script>
export default {
  name: 'SimpleCellRenderer',
  data() {
    return {
      displayValue: ''
    };
  },
  beforeMount() {

    this.displayValue = `##${ this.params.value }##`;
  }
};
</script>

<style scoped>

</style>