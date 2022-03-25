import { getCountryReducer } from '../redux/covid/Covid';

describe('When we give wrong action in detailsReducer ', () => {
  test('when the action is wrong, we return the same state with no changes', () => {
    const state = [];

    const WRONG_ACTION = 'stock-performance/home/WRONG_ACTION';
    const action = { type: WRONG_ACTION, payload: state };
    // act
    const result = getCountryReducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
