import { useTimeout }     from '@/helpers';
import carsData           from '@/data/cars.json';
import olympicWinnersData from '@/data/olympic-winners.json';

/**
 * @typedef ICar
 * @property {string} make
 * @property {string} model
 * @property {number} price
 */

/**
 * @typedef IOlympicWinner
 * @property {string} athlete
 * @property {number} age
 * @property {string} country
 * @property {number} year
 * @property {string} date
 * @property {string} sport
 * @property {number} gold
 * @property {number} silver
 * @property {number} bronze
 * @property {number} total
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

  /**
   * @param {number} [count]
   * @returns {IOlympicWinner[]}
   */
  static getOlympicWinner(count = olympicWinnersData.length) {
    return olympicWinnersData.splice(0, count);
  }

  /**
   * @param {number} [count]
   * @param {number} [timeout]
   * @returns {Promise<IOlympicWinner[]>}
   */
  static getOlympicWinnerAsync(count, timeout) {
    return useTimeout(
      Service.getOlympicWinner.bind(undefined, count),
      timeout
    );
  }
}