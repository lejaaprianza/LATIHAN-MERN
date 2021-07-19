const initialState = {
  name: "lej1",
};

const GlobalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return { ...state, name: "Lej Aprianz" };
  }
  return state;
};

export default GlobalReducer;
