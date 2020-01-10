import React, { useState } from 'react';
import PropTypes from 'prop-types';

const sliders = [
  'img/slider/1.jpg',
  'img/slider/2.jpg',
  'img/slider/3.jpg',
  'img/slider/4.jpg',
];
const HomePage = () => {
  const [index, setIndex] = useState(0);

  const newSlide = () => {
    if (index + 1 === sliders.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const onChecke = (i) => {
    clearTimeout(t);
    setIndex(i);
  };

  let t = setTimeout(newSlide, 4000);

  return (
    <div className="home">
      <div className="slider">
        <div className="slider__item">
          <img src={sliders[index]} alt="advertisement" />
        </div>
        <div className="slider__dots">
          <HomePage.Dot slide={0} index={index} check={onChecke} />
          <HomePage.Dot slide={1} index={index} check={onChecke} />
          <HomePage.Dot slide={2} index={index} check={onChecke} />
          <HomePage.Dot slide={3} index={index} check={onChecke} />
        </div>
      </div>
    </div>
  );
};

HomePage.Dot = ({ slide, index, check }) => (
  <input
    type="radio"
    name="slider"
    checked={index === slide}
    onClick={() => {
      if (index !== slide) {
        check(slide);
      }
    }}
  />
);

HomePage.Dot.propTypes = {
  slide: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  check: PropTypes.func.isRequired,
};

export default HomePage;
