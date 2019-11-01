import React from 'react';
import PropTypes from 'prop-types';
import PhoneCatalog from './PhoneCatalog';
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
  'card': './img/ico/card.svg',
  'card-active': './img/ico/card_active.svg',
  'list': './img/ico/list.svg',
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
          <label htmlFor="grid">
            <img src={viewCatalog === 'card' ? viewIcons["card-active"] : viewIcons.card} alt="View grid"/>
          </label>
          <input
            type="radio"
            id="grid"
            value="card"
            checked={viewCatalog === 'card'}
            onClick={() => (viewCatalog !== 'card' ? this.setState({ viewCatalog: 'card' }) : '')}
          />

          <label htmlFor="line">
            <img src={viewCatalog === 'list' ? viewIcons["list-active"] : viewIcons.list} alt="View grid"/>
          </label>
          <input
            type="radio"
            id="line"
            value="list"
            checked={viewCatalog === 'list'}
            onClick={() => (viewCatalog !== 'list' ? this.setState({ viewCatalog: 'list' }) : '')}
          />
        </div>

        <div>
          <PhoneCatalog phones={filtredPhones} view={viewCatalog} />
        </div>
      </div>
    );
  }
}

PhonePage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default PhonePage;
