"use client";
import style from "./login.module.css";
import username from "./username-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
function Login() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    username: null,
    password: null,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "name": {
        return {
          username: action.name,
          password: state.password,
        };
      }

      case "pass": {
        return {
          username: state.username,
          password: action.password,
        };
      }
    }
  }

  async function submitHandler(event) {
    event.preventDefault();
    // console.log(state.username, state.password);
    // const promise = await fetch("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify(state),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await promise.json();
    // console.log(data);
    const username = state.username;
    const password = state.password;
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
      // callbackUrl: "/admin",
    });
    if (!result.error) {
      router.push("/");
    }
  }

  return (
    <div className={style.main}>
      <div className={style.mainform}>
        <div className={style.login}>Login</div>

        <div>
          <form onSubmit={submitHandler}>
            <div className={style.nameborder}>
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  color: "rgba(85,86,88,0.8)",
                  marginRight: "15px",
                  fontSize: "20px",
                }}
              />
              <input
                className={style.name}
                name="name"
                placeholder="Username"
                type="text"
                onChange={(e) => {
                  dispatch({
                    type: "name",
                    name: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className={style.passborder}>
              <FontAwesomeIcon
                icon={faLock}
                style={{
                  color: "rgba(85,86,88,0.8)",
                  marginRight: "15px",
                  fontSize: "20px",
                }}
              />
              <input
                className={style.password}
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  dispatch({
                    type: "pass",
                    password: e.target.value,
                  });
                }}
              ></input>
            </div>
            <input
              type="submit"
              name="login"
              value="Login"
              className={style.loginbutton}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
