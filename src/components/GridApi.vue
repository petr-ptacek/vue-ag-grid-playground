<template>
  <PlaygroundTemplate
    title="Grid Api"
    style="width: 100%;height: 100%;"
  >
    <template #controls>
      <button class="btn btn--primary"
              @click="getColumnDefsHandler">
        getColumnDefs
      </button>
    </template>

    <AgGridVue
      ref="grid"
      style="width: 100%;height: 100%;"
      class="ag-theme-alpine"
      :gridOptions="gridOptions"
    />

  </PlaygroundTemplate>
</template>

<script>
import Vue                from 'vue';
import { AgGridVue }      from 'ag-grid-vue';
import {
  defineGridOptions,
  getDefaultGridOptions
}                         from '@/helpers';
import PlaygroundTemplate from '@/components/PlaygroundTemplate';
import { Service }        from '@/service';

export default Vue.extend({
  name: 'GridApi',
  data() {
    return {
      /** @type { import('ag-grid-community').GridOptions } */
      gridOptions: defineGridOptions({
        ...getDefaultGridOptions(),
        // PROPERTIES]
        columnDefs: [
          {
            field: 'make', filter: true, sortable: true
          },
          {
            field: 'model', filter: true, sortable: true
          },
          {
            field: 'price', filter: true, sortable: true
          }
        ],
        rowData: Service.getCars(100),

        // EVENTS
        onGridReady: () => {
          this.gridOptions.api.sizeColumnsToFit();
        }
      })
    };
  },
  methods: {
    /**
     * @returns {void}
     */
    getColumnDefsHandler() {

    }
  },
  components: {
    AgGridVue,
    PlaygroundTemplate
  }
});
</script>

<style lang="scss"
       scoped>

</style>