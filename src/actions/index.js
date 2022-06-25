export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_VALUES_CURRENCY = 'ADD_VALUES_CURRENCY';
export const ADD_VALUES_EXPENSES = 'ADD_VALUES_EXPENSES';

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
