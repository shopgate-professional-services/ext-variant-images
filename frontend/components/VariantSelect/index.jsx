import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withPageProductId, withProductContext } from '@shopgate-ps/pwa-extension-kit/connectors';
import { ProductCharacteristics } from '@shopgate-ps/pwa-extension-kit/components';
import { i18n } from '@shopgate/engage/core';
import I18n from '@shopgate/pwa-common/components/I18n';
import { isImageSwatch } from './helpers';
import TileSelector from './components/TileSelector';
import ImageSwatchSelector from './components/ImageSwatchSelector';
import connector from './connector';
import styles from './styles';

/**
 * VariantSelect component
 * @param {Object} props Component props
 * @return {JSX}
 */
class VariantSelect extends Component {
  static propTypes = {
    children: PropTypes.node,
    hasImageCharacteristics: PropTypes.bool,
    productContext: PropTypes.shape({
      variantId: PropTypes.string,
    }),
    productVariants: PropTypes.shape(),
  };

  static defaultProps = {
    children: null,
    hasImageCharacteristics: false,
    productContext: {
      variantId: null,
    },
    productVariants: null,
  };

  /**
   * @param {Object} props props
   */
  constructor(props) {
    super(props);

    this.state = {
      hasImageCharacteristics: props.hasImageCharacteristics,
    };
  }

  /**
   * Make sure hasImageCharacteristics stays true forever
   * @param {Object} nextProps nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (
      this.props.hasImageCharacteristics === false &&
      nextProps.hasImageCharacteristics === true
    ) {
      this.setState({
        hasImageCharacteristics: true,
      });
    }
  }

  /**
   * @param {Object} characteristics Characteristics object
   * @param {Object} value Value Object
   * @return {Object}
   */
  prepareSelectorProps = (characteristics, value) => {
    const {
      id: characteristicsId, select, selected, highlight,
    } = characteristics;
    return {
      key: value.id,
      characteristicsId,
      isSelected: value.id === selected,
      select,
      value,
      highlight,
    };
  };

  /**
   * Create selectors
   * @param {Object} characteristics Characteristics object
   * @return {JSX}
   */
  createSelections = (characteristics) => {
    const { values, disabled } = characteristics;
    const isParentProduct = this.props.productContext.variantId === null;
    const variantImages = this.props.productVariants.values;

    const indexOfFirstSelectableValue = values.findIndex(value => value.selectable === true);
    return values.map((value, index) => {
      const variantImage = variantImages.find(({ id }) => id === value.id).imageUrl;

      const shouldPreselect = isParentProduct && !disabled && indexOfFirstSelectableValue === index;
      if (isImageSwatch(characteristics, value)) {
        return (<ImageSwatchSelector
          imageUrl={variantImage}
          {...this.prepareSelectorProps(characteristics, value)}
          preselect={shouldPreselect}
        />);
      }

      return (<TileSelector
        {...this.prepareSelectorProps(characteristics, value)}
        preselect={shouldPreselect}
      />);
    });
  };

  createHeadline = (props, headlineId) => {
    const selected = props.values.find(value => value.id === props.selected);
    const ariaLabel = `${i18n.text('variantImages.select_a')} ${props.label}`;
    const headline = !selected ?
      (
        <h1
          className={styles.headline}
          aria-label={ariaLabel}
          id={headlineId}
        >
          <I18n.Text string="variantImages.select_a" />
          {props.label}
        </h1>
      ) :
      (
        <h1
          className={styles.headline}
          aria-label={ariaLabel}
          id={headlineId}
        >
          {props.label}
          :
          {selected.label}
        </h1>
      );

    return headline;
  };

  /**
   * Create an id for headline
   * @param {string} id Option id
   * @param {string} label Option label
   * @param {Object[]} values Option values
   * @return {string}
   */
  createHeadlineId = ({ id = '', label = '', values = [] }) => (
    `${id}-${label.replace(/\W/g, '')}-${values.map(value => value.id || '').join('-')}`
  );

  /**
   * Render selector group
   * @param {Object} props Props for renderer
   * @return {JSX}
   */
  renderer = (props) => {
    const wrapperClassNames = [styles.outsideWrapper];

    if (props.highlight) {
      wrapperClassNames.push(styles.outsideWrapperHighlighted);
    }
    const headlineId = this.createHeadlineId(props);

    return (
      <div className={wrapperClassNames.join(' ')} key={props.key} ref={props.charRef}>
        {this.createHeadline(props, headlineId)}
        <div className={styles.selectorWrapper} role="radiogroup" aria-labelledby={headlineId}>
          {this.createSelections(props)}
        </div>
      </div>
    );
  };

  /**
   * Render component jsx
   * @return {JSX|node}
   */
  render() {
    if (!this.state.hasImageCharacteristics) {
      return this.props.children;
    }

    return (
      <ProductCharacteristics render={this.renderer} />
    );
  }
}

export default withPageProductId(withProductContext(connector(VariantSelect)));

