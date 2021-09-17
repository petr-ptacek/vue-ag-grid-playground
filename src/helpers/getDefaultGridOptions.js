/**
 * @typedef {import('ag-grid-community').GridOptions} GridOptions
 */

/**
 * @returns {GridOptions}
 */
export function getDefaultGridOptions() {
  /**
   * @type {GridOptions}
   */
  const gridOptions = {
    suppressContextMenu: true,
    preventDefaultOnContextMenu: true,
    suppressCellSelection: true,
    rowDeselection: true,
    rowSelection: 'single'
  };

  return gridOptions;
}