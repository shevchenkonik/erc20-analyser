import { IROIValues, EthAddress } from '../interfaces';

/**
 * Return on Investment (ROI)
 * ROI is a ratio between the net profit and cost of investment resulting from an investment of some resources
 * @param {object} data
 * @returns {number}
 */
function calculateROI(data: IROIValues): number {
  /**
   * ROI = (Current value of investment - cost of investments) / cost of investment
   */
  const result = ((data.cvoi - data.coi) / data.coi) * 100;

  return result;
}

export function GetROI(address: EthAddress): number {
  return 123;
}

/**
 * Sharpe ratio
 * Sharpe ratio is a way to examine the performance of an investment by adjusting for its risk.
 *
 * @param data
 * @returns {any}
 */
export function calculateSharpeRatio<T>(data: T): T {
  return data;
}
