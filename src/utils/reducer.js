import {
  SET_LOADING,
  SET_SUMMONER,
  HANDLE_SEARCH,
  SET_MATCHES,
  SET_MATCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_SUMMONER:
      return { ...state, isLoading: false, summoner: action.payload }
    case SET_MATCHES:
      return { ...state, isLoading: false, matches: action.payload }
    case SET_MATCH:
      return {
        ...state,
        isLoading: false,
        match: [...state.match, action.payload],
      }
    case HANDLE_SEARCH:
      return { ...state, query: action.payload }
    default:
      throw new Error(`No matching ${action.type} action type`)
  }
}

export default reducer
