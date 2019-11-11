import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CatalogContext from './CatalogContext';

const Basket = ({ history }) => {
  const { setStorage } = useContext(CatalogContext);

  const currentBuy = sessionStorage.buy
    && sessionStorage.buy
      .split('&')
      .map(item => item.split('*'));

  let total = (currentBuy || [])
    .map(item => item[1] * item[2])
    .reduce((ac, cur) => ac + cur, 0)
    .toFixed(2);

  if (total > 0) {
    total = total.toString().split('');
    const n = total.length - 3;
    const count = n % 3 !== 0 ? Math.floor(n / 3) : n / 3 - 1;

    for (let i = 1; i <= count; i++) {
      total[n - 3 * i] = `\`${total[n - 3 * i]}`;
    }

    total = total.join('');
  } else {
    total = '0.00';
  }

  const nestNewBuy = (buy) => {
    const newBuy = buy.map(item => item.join('*')).join('&');

    sessionStorage.setItem('buy', newBuy);
  };

  const deleteItem = (id) => {
    const newBuy = currentBuy.filter(item => item[0] !== id);

    sessionStorage.removeItem(id);

    if (newBuy.length !== 0) {
      nestNewBuy(newBuy);
    } else {
      sessionStorage.removeItem('buy');
    }

    setStorage(prevBasket => prevBasket - 1);
  };

  const increase = (id) => {
    const newBuy = [...currentBuy];
    const index = currentBuy.indexOf(id);

    newBuy[index] = [id[0], +id[1] + 1, id[2]];

    nestNewBuy(newBuy);

    history.replace(history.location);
  };

  const decrease = (id) => {
    const newBuy = [...currentBuy];
    const index = currentBuy.indexOf(id);

    if (+id[1] - 1 !== 0) {
      newBuy[index] = [id[0], +id[1] - 1, id[2]];

      nestNewBuy(newBuy);

      history.replace(history.location);
    } else {
      deleteItem(id[0]);
    }
  };

  return (
    <div className="basket">
      <ul className="basket__list">
        {
          currentBuy
            ? currentBuy.map((item, index) => (
              <li className="basket__list-item">
                {/* <img
                  className="basket__list--img"
                  src={`./img/phones/${item[0]}.0.jpg`}
                  alt={sessionStorage[item[0]]}
                /> */}

                <div className="basket__list-title">
                  <span>
                    {`${index + 1}.  `}
                  </span>

                  <img
                    className="basket__list-img"
                    src={`./img/phones/${item[0]}.0.jpg`}
                    alt={sessionStorage[item[0]]}
                  />

                  <Link
                    to={`/phones/${item[0]}`}
                    className=""
                  >
                    {sessionStorage[item[0]]}
                  </Link>
                </div>

                <div>
                  <span className="phone-card__cost">
                    {item[2]}
                  </span>

                  <div>
                    <button
                      type="button"
                      onClick={() => decrease(item)}
                    >
                      -
                    </button>

                    <span className="basket__count">
                      {item[1]}
                    </span>

                    <button
                      type="button"
                      onClick={() => increase(item)}
                    >
                      +
                    </button>

                    <button
                      className="basket__delete"
                      type="button"
                      onClick={() => deleteItem(item[0])}
                    >
                      x
                    </button>
                  </div>
                </div>

              </li>
            ))
            : (
              <div className="basket__empty">
                Cart is empty
              </div>
            )
        }
      </ul>
      <div className="basket__total">
        <span>Total sum: </span>
        {total}
        <div className="pay-button">
          {
            total !== '0.00'
            && <button type="button" className="add-button">Pay</button>
          }
        </div>
      </div>
    </div>
  );
};

Basket.Count = ({ countOfItem }) => (
  countOfItem !== 0 && (
    <div className="header__basket-count">
      {countOfItem}
    </div>
  )
);

Basket.AddButton = ({ phone }) => {
  const addToBasket = (id, name, cost, setStorage) => {
    if (sessionStorage.getItem('buy')) {
      sessionStorage.buy += `&${id}*1*${cost}`;
    } else {
      sessionStorage.buy = `${id}*1*${cost}`;
    }

    sessionStorage.setItem(id, name);

    setStorage(prevBasket => prevBasket + 1);
  };

  return (
    <CatalogContext.Consumer>
      {
        ({ setStorage }) => (
          <button
            type="button"
            disabled={sessionStorage.getItem(phone.id) && true}
            className="add-button"
            onClick={() => addToBasket(phone.id, phone.name, 999999.99, setStorage)}
          >
            {
              sessionStorage.getItem(phone.id)
                ? 'In cart'
                : 'Buy'
            }
          </button>
        )
      }
    </CatalogContext.Consumer>
  );
};

Basket.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

Basket.AddButton.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Basket;
