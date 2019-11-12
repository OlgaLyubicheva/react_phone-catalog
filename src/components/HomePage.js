import React, { useState } from 'react';

const sliders = [
  'https://www.ridus.ru/images/2018/12/14/856347/in_article_ac4d4b4b3b.jpg',
  'https://images.product-test.ru/imageresizer/files/d5564816-b9a8-4e21-92f6-03e8f0611f23_600.jpg',
  'https://bigpicture.ru/wp-content/uploads/2017/03/smartf2.jpg',
  'http://www.medlinks.ru/images/art/all25/111308.jpg',
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

HomePage.Dot = ({slide, index, check}) => (
  <input
    type="radio"
    name="slider"
    checked={index === slide}
    onClick={() => { if (index !== slide) { check(slide); } }}
  />
);

export default HomePage;
