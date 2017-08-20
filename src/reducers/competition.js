const initialState = {
  loading: true,
	data: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LEAGUE_START':
      return initialState
    case 'FETCH_LEAGUE_SUCCESS':
      return {
        loading: false,
        data: action.payload,
      }
    default: return state
  }
}
