import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { email: state.user.email };
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
