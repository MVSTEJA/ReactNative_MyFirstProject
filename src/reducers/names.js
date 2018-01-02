import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from './../actions/actionTypes';
import placeImage from './../assets/beautiful-place.jpg';

const intialState = {
  output: '',
  names: [],
  selectedName: null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        names: state.names.concat({
          key: Math.random(),
          name: action.name,
          image: placeImage,
        }),
      };
    case DELETE_PLACE:
      return {
        ...state,
        names: state.names.filter(name => name.key !== state.selectedName.key),
        selectedName: null,
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedName: state.names.find(name => name.key === action.nameKey),
      };
    case UNSELECT_PLACE:
      return {
        ...state,
        selectedName: null,
      };

    default:
      return state;
  }
};

export default reducer;
