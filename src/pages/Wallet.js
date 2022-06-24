import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import fetchFunction from '../helpersUteis/fetchFunction';
import { addValuesCurrency } from '../actions/index';

class Wallet extends React.Component {
  async componentDidMount() {
    const cadaMoeda = Object.keys(await fetchFunction());
    const removeUSDT = cadaMoeda.filter((moedas) => moedas !== 'USDT');
    // const cadaMoedaAtualizado = cadaMoeda;
    console.log(removeUSDT);

    const { dispatch } = this.props;
    dispatch(addValuesCurrency(removeUSDT));
  }

  // export function fetchDog() {
  //   return (dispatch) => {
  //     dispatch(requestDog());
  //     return fetch('https://dog.ceo/api/breeds/image/random')
  //     .then(response => response.json())
  //     .then(json => dispatch(getImage(json)))
  //     .catch(error => dispatch(failedRequest(error)))
  //   }
  // }
  render() {
    return <div><HeaderWallet /></div>;
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
