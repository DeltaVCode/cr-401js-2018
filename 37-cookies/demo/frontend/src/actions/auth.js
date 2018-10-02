import superagent from 'superagent';

export const TOKEN_SET = 'TOKEN_SET';
export const tokenSet = token => ({
  type: TOKEN_SET,
  payload: token,
});

export const TOKEN_DELETE = 'TOKEN_DELETE';
// TODO: implement logout

export const signupRequest = user => dispatch => {
  return superagent.post('http://localhost:5000/signup')
    .send(user)
    .then(res => {
      var json = res.json();
      dispatch(tokenSet(json.token));
      return res;
    })
}

export const loginRequest = user => dispatch => {
  return superagent.get('http://localhost:5000/signin')
    .auth(user.username, user.password)
    .then(res => {
      var json = res.json();
      dispatch(tokenSet(json.token));
      return res;
    })
}
