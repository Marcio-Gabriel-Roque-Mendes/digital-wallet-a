export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_VALUES_CURRENCY = 'ADD_VALUES_CURRENCY';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addValuesCurrency = (currencies) => ({
  type: ADD_VALUES_CURRENCY,
  currencies,
});
