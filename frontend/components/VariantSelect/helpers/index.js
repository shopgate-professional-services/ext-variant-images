import { IMAGE_LABEL } from '../../../constants';

/**
 * Determine if characteristic is a color
 * @param {Object} characteristic Characteristic object
 * @return {boolean}
 */
export const isImageCharacteristic = (characteristic) => {
  const { label = '' } = characteristic;
  return label.trim().toLowerCase() === IMAGE_LABEL;
};

export const isImageSwatch = isImageCharacteristic;
