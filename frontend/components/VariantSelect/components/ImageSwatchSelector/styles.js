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

const label = css({
  fontSize: '0.5rem',
  maxWidth: imageSize,
  margin: '5px 0px 5px 0px',
  paddingLeft: '4px',
  paddingRight: '4px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export default {
  image,
  unselectable,
  label,
};
