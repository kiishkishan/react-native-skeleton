/*
 * Cellcard Selfcare Application 10.6.2019
 * Copyright © 2019 Cellcard. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  ScrollView,
  PanResponder,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';

import { slider } from './styles';
import colours from '../../../theme/colours';
import { StandardVectorIcon, StandardText } from '../../../components/atoms';
import { arrowRight, arrowLeft } from '../../vectorIcons';
import { TUTORIAL_IMAGE_RATIO } from '../../../utilities/contants/constants';

const setIndicatorSize = size => ({
  width: size,
  height: size,
  borderRadius: size / 2
});

const setIndicatorColor = color => ({
  backgroundColor: color
});

/**
 * @class SliderContainer
 * @extends {React.Component}
 */
class SliderContainer extends React.Component {
  /**
   * Creates an instance of SliderContainer.
   * @param {any} props
   * @memberof SliderContainer
   */
  constructor(props) {
    super(props);

    this.state = {
      position: 0
    };

    this._getPosition = this._getPosition.bind(this);
    this._movePrev = this._movePrev.bind(this);
    this._moveNext = this._moveNext.bind(this);
    this._move = this._move.bind(this);
    this.renderContentSlider = this.renderContentSlider.bind(this);
    this.renderArrowIndicators = this.renderArrowIndicators.bind(this);
    this.renderIndicators = this.renderIndicators.bind(this);

    props.handleClickOnNextBtn(this._moveNext.bind(this));
  }

  /**
   * update position on state
   * @param {any} prevProps
   * @memberof SliderContainer
   */
  componentWillMount() {
    const release = (e, gestureState) => {
      const width = responsiveWidth(100);
      const relativeDistance = gestureState.dx / width;
      const { vx } = gestureState;

      if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
        this._moveNext();
      } else if (
        relativeDistance > 0.5
        || (relativeDistance > 0 && vx >= 0.5)
      ) {
        this._movePrev();
      }
      return true;
    };

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: () => true,
      onPanResponderEnd: (e, gestureState) => release(e, gestureState)
    });
  }

  /**
   * Creates a reference of SliderContainer.
   * @param {any} ref
   * @memberof SliderContainer
   */
  _onRef(ref) {
    this._ref = ref;
  }

  /**
   * Updates the position on swipe change
   * @param {any} index
   * @memberof SliderContainer
   */
  _move(index) {
    if (!this._ref) {
      return;
    }
    this._ref.scrollTo({
      x: responsiveWidth(100) * index,
      y: 0,
      animated: true
    });

    this.setState({ position: index });
  }

  _movePrev() {
    const { dataSource, onPreviousBtnPress } = this.props;
    const { position } = this.state;

    if (onPreviousBtnPress) {
      onPreviousBtnPress();
    }

    if (position - 1 > -1 && position - 1 < dataSource.length) {
      this._move(position - 1);
    }
  }

  _moveNext() {
    const { dataSource, onStepCompletion, onNextBtnPress } = this.props;
    const { position } = this.state;
    if (position + 1 < dataSource.length) {
      this._move(position + 1);
    } else if (position + 1 === dataSource.length) {
      onStepCompletion();
    }

    if (onNextBtnPress) {
      onNextBtnPress(position + 1);
    }
  }

  /**
   * returns the current position value
   * @return {any}
   * @memberof SliderContainer
   */
  _getPosition() {
    const { position } = this.state;
    return position;
  }

  /**
   * @return {any}
   * @memberof SliderContainer
   */
  renderArrowIndicators(isInvisible) {
    const { dataSource } = this.props;
    const { position } = this.state;
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }}
        {...this._panResponder.panHandlers}
      >
        {position !== 0 && !isInvisible && (
          <StandardVectorIcon
            onPress={this._movePrev}
            name={arrowLeft}
            color={colours.CELLCARD_GRAY}
            size={15}
            style={{
              maxWidth: '40%',
              height: 50,
              marginLeft: 10,
              flexDirection: 'column',
              alignSelf: 'flex-start'
            }}
          />
        )}
        {position !== dataSource.length - 1 && !isInvisible && (
          <StandardVectorIcon
            name={arrowRight}
            onPress={() => this._moveNext()}
            color={colours.CELLCARD_GRAY}
            size={15}
            style={[
              {
                maxWidth: '40%',
                height: 50,
                marginRight: 10,
                marginTop: -50,
                flexDirection: 'column',
                alignSelf: 'flex-end'
              },
              position === 0 ? { marginTop: 0 } : null
            ]}
          />
        )}
      </View>
    );
  }

  /**
   * @param {any} width
   * @param {any} height
   * @return {any}
   * @memberof SliderContainer
   */
  renderContentSlider(width) {
    const { dataSource, locale } = this.props;
    const minHeight = 200;
    const imgUrl = DeviceInfo.isTablet() ? 'largeImgUrl' : 'smallImgUrl';
    const height = DeviceInfo.isTablet()
      ? responsiveHeight(70)
      : responsiveHeight(50);
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        ref={ref => this._onRef(ref)}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={[
          slider.container,
          {
            width,
            minHeight: responsiveHeight(60),
            marginTop: Platform.select({ ios: -10, android: 30 })
          }
        ]}
        // contentContainerStyle={{ backgroundColor: 'green' }}
      >
        {dataSource.map((slide, index) => (
          <View key={`SLIDER-${index * 1}`} style={{ width, minHeight }}>
            <View
              style={{
                width:
                  height
                  * (TUTORIAL_IMAGE_RATIO.width / TUTORIAL_IMAGE_RATIO.height),
                height,
                maxWidth: '90%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                resizeMode="contain"
                source={{
                  uri: slide[imgUrl][locale] ? slide[imgUrl][locale] : ''
                }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <StandardText style={slider.textTitle}>
                {slide.title[locale]}
              </StandardText>
              <StandardText
                containerStyle={{ marginBottom: 20 }}
                style={slider.textCaption}
              >
                {slide.content && slide.content[locale]
                  ? slide.content[locale]
                  : null}
              </StandardText>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }

  /**
   * @param {any} position
   * @return {any}
   * @memberof SliderContainer
   */
  renderIndicators(position) {
    const {
      dataSource,
      indicatorSize,
      indicatorColor,
      indicatorSelectedColor,
      activeIndicatorColor
    } = this.props;
    return (
      <View
        style={[
          slider.layoutIndicator,
          {
            position: 'absolute',
            bottom: 0,
            zIndex: 999
          }
        ]}
      >
        {dataSource.map((slide, index) => (
          <TouchableOpacity
            key={`INDICATOR-${index * 1}`}
            onPress={() => this._move(index)}
            style={[
              [
                slider.indicator,
                setIndicatorSize(indicatorSize),
                setIndicatorColor(indicatorColor)
              ],
              position === index && [
                slider.indicatorSelected,
                setIndicatorSize(indicatorSize + 3),
                setIndicatorColor(
                  activeIndicatorColor || indicatorSelectedColor
                )
              ]
            ]}
          >
            <View />
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  /**
   * render Slider View
   * @return {any}
   * @memberof SliderContainer
   */
  render() {
    const width = responsiveWidth(100);
    const position = this._getPosition();

    return (
      <View style={[slider.container]}>
        {this.renderContentSlider(width)}
        {this.renderIndicators(position)}
        {this.renderArrowIndicators(true)}
      </View>
    );
  }
}

SliderContainer.defaultProps = {
  height: 200,
  indicatorSize: 8,
  indicatorColor: colours.LIGHT_GRAY,
  indicatorSelectedColor: colours.CELLCARD_GRAY,
  scrollEnabled: true,
  arrowSize: 16
};

SliderContainer.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SliderContainer;
