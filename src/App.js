import React, { useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import CatalogContext from './components/CatalogContext';
import HomePage from './components/HomePage';
import PhonesPage from './components/PhonesPage';
import NotFoundPage from './components/NotFoundPage';
import PhoneDetailsPage from './components/PhoneDetailsPage';
import Basket from './components/Basket';

const App = () => {
  const [basketStorage, setStorage] = useState(() => {
    const countBasketItems
      = sessionStorage.buy ? sessionStorage.buy.split('&').length : 0;

    return countBasketItems;
  });

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li>
              <NavLink
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/phones">
                Phones
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header__basket">
          <NavLink to="/basket">
            <img src="./img/ico/cart-icon.png" alt="The buy basket" />
          </NavLink>
        </div>

        <Basket.Count countOfItem={basketStorage} />
      </header>

      <div className="page">
        <CatalogContext.Provider value={{ setStorage }}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/phones/:phoneId" component={PhoneDetailsPage} />
            <Route path="/phones" component={PhonesPage} />
            <Route path="/basket" component={Basket} />
            <Route component={NotFoundPage} />
          </Switch>
        </CatalogContext.Provider>
      </div>

      <footer className="footer">
        <p>
          Liubicheva Olga
        </p>
        <p>2019</p>
      </footer>
    </>
  );
};

export default App;
