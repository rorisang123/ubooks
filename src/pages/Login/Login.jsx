import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";

export function Login() {
  const history = useHistory();

  // Handling user inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setShowError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setShowError(false);
  };

  const redirectToFeed = <div> Already signed in. redirecting to "/"</div>;

  // Firebase
  const auth = getAuth();
  const user = auth.currentUser;

  // Show spinner when user clicks the submit button
  let actionButton = "Login";
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    actionButton = "";

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setShowError(false);
        history.push("/");
      })
      .catch((error) => {
        setShowError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  let content;

  content = (
    <div className="page" id="loginpage">
      <div className="authpage-banner">
        <span className="authpage-logo-subtitle">THE BISCUITS</span>
      </div>

      <main id="loginpage-body">
        {showError ? (
          <h2 className="login-error-message"> Invalid credentials</h2>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="emailfield">Email</label>
          <input
            className="authpage-textbox"
            type="text"
            name="emailfield"
            value={email}
            onChange={handleEmailChange}
          />

          <label htmlFor="password">Password</label>
          <input
            className="authpage-textbox"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <center>
            <input
              type="submit"
              value={actionButton}
              className="authpage-submit-button"
            />
          </center>
        </form>
      </main>

      <div className="authpage-footer">
        <p>
          Don't have an account?{" "}
          <span style={{ textDecoration: "none" }}>
            <Link to="/signup">
              <u>Signup</u>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      {user ? (
        <div>Already sign in. Navigate to "/"{history.push("/")}</div>
      ) : (
        content
      )}
    </>
  );
}
