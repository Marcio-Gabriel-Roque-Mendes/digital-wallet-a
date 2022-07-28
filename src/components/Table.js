import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remDespesas, editDespesas } from '../actions/index';

class Table extends Component {
  // onButtonCLick = (atributo) => {
  //   atributo.splice();
  // }

  render() {
    const { despesas, dispatch } = this.props;
    console.log(despesas.value, 'veja aqui');
    return (
      <table>
        <thead>
          <tr>
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </thead>

        <tbody>
          {despesas && despesas.map((despesa) => (
            <tr key={ `${despesa.id} ${despesa.description}` }>
              <td>
                {despesa.description }
              </td>
              <td>
                { despesa.tag}
              </td>
              <td>
                {despesa.method}
              </td>
              <td>
                {Number(despesa.value).toFixed(2)}
              </td>
              <td>
                {despesa.exchangeRates[despesa.currency].name.split('/')[0]}
              </td>
              <td>
                {(parseFloat(despesa.exchangeRates[despesa.currency].ask)).toFixed(2)}
              </td>
              <td>
                {(parseFloat(despesa.value
                     * despesa.exchangeRates[despesa.currency].ask)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => dispatch(remDespesas(despesa.id)) }
                >
                  Excluir

                </button>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => dispatch(editDespesas(despesa.id)) }
                >
                  Editar

                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
  // remDespesas: state.wallet.expenses,
});

Table.propTypes = {
  despesas: PropTypes.arrayOf().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
