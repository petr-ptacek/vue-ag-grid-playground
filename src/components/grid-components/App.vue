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
import Vue                         from 'vue';
import { AgGridVue }               from 'ag-grid-vue';
import PlaygroundTemplate          from '@/components/PlaygroundTemplate';
import {
  defineGridOptions,
  getDefaultGridOptions
}                                  from '@/helpers';
import { Service }                 from '@/service';
import MedalCellRenderer           from '@/components/grid-components/MedalCellRenderer';
import TotalValueRenderer          from '@/components/grid-components/TotalValueRenderer';
import AgDateInput                 from '@/components/grid-components/AgDateInput';
import AgTextColumnFilter          from '@/components/grid-components/AgTextColumnFilter';
import AgTextColumnFloatingFilter  from '@/components/grid-components/AgTextColumnFloatingFilter';
import AgDateColumnFilter          from '@/components/grid-components/AgDateColumnFilter';
import { defineDatepickerOptions } from '@/components/Datepicker/defineDatepickerOptions';

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
            filter: 'agTextColumnFilter',
            resizable: true,
            minWidth: 100,
            suppressMenu: true,
            floatingFilterComponentParams: {
              suppressFilterButton: true
            }
          },
          columnTypes: {
            medalColType: {
              cellRendererFramework: 'MedalCellRenderer'
            }
          },
          columnDefs: [
            {
              field: 'athlete',
              filter: 'agTextColumnFilter',
              floatingFilter: true,
              floatingFilterComponentFramework: AgTextColumnFloatingFilter,
              floatingFilterComponentParams: {
                suppressFilterButton: true
              }
            },
            // {
            //   field: 'year'
            // },
            {
              field: 'date',
              filter: 'agDateColumnFilter',
              filterParams: {
                $datepickerOptions: defineDatepickerOptions({
                  disabled: false
                })
              },
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
          },
          onFilterChanged: (event) => {
            console.log('onFilterChanged');
            debugger
          }
        })
      }
    };
  },
  mounted() {
  },
  components: {
    AgDateInput,
    AgTextColumnFilter,
    // AgTextColumnFloatingFilter,
    AgDateColumnFilter,
    PlaygroundTemplate,
    AgGridVue,
    TotalValueRenderer,
    MedalCellRenderer
  }
});
</script>