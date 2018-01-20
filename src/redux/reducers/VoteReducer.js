const defaultState = {
  votes: {}
};

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    case "UPDATE_VOTES":
      return {
        ...state,
        votes: {
          Mootools: action.data.filter(({ item }) => item === "Mootools")
            .length,
          Prototype: action.data.filter(({ item }) => item === "Prototype")
            .length,
          JQ: action.data.filter(({ item }) => item === "JQ").length,
          Spry: action.data.filter(({ item }) => item === "Spry").length,
          React: action.data.filter(({ item }) => item === "React").length,
          Other: action.data.filter(({ item }) => item === "Other").length
        }
      };
    default:
      return state;
  }
}
