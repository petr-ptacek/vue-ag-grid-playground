<template>
  <PlaygroundTemplate
    title="Grid Components"
    style="width: 100%;height: 100%;"
  >
    <template #controls>
      <button class="btn btn--primary"
              @click="updatePriceHandler">
        update price
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
  name: 'GridComponents',
  data() {
    return {
      /** @type { import('ag-grid-community').GridOptions } */
      gridOptions: defineGridOptions({
        ...getDefaultGridOptions(),
        context: {
          log: (msg) => {
            console.log(msg);
          }
        },
        columnTypes: {
          dateColumn: {
            filter: 'agDateColumnFilter',
            filterParams: {},
            suppressMenu: true
          },
          nonEditable: {
            editable: false
          }
        },
        defaultColDef: {
          flex: 1,
          suppressMenu: true,
          filter: true,
          floatingFilter: true,
          resizable: true,
          minWidth: 100,
          unSortIcon: true
        },
        // PROPERTIES]
        columnDefs: [
          {
            headerName: 'Car Price',
            headerTooltip: 'Tooltip: Car Price',
            // suppressMenu: true,
            field: 'price',
            cellRendererFramework: 'SimpleCellRenderer'
          },
          {
            field: 'model'
          }
          // {
          //   field: 'price',
          //   filter: true,
          //   sortable: false
          // }
        ],
        rowData: Service.getCars(5),

        // EVENTS
        /**
         * @param { import('ag-grid-community').GridReadyEvent } event
         */
        onGridReady: (event) => {
          window.$_gridApi = this.gridOptions.api;
          window.$_gridColumnApi = this.gridOptions.columnApi;
        },
        /**
         * @param { import('ag-grid-community').FirstDataRenderedEvent } event
         */
        onFirstDataRendered(event) {
          event.api.sizeColumnsToFit();
        }
      })
    };
  },
  methods: {
    updatePriceHandler() {
      this.gridOptions.api.forEachNode(node => {
        const { data } = node;
        data.price = getRandomNumber(100, 50000);

        node.setData(data);
      });
    }
  },
  components: {
    AgGridVue,
    // CubeComponent,
    PlaygroundTemplate
  }
});
</script>

<style lang="scss"
       scoped>

</style>