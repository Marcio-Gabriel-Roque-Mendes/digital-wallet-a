import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addValuesExpenses } from '../actions';
import fetchFunction from '../helpersUteis/fetchFunction';

class Form extends Component {
  state = {
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    id: 0,
    exchangeRates: {},
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  requisicaoApi = async () => {
    const cadaMoedaOriginal = (await fetchFunction('https://economia.awesomeapi.com.br/json/all'));

    this.setState({
      exchangeRates: cadaMoedaOriginal,
    }, () => {
      const { dispatch } = this.props;
      const { id } = this.state;
      dispatch(addValuesExpenses(this.state));
      this.setState({
        id: id + 1,
        value: 0,
      });
    });
  }

  render() {
    const { value, currency, description, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>

        <label htmlFor="value-input">
          valor:
          <input
            type="number"
            name="value"
            data-testid="value-input"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>

        <label htmlFor="currency-select">
          Moeda:
          <select
            id="currency-select"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { currencies.map((moeda, index) => (
              <option
                key={ index }
                value={ moeda }
              >
                { moeda }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Metodo de Pagemento:
          <select
            name="method"
            id="method-input"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            name="tag"
            id="tag-input"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description-input">
          Description:
          <input
            type="text"
            name="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.requisicaoApi }
        >
          Adicionar despesa
        </button>

      </div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf().isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet.currencies,
});

export default connect(mapStateToProps, null)(Form);
