import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Basket from './Basket';

const PhoneCard = ({ phone, url, view }) => (
  <div
    className={`phone-card phone-card--${view}`}
    key={phone.id}
  >
    <div className="phone-card__img">
      <img src={`./${phone.imageUrl}`} alt="" />
    </div>

    <div className="phone-card__info">
      <Link to={url}>
        {phone.name}
      </Link>

      <p>
        {phone.snippet}
      </p>
    </div>

    <div className="phone-card__buy">
      <div className="phone-card__cost">
        999`999.99
      </div>
      <Basket.AddButton phone={phone} />
    </div>
  </div>
);

PhoneCard.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    snippet: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  url: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
};

export default PhoneCard;
