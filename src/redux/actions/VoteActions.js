import request from 'axios';
import URL from '../../constants/URL';

export const getVote = () => async (dispatch) => {
  try {
    const { data } = await request.get(`${URL}/vote`)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export const postVote = () => async (dispatch) => {
  try {
    const { data } = await request.post(`${URL}/vote`)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
