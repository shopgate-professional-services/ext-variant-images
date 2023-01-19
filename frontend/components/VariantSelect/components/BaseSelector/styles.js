import { css } from 'glamor';
import getConfig from '../../../../helpers/getConfig';

const {
  selectedColor,
} = getConfig();

/**
 * Get box shadow
 * @param {boolean} isSelected Is selector selected
 * @return {string}
 */
const getBoxShadow = (isSelected) => {
  if (!isSelected) {
    return '0 1px 2px 0px rgba(0, 0, 0, 0.15)';
  }
  return `0 0 0 3px ${selectedColor}`;
};

/**
 * Create style for basic selector
 * @param {boolean} isSelected Is selector selected
 * @return {string}
 */
const basicSelect = isSelected => css({
  padding: 0,
  marginRight: 8,
  marginBottom: 8,
  '&:focus': { outline: 0 },
  boxShadow: getBoxShadow(isSelected),
}).toString();

export default { basicSelect };
