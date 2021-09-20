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

      <button class="btn btn--primary"
              @click="setRowDataHandler">
        setRowData
      </button>

      <button class="btn btn--primary"
              @click="getFilterModelHandler">
        getFilterModel
      </button>

      <button class="btn btn--primary"
              @click="getSortModelHandler">
        getSortModel
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
  getDefaultGridOptions, getRandomNumber
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
        /**
         * @param { import('ag-grid-community').GridReadyEvent } event
         */
        onGridReady: (event) => {
          this.gridOptions.api.sizeColumnsToFit();
          window.$_gridApi = this.gridOptions.api;
          window.$_gridColumnApi = this.gridOptions.columnApi;
        },

        /**
         * @param { import('ag-grid-community').SortChangedEvent } event
         */
        onSortChanged: (event) => {
          console.group('onSortChanged');
          console.log(this.gridOptions.api.getSortModel());
          console.groupEnd();
        },
        /**
         * @param { import('ag-grid-community').GridSizeChangedEvent } event
         */
        onGridSizeChanged: (event) => {
          console.group('onGridSizeChanged');
          console.log(event);
          console.groupEnd();
        },

        /**
         * @param { import('ag-grid-community').BodyScrollEvent } event
         */
        onBodyScroll: (event) => {
          console.group('onBodyScroll');
          console.log(event);
          console.groupEnd();
        }
      })
    };
  },
  methods: {
    /**
     * @returns {void}
     */
    getColumnDefsHandler() {
      const columns = this.gridOptions.columnApi.getAllColumns();
      const columnDefs = columns.map(column => column.getColDef());

      console.log(columnDefs);
    },
    /**
     * @returns {void}
     */
    setRowDataHandler() {
      this.gridOptions.api.setRowData(Service.getCars(getRandomNumber(1, 12)));
    },
    /**
     * @returns {void}
     */
    getSortModelHandler() {
      const sortModel = this.gridOptions.api.getSortModel();
      console.group('getSortModel');
      console.dir(sortModel);
      console.groupEnd();
    },
    /**
     * @returns {void}
     */
    getFilterModelHandler() {
      const filterModel = this.gridOptions.api.getFilterModel();
      console.group('getFilterModel');
      console.dir(filterModel);
      console.groupEnd();
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