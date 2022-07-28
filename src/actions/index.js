export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_VALUES_CURRENCY = 'ADD_VALUES_CURRENCY';
export const ADD_VALUES_EXPENSES = 'ADD_VALUES_EXPENSES';
export const REM_DESPESAS = 'REM_DESPESAS';
export const EDIT_DESPESAS = 'EDIT_DESPESAS';
export const SAVE_DESPESAS = 'SAVE_DESPESAS';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addValuesCurrency = (currencies) => ({
  type: ADD_VALUES_CURRENCY,
  currencies,
});

export const addValuesExpenses = (expenses) => ({
  type: ADD_VALUES_EXPENSES,
  expenses,
});

export const remDespesas = (id) => ({
  type: REM_DESPESAS,
  id,
});

export const editDespesas = (id) => ({
  type: EDIT_DESPESAS,
  id,
});

export const saveDespesas = ({ value, currency, method, tag, description, id }) => ({
  type: SAVE_DESPESAS,
  value,
  currency,
  method,
  tag,
  description,
  id,
});
