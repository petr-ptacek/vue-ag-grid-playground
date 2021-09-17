<template>
  <PlaygroundTemplate
    title="Basics"
    style="width: 100%;height: 100%;"
  >
    <template #controls>
      <button class="btn btn--primary"
              @click="getSelectedRowsHandler">
        Get Selected Rows
      </button>

      <button class="btn btn--primary"
              @click="setRandomPriceHandler">
        Generate Random Price
      </button>
    </template>

    <template>
      <AgGridVue
        ref="grid"
        style="width: 100%; height: 100%;"
        class="ag-theme-alpine"
        :gridOptions="gridOptions"
      />
    </template>
  </PlaygroundTemplate>
</template>

<script>
import Vue                from 'vue';
import { AgGridVue }      from 'ag-grid-vue';
import PlaygroundTemplate from '@/components/PlaygroundTemplate';
import { Service }        from '@/service';
import {
  defineGridOptions,
  getRandomNumber,
  getDefaultGridOptions
}                         from '@/helpers';

export default Vue.extend({
  name: 'GridBasics',
  data() {
    return {
      /** @type { import('ag-grid-community').GridOptions } */
      gridOptions: defineGridOptions({
        ...getDefaultGridOptions(),
        // PROPERTIES
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
        onGridReady: this.onGridReadyHandler,
        onRowClicked: this.onRowClickedHandler,
        onRowDoubleClicked: this.onRowDoubleClickedHandler
      })
    };
  },
  methods: {
    /**
     * @param { import('ag-grid-community').RowDoubleClickedEvent } event
     **/
    onRowDoubleClickedHandler(event) {
      console.group('onRowDoubleClickedHandler');
      console.dir(event);
      console.groupEnd();
    },
    /**
     * @param { import('ag-grid-community').RowClickedEvent } event
     **/
    onRowClickedHandler(event) {
      console.group('onRowClickedHandler');
      console.dir(event);
      console.groupEnd();
    },
    /**
     * @param { import('ag-grid-community').GridReadyEvent } params
     */
    onGridReadyHandler(params) {
      console.group('onGridReadyHandler');
      console.dir(this.gridOptions);
      console.groupEnd();

      this.gridOptions.api.sizeColumnsToFit();
    },
    /**
     * @returns {void}
     */
    getSelectedRowsHandler() {
      const selectedRows = this.gridApi.getSelectedRows();
      const selectedNodes = this.gridApi.getSelectedNodes();

      console.group('getSelectedRowsHandler');
      console.dir(selectedRows);
      console.dir(selectedNodes);
      console.groupEnd();
    },
    /**
     * @returns {void}
     */
    setRandomPriceHandler() {
      this.gridOptions.api.forEachNode(node => {
        const data = Object.assign(
          {},
          node.data,
          { price: getRandomNumber(800, 8000) }
        );

        node.setData(data);
      });
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