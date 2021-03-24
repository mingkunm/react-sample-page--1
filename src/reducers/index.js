//
// Reducer
// Store page content & global state
//

const initialState = {
  data: null,
  page: 1,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOAD_DATA":
      return { ...state, data: payload.pages };
    case "SET_PAGE":
      return { ...state, page: payload };
    default:
      return state;
  }
};

export default reducer;
