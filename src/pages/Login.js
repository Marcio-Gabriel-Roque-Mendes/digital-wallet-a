import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../actions/index';

class Login extends Component {
  state = {
    email: '',
    password: '',
    buttonDisabled: true,
  }

  handleChange = (event) => {
    // const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    // referência: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const numeroMin = 6;

    const { name, value } = event.target;
    this.setState({ [name]: value });

    this.setState(({ email, password }) => {
      if (password.length >= numeroMin && email.includes('@') && email.includes('.com')) {
        this.setState({ buttonDisabled: false });
      } else {
        this.setState({ buttonDisabled: true });
      }
    });
  }

  redirect = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(addEmail(email));
    history.push('/carteira');
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    console.log(buttonDisabled);

    // const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;

    return (
      <div>

        <label htmlFor="email-login">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            id="password-login"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>

        <button
          type="button"
          disabled={ buttonDisabled }
          onClick={ this.redirect }
        >
          Entrar

        </button>

      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

Login.propTypes = {
  history: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
