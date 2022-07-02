import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { despesas } = this.props;
    console.log(despesas.value, 'veja aqui');
    return (
      <table>
        <thead>
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
        </thead>

        <tbody>
          {despesas && despesas.map((despesa) => (
            <tr key={ despesa.value }>
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
            </tr>
          ))}

        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

Table.propTypes = {
  despesas: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(Table);
