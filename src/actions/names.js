import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from './actionTypes';

export const addName = name => ({
  type: ADD_PLACE,
  name,
});

export const deleteName = () => ({
  type: DELETE_PLACE,
});

export const selectName = key => ({
  type: SELECT_PLACE,
  nameKey: key,
});

export const deselectName = () => ({
  type: UNSELECT_PLACE,
});
