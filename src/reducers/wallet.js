import { ADD_VALUES_CURRENCY,
  ADD_VALUES_EXPENSES, EDIT_DESPESAS, REM_DESPESAS, SAVE_DESPESAS } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

console.log(INITIAL_STATE);

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_VALUES_CURRENCY:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_VALUES_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case REM_DESPESAS:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => action.id !== expense.id),
    };
  case EDIT_DESPESAS:
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  case SAVE_DESPESAS:
    return {
      ...state,
      editor: false,
      // idToEdit: action.id,
    };
  default:
    return state;
  }
};

export default wallet;
