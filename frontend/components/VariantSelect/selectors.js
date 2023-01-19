import { createSelector } from 'reselect';
import { getProductVariants } from '@shopgate/pwa-common-commerce/product/selectors/product';
import getConfig from '../../helpers/getConfig';
import { IMAGE_LABEL } from '../../constants';

const {
  imageCharacteristic,
} = getConfig();

/**
 * Checks if the search bar is visible for the current route.
 * @return {boolean}
 */
export const getHasImageCharacteristics = createSelector(
  getProductVariants,
  (variants) => {
    if (!variants) {
      return null;
    }

    const { characteristics = [] } = variants || {};
    if (characteristics.length < 1) {
      return false;
    }

    const colorCharacteristic = characteristics.find(({ label = '' }) => label.toLowerCase() === IMAGE_LABEL);

    return !!colorCharacteristic;
  }
);

export const getProductsVariants = createSelector(
  getProductVariants,
  (variants) => {
    if (!variants) {
      return null;
    }

    const { characteristics = [] } = variants || {};
    if (characteristics.length < 1) {
      return false;
    }

    const characteristic = variants.characteristics.find(char => (
      imageCharacteristic.includes(char.label)
    ));

    if (!characteristic) {
      return null;
    }

    const updateValues = characteristic.values.map((value) => {
      const { additionalProperties } = variants.products.find(p => (
        p.characteristics[characteristic.id] === value.id
      )) || {};
      let property;
      let imageUrl;
      let imageOverlayLabel;

      if (additionalProperties) {
        property = additionalProperties.find(p => p.label === `swatchImage~${value.label}`);

        if (!property) {
          imageUrl = null;
          imageOverlayLabel = null;
        } else {
          imageUrl = property.value;
          imageOverlayLabel = property.label.split('~')[1];
        }
      }

      return {
        ...value,
        imageUrl,
        imageOverlayLabel,
      };
    }).filter(Boolean);

    return {
      ...characteristic,
      values: updateValues,
    };
  }
);
