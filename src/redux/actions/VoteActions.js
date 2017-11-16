import request from 'axios';
import URL from '../../constants/URL';

export const getVote = topic => async(dispatch) => {
  try {
    const {data} = await request.get(`${URL}/votes`, {topic})
    return dispatch({
      type: 'UPDATE_VOTES',
      data
    })
  } catch (error) {
    console.error(error)
  }
}

export const postVote = votedItem => async(dispatch) => {
  try {
    const {data} = await request.post(`${URL}/votes`, {votedItem})
    return dispatch({
      type: 'UPDATE_VOTES',
      data
    })
  } catch (error) {
    console.error(error)
  }
}
