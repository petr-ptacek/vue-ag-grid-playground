<template>
  <div id="app">
    <TheGrid />
  </div>
</template>

<script>
import TheGrid from '@/components/grid-components/App';
import GridApi from '@/components/GridApi';

export default {
  name: 'App',
  components: {
    TheGrid,
    GridApi
  }
};
</script>

<style lang="scss">
@import "~ag-grid-community/dist/styles/ag-grid.css";
@import "~ag-grid-community/dist/styles/ag-theme-alpine.css";

body {
  margin: 0;
}

#app {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: #ccc;
}

.grid-playground {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.8);
}

.btn {
  padding: 8px 10px;
  color: white;
  border: none;
  font-family: sans-serif;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: lightblue;
  transition: all 0.2s;
  font-weight: 700;

  &:hover {
    background-color: darken(lightblue, 10%);
  }

  &:active {
    transform: translateY(2px);
  }

  &--primary {
    background-color: orangered;

    &:hover {
      background-color: darken(orangered, 5%);
    }
  }
}
</style>
