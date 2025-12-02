import { registerVersion } from "firebase/app";
import "./App.css";
import logo from "./assets/frontend-simplified-logo.png";
import React from "react";
import { auth } from "./firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBars);
function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  //Sign up
  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Sign in
  function login() {
    console.log("login");
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Sign out
  // function logout() {
  //   console.log("logout");
  //   signOut(auth);
  //   setUser({});
  // }

  return (
    <div className="App">
      <header>
        <div className="row">
          <nav>
            <div className="fes__header">
              <div>
                <FontAwesomeIcon icon="bars" />
              </div>

              <figure>
                <img src={logo} className="header__img"></img>
              </figure>
            </div>
            <div className="fes__header fes__nav">
              {
                user?              <>
                <button className="btn" onClick={login}>Login</button>
                <button className="btn account__register" onClick={register}  >Register</button>
              </>
              :                 <div className="login__user--logo">
                  <h2>{loading ? "Loading..." : user.email[0]}</h2>
                </div>
              }

              {/* <button onClick={logout}>Logout</button> */}

            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
