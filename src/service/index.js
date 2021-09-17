import { useTimeout } from '@/helpers';
import carsData       from '@/data/cars.json';

/**
 * @typedef ICar
 * @property {string} make
 * @property {string} model
 * @property {number} price
 */

export class Service {
  /**
   * @param {number} [count]
   * @returns {ICar[]}
   */
  static getCars(count = carsData.length) {
    return carsData.slice(0, count);
  }

  /**
   * @param [count]
   * @param [timeout]
   * @returns {Promise<ICar[]>}
   */
  static getCarsAsync(count, timeout) {
    return useTimeout(
      Service.getCars.bind(undefined, count),
      timeout
    );
  }
}