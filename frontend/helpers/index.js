import getConfigMain from './getConfig';

/**
 * Test a value for being null or an empty array
 * @param {*} testValue Value to test for being null or an empty array
 * @return {boolean}
 */
export const isNullOrAnEmptyArray = testValue =>
  (!testValue || !Array.isArray(testValue) || testValue.length < 1);

export const getConfig = getConfigMain;
