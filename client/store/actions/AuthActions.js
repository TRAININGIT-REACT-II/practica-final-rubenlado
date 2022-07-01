

export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const LOGIN_CONFIRMED_ACTION=  '[login action] confirmed login';
export const LOGOUT_ACTION = '[Logout action] logout action';

export function signupAction(userName, password) {
    return (dispatch) => {
        fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({
              username: userName,
              password: password
            })
          }).then((res) =>res.json())
          .then((json) => {
            if (json.error != null) {
              //setError(json.error);
            } else {
              //setError("");
              //localStorage.setItem('userInfo', json.token);
              dispatch(confirmedSignupAction(json));
            }
          }
          )
        }
      }
    
      export function loginAction(userName, password, history) {
        
        return (dispatch) => {
          fetch("/api/login", {
              method: "POST",
              body: JSON.stringify({
                username: userName,
                password: password
              })
            }).then((res) =>res.json())
            .then((json) => {
              if (json.error != null) {
                //setError(json.error);
              } else {
                //setError("");
                localStorage.setItem('userToken', json.token);
                dispatch(confirmedLoginAction(json));
                history.push('/menu')
              }
            }
            )
          }
    }

    export function logout(history) {
        localStorage.removeItem('userToken');
        history.push('/login');
        return {
            type: LOGOUT_ACTION,
        };
    }

    export function confirmedSignupAction(payload) {
        return {
            type: SIGNUP_CONFIRMED_ACTION,
            payload,
        };
    }

    export function confirmedLoginAction(payload) {
      return {
          type: LOGIN_CONFIRMED_ACTION,
          payload,
      };
  }
  

