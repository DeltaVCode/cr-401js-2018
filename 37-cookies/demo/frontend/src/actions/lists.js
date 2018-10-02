import superagent from 'superagent';

const API_URL = 'http://localhost:5000';

export const LIST_SET = 'LIST_SET';

export const listSet = (lists) => ({
  type: LIST_SET,
  payload: lists,
});

export const listFetch = () =>
  dispatch =>
    superagent.get(`${API_URL}/api/lists`)
      .then(res => {
        dispatch(listSet(res.body));
        return res;
      });
