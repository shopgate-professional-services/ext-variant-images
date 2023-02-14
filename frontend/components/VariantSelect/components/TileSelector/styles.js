import { css } from 'glamor';

const tile = css({
  height: 50,
  width: 100,
  backgroundColor: '#F1F2F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}).toString();

const unselectable = css({
  opacity: 0.3,
});

export default { tile, unselectable };
