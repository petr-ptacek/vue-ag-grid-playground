<template>
  <PlaygroundTemplate
    title="Grid Api"
    style="width: 100%;height: 100%;"
  >
    <template #controls>
      <!--      <button class="btn btn&#45;&#45;primary"-->
      <!--              @click="getColumnDefsHandler">-->
      <!--        getColumnDefs-->
      <!--      </button>-->
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
  name: 'GridColumnDefs',
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
        // PROPERTIES]
        columnDefs: [
          {
            maxWidth: 400,
            headerName: 'Car Price',
            // headerValueGetter: params => {
            //   return `headerValueGetter`;
            // },
            headerTooltip: 'Tooltip: Car Price',
            suppressMenu: true,
            /**
             * @param { import('ag-grid-community').RowSpanParams } params
             */
            rowSpan: params => {
              return 0;
            },
            /**
             * @param { import('ag-grid-community').ColSpanParams } params
             * @returns {number}
             */
            colSpan: params => {
              return 0;
            },
            headerCheckboxSelection: params => {
              return false;
            },
            headerClass: params => {
              return ['foo', 'bar', 'baz'];
            },
            field: 'price',
            colId: 'price',
            filter: true,
            /**
             * @param { import('ag-grid-community').ValueGetterParams } params
             **/
            filterValueGetter: params => {
              return params.data['price'];
            },
            filterParams: {},
            floatingFilter: true,
            floatingFilterComponentParams: {},
            // floatingFilterComponent: "",
            // floatingFilterComponentFramework: "",
            sortable: true,
            sort: 'asc',
            unSortIcon: true,
            suppressFiltersToolPanel: true,
            // tooltipField: 'price',
            /**
             * @param { import('ag-grid-community').ITooltipParams } params
             */
            tooltipValueGetter: params => {
              console.group('tooltipValueGetter');
              console.log(params);
              console.groupEnd();

              return params.valueFormatted;
            },
            /**
             * @param { import('ag-grid-community').ValueGetterParams } params
             */
            valueGetter: params => {
              params.context.log(`this is valueGetter`);
              return params.data.price;
            },
            /**
             * @param { import('ag-grid-community').ValueFormatterParams } params
             */
            valueFormatter: params => {
              params.context.log(`this is valueFormatter`);
              return params.value.toFixed(2);
            }
          }
          // {
          //   field: 'model',
          //   filter: true,
          //   sortable: false
          // },
          // {
          //   field: 'price',
          //   filter: true,
          //   sortable: false
          // }
        ],
        rowData: Service.getCars(3),

        // EVENTS
        /**
         * @param { import('ag-grid-community').GridReadyEvent } event
         */
        onGridReady: (event) => {
          // this.gridOptions.api.sizeColumnsToFit();
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
  methods: {},
  components: {
    AgGridVue,
    PlaygroundTemplate
  }
});
</script>

<style lang="scss"
       scoped>

</style>