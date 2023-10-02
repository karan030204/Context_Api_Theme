import React, { useReducer, useState } from "react";

//It is pure function which will return the new state after doing the specified action
const reducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.fieldname]: action.payload,
      };
    case "login":
      return {
        ...state,
        error: "",
        isLoading: true,
      };

    case "success":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "error":
      return {
        ...state,
        error: "Incorrect Username and Password",
        isLoading: false,
        username: "",
        password: "",
      };

    case "logout":
      return {
        ...state,
        username: "",
        password: "",
        isLoading: false,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default function LoginUseState() {
  const initialState = {
    username: "",
    password: "",
    isLoading: false,
    error: "",
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("this is state", state);

  console.log("this is username bro : ", state["username"]);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoading, showLoader] = useState(false);
  // const [error, setError] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "login",
    });

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state.username === "karan" && state.password === "dattani") {
            resolve();
          } else {
            reject();
          }
        }, 1000);
      });
      dispatch({
        type: "success",
      });
    } catch (error) {
      dispatch({
        type: "error",
      });
    }
  };

  // e.preventDefault();
  // setError("");
  // showLoader(true);
  // try {
  //   await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (username === "ejiro" && password === "password") {
  //         resolve();
  //       } else {
  //         reject();
  //       }
  //     }, 1000);
  //   });
  //   setIsLoggedIn(true);
  // } catch (error) {
  //   setError("Incorrect username or password!");
  //   showLoader(false);
  //   setUsername("");
  //   setPassword("");
  // }

  return (
    <div className="App">
      <div className="login-container">
        {state.isLoggedIn ? (
          <>
            <h1>Welcome {state.username}!</h1>
            <button
              onClick={() =>
                dispatch({
                  type: "logout",
                })
              }
            >
              Log Out
            </button>
            {/* <button onClick={() => setIsLoggedIn(false)}>Log Out</button> */}
          </>
        ) : (
          <form
            className="form"
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            {state.error && <p className="error">{state.error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={state.username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldname: "username",
                  payload: e.target.value,
                })
              }
              // onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldname: "password",
                  payload: e.target.value,
                })
              }
              // onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button
              className="submit"
              type="submit"
              disabled={state.isLoading}

              // onClick={(e) =>{e.preventDefault()}
              // dispatch({
              //   type: "loading",
              //   fieldname: "isLoading",
              // })
              // }
            >
              {state.isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
