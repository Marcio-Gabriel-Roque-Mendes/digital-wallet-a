import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    password: '',
    buttonDisabled: true,
  }

  handleChange(event) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    // referência: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const seis = 6;

    const { name, value } = event.target;
    this.setState({ [name]: value },

      this.setState(({ email, password }) => {
        if (password.length >= seis && emailRegex.test(email)) {
          this.setState({ buttonDisabled: false });
        }
        this.setState({ buttonDisabled: true });
      }));
  }

  render() {
    const { email, password, buttonDisabled } = this.state;

    return (
      <div>
        <form>
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

          <button type="button" disabled={ buttonDisabled }>Entrar</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

// User.propTypes = {
//   user: PropTypes.string.isRequired,
// };

export default Login;
