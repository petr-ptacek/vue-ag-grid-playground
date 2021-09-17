/**
 * @param {Function} cb
 * @param {number} [timeout]
 * @returns {Promise<any>}
 */
export function useTimeout(cb, timeout = 100) {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(cb()),
      timeout
    );
  });
}