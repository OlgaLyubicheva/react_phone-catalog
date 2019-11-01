import React from 'react';
import PropTypes from 'prop-types';

const PhoneDetails = ({ phone }) => {
  const propertys = [
    ['android', 'Android'],
    ['battery', 'Battery'],
    ['camera', 'Camera'],
    ['connectivity', 'Connectivity'],
    ['storage', 'Storage'],
    ['hardware', 'Hardware'],
    ['sizeAndWeight', 'Size & Weight'],
  ];

  const typeOfValues = (value) => {
    switch (typeof value) {
      case 'boolean':
        return (value && 'Yes') || (!value && 'No');
      case 'object':
        return value.join(', ');
      default:
        return value;
    }
  };

  return (
    <details className="phone-details" open>
      <summary>
        <h3>Specification</h3>
      </summary>
      {
        phone.length !== 0
          && (
            <dl className="phone-details__tabl">
              {
                propertys.map(prop => (
                  <>
                    <dt>
                      <b>{prop[1]}</b>

                      <dd>
                        {
                          Object.entries(phone[prop[0]]).map(values => (
                            <div>
                              <span>{values[0]}</span>
                              <div className="dash" />
                              <span>{typeOfValues(values[1])}</span>
                            </div>
                          ))
                        }
                      </dd>
                    </dt>
                  </>
                ))
              }
            </dl>
          )
      }
    </details>
  );
};

PhoneDetails.propTypes = {
  phone: PropTypes.shape({
    android: PropTypes.object,
    battery: PropTypes.object,
    camera: PropTypes.object,
    connectivity: PropTypes.object,
    storage: PropTypes.object,
    hardware: PropTypes.object,
    sizeAndWeight: PropTypes.object,
  }).isRequired,
};

export default PhoneDetails;
