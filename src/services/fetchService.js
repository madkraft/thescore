const baseUrl = 'http://api.football-data.org/v1';

export const fetchCompetition = (id, part) => {
  return (dispatch) => {
    dispatch({type: 'FETCH_LEAGUE_START'})
    fetch(`${baseUrl}/competitions/${id}/${part}`, {
      headers: {
        'X-Auth-Token': '6361b22678c9489a837087e19ae65447'
      }
    })
      .then(res => res.json())
      .then(competition => {
        dispatch({type: 'FETCH_LEAGUE_SUCCESS', payload: competition})
      })
      .catch(err => console.error(err))
  }
};
