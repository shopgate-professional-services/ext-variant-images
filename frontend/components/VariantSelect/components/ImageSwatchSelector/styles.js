import { css } from 'glamor';
import getConfig from '../../../../helpers/getConfig';

const {
  imageSize,
} = getConfig();

/**
 * Generate color swatch style
 * @param {string} imageSrc URL of image source
 * @return {string}
 */
const image = imageSrc => css({
  height: imageSize,
  width: imageSize,
  backgroundImage: `url("${imageSrc}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
}).toString();

const unselectable = css({
  opacity: 0.3,
});

export default {
  image,
  unselectable,
};
