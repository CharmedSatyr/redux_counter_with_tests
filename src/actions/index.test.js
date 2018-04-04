import * as actions from './index';
import * as t from '../constants/action-types';

describe('increment', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = {
      type: t.INCREMENT
    };
    expect(actions.increment()).toEqual(expectedAction);
  });
});

describe('decrement', () => {
  it('should create an action to decrement the counter', () => {
    const expectedAction = {
      type: t.DECREMENT
    };
    expect(actions.decrement()).toEqual(expectedAction);
  });
});
