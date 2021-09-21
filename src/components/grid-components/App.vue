<template>
  <PlaygroundTemplate
    title="Custom Cell Renderer"
    style="width: 100%;height: 100%;"
  >
    <AgGridVue
      style="width: 100%; height: 100%;"
      ref="grid"
      class="ag-theme-alpine"
      :gridOptions="state.gridOptions"
    />
  </PlaygroundTemplate>
</template>

<script>
import Vue                from 'vue';
import { AgGridVue }      from 'ag-grid-vue';
import PlaygroundTemplate from '@/components/PlaygroundTemplate';
import {
  defineGridOptions,
  getDefaultGridOptions
}                         from '@/helpers';
import { Service }        from '@/service';
import MedalCellRenderer  from '@/components/grid-components/MedalCellRenderer';
import TotalValueRenderer from '@/components/grid-components/TotalValueRenderer';
import DateInput          from '@/components/grid-components/DateInput';

export default Vue.extend({
  name: 'cell-renderer-example',
  data() {
    return {
      /** @type { import('ag-grid-community').ICellRendererParams } */
      params: null,
      state: {
        /** @type { import('ag-grid-community').GridOptions } */
        gridOptions: defineGridOptions({
          ...getDefaultGridOptions(),
          defaultColDef: {
            flex: 1,
            sortable: true,
            filter: true,
            resizable: true,
            minWidth: 100,
            suppressMenu: true
          },
          columnTypes: {
            medalColType: {
              cellRendererFramework: 'MedalCellRenderer'
            }
          },
          columnDefs: [
            {
              field: 'athlete'
            },
            // {
            //   field: 'year'
            // },
            {
              field: 'date',
              filter: 'agDateColumnFilter',
              floatingFilter: true
            },
            {
              field: 'gold',
              type: ['medalColType'],
              cellRendererParams: {
                $props: {
                  data: {},
                  backgroundColor: 'gold',
                  color: '#fff'
                }
              }
            },
            {
              field: 'silver',
              type: ['medalColType'],
              cellRendererParams: {
                $props: {
                  backgroundColor: 'silver',
                  color: '#fff'
                }
              }
            },
            {
              field: 'bronze',
              type: ['medalColType'],
              cellRendererParams: {
                $props: {
                  backgroundColor: 'bronze',
                  color: '#fff'
                }
              }
            },
            {
              field: 'total',
              cellRendererFramework: 'TotalValueRenderer'
            }
          ],
          rowData: Service.getOlympicWinner(10),
          frameworkComponents: {
            agDateInput: 'AgDateInput'
          },

          // EVENTS
          onFirstDataRendered: () => {
            this.state.gridOptions.api.sizeColumnsToFit();
          }
        })
      }
    };
  },
  mounted() {
  },
  components: {
    PlaygroundTemplate,
    AgGridVue,
    AgDateInput: DateInput,
    TotalValueRenderer,
    MedalCellRenderer
  }
});
</script>