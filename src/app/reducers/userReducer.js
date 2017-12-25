const userReducer = (state = {
  name: "Burak",
  age: 27}, action) => {
    switch(action.type) {
        case "SET_NAME":
          state = {
            ...state,
            name:  action.payload,
          };
          console.log(state);

          break;
        case "SET_AGE":
          state = {
            ...state,
            name:  action.payload,
          };

          break;
    }
    return state;
};
export default userReducer;
