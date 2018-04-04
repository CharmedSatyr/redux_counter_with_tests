import * as t from '../constants/action-types';
import { INITIAL_COUNT } from '../constants/settings';

const initialState = {
  count: INITIAL_COUNT
};

// state refers to current state when this reducer is called
const counter = (state = initialState.count, action) => {
  switch (action.type) {
    case t.INCREMENT:
      return state + 1;
    case t.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
