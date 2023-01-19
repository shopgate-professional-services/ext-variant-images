import { css } from 'glamor';

const variantSelectBounce = css.keyframes('variantSelectBounce', {
  '0%': { transform: 'translate3d(0, 0, 0)' },
  '50%': { transform: 'translate3d(0, 0, 0)' },
  '60%': { transform: 'translate3d(10px, 0, 0)' },
  '80%': { transform: 'translate3d(-10px, 0, 0)' },
  '100%': { transform: 'translate3d(0, 0, 0)' },
});

const selectorWrapper = css({
  paddingLeft: 10,
  display: ['flex'],
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
}).toString();

const headline = css({
  fontWeight: 400,
  margin: 10,
}).toString();

const outsideWrapper = css({
  padding: '0px 3px',
  margin: '3px 0',
}).toString();

const sizeHeadlineWrapper = css({
  position: 'relative',
}).toString();

const outsideWrapperHighlighted = css({
  animation: `${variantSelectBounce} 1s`,
  ' h1': {
    color: 'red',
  },
}).toString();

export default {
  selectorWrapper,
  outsideWrapper,
  outsideWrapperHighlighted,
  headline,
  sizeHeadlineWrapper,
};
