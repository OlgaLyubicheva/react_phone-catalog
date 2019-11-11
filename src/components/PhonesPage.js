/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import PhoneCard from './PhoneCard';
import Filter from './Filter';
import { getPhones } from './loadingData';

const getSortFunc = (value) => {
  const values = value.split('*');
  const field = values[0];
  const sortWay = +values[1];

  switch (field) {
    case 'age':
      return (a, b) => sortWay * (a[field] - b[field]);
    case 'name':
      return (a, b) => sortWay * a[field].localeCompare(b[field]);
    default: return (a, b) => 0;
  }
};

const viewIcons = {
  card: './img/ico/card.svg',
  'card-active': './img/ico/card_active.svg',
  list: './img/ico/list.svg',
  'list-active': './img/ico/list_active.svg',
};

class PhonePage extends React.Component {
  state = {
    phones: [],
    viewCatalog: 'card',
  }

  componentDidMount() {
    getPhones().then(
      (data) => {
        this.setState({
          phones: [...data],
        });
      }
    );
  }

  getFiltredPhones = (values) => {
    let filtredPhones = [];
    const { phones } = this.state;

    if (values.query) {
      filtredPhones = phones.filter(phone => (
        phone.name.toLowerCase().includes(values.query)
      ));
    } else {
      filtredPhones = [...phones];
    }

    if (values.sort) {
      filtredPhones = [...filtredPhones].sort(getSortFunc(values.sort));
    }

    return filtredPhones;
  }

  render() {
    const { search } = this.props.location;
    const { url } = this.props.match;

    const searchValues = {
      query: '',
      sort: '',
    };

    if (search) {
      const partsOfSeach = decodeURI(search).slice(1).split('&');

      for (let i = 0; i < partsOfSeach.length; i += 1) {
        const [key, value] = partsOfSeach[i].split('=');

        searchValues[key] = value;
      }
    }

    const filtredPhones = this.getFiltredPhones(searchValues);
    const { viewCatalog } = this.state;

    return (
      <div className="phones-page">
        <Filter searchValues={searchValues} />

        <div className="phones-page__view-catalog">
          <PhonePage.ViewButton
            vStyle="card"
            current={viewCatalog}
            setView={v => this.setState({ viewCatalog: v })}
          />

          <PhonePage.ViewButton
            vStyle="list"
            current={viewCatalog}
            setView={v => this.setState({ viewCatalog: v })}
          />
        </div>

        <main className={`phone-catalog phone-catalog--${viewCatalog}`}>

          {filtredPhones.map(phone => (
            <PhoneCard
              phone={phone}
              url={`${url}/${phone.id}`}
              view={viewCatalog}
            />
          ))}
        </main>
      </div>
    );
  }
}

PhonePage.ViewButton = ({ vStyle, current, setView }) => (
  <>
    <label htmlFor={vStyle}>
      <img
        src={
          current === vStyle
            ? viewIcons[`${vStyle}-active`]
            : viewIcons[vStyle]
        }
        alt="View grid"
      />
    </label>
    <input
      type="radio"
      id={vStyle}
      value={vStyle}
      checked={current === vStyle}
      onClick={() => (current !== vStyle ? setView(vStyle) : '')}
    />
  </>
);

PhonePage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

PhonePage.ViewButton.propTypes = {
  vStyle: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default PhonePage;
