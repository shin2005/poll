const defaultState = {
  votes: {}
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_VOTES': return state
    default: return state;
  }
}
