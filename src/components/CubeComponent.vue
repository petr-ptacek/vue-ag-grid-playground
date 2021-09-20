<template>
  <span>{{ valueCubed() }}</span>
</template>

<script>
export default {
  name: 'CubeComponent',
  created() {
    console.log(this);
  },
  methods: {
    valueCubed() {
      return Math.pow(this.params.value, 3);
    }
  }
};
</script>

<style scoped>

</style>