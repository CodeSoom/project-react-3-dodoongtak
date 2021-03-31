import { createSlice } from '@reduxjs/toolkit';

import { initialUserField } from '../fixtures/initials';

import { saveItem } from '../services/storage';

const { actions, reducer } = createSlice({
  name: 'applications',
  initialState: {
    userFields: {
      ...initialUserField,
    },
  },
  reducers: {
    setUserFields(state, { payload: userFields }) {
      const profile = {
        ...userFields,
        isNew: false,
      };

      saveItem('profile', JSON.stringify(profile));

      return {
        ...state,
        userFields: profile,
      };
    },

    changeUserFields(state, { payload: { name, value } }) {
      return {
        ...state,
        userFields: {
          ...state.userFields,
          [name]: value,
        },
      };
    },

  },
});

export const { setUserFields, changeUserFields } = actions;

export default reducer;
