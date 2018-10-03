import superagent from 'superagent';

export const TOKEN_SET = 'TOKEN_SET';
export const tokenSet = token => ({
  type: TOKEN_SET,
  payload: token,
});

export const TOKEN_DELETE = 'TOKEN_DELETE';
export const tokenDelete = () => ({
  type: TOKEN_DELETE,
});

export const signupRequest = user => dispatch => {
  return superagent.post('http://localhost:5000/signup')
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.body.token));
      return res;
    })
}

export const loginRequest = user => dispatch => {
  return superagent.get('http://localhost:5000/signin')
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.body.token));
      return res;
    })
}

export const logoutRequest = redirect => dispatch => {
  dispatch(tokenDelete());
  redirect();
}
