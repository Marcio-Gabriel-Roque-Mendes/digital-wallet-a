import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  render() {
    const { email, despesas } = this.props;

    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          {despesas
            .reduce((acc, despesa) => (
              acc + despesa.exchangeRates[despesa.currency]
                .ask * despesa.value), 0).toFixed(2)}

        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
