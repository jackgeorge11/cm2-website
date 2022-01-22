import React, { useState } from "react";
import RadioButton from "./common/RadioButton";

export default function BetaForm({ success, shrunk }) {
  const [isSubmitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [email, setEmail] = useState("");

  const handleConsent = () => {
    setConsent((prev) => !prev);
  };

  const handleSubmit = () => {
    if (email) {
      setLoading(true);
      window.Email.send({
        SecureToken: "29b06643-50e2-4725-8e5c-7df6c59e7433",
        Username: "no-reply@cm2.co.uk",
        To: "hello@cm2.co.uk",
        From: "no-reply@cm2.co.uk",
        Subject: `Beta Test Sign Up`,
        Body: `${email} would like to sign up to become a ConnecMe2 Beta Tester`,
      }).then((message) => {
        setSubmitted(true);
        setLoading(false);
        alert(message);
      });
    } else {
      window.alert("Please include your email.");
    }
  };

  return (
    <div className={`${shrunk ? "seeker-sign-up shrunk" : "seeker-sign-up"}`}>
      {isSubmitted && !loading ? (
        <h2 className={`${shrunk && "shrunk"}`}>{success}</h2>
      ) : (
        <>
          <form className="beta-form" type="POST">
            <div className="form-section">
              <input
                type="email"
                name="email"
                placeholder="email"
                className={`${shrunk && "shrunk"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <a onClick={handleSubmit} className="cta-button">
                sign up
              </a>
            </div>
            <div className="form-section">
              <div onClick={() => handleConsent()}>
                <RadioButton isActive={consent} />
              </div>
              <p className="shrunk consent" onClick={() => handleConsent()}>
                Keep me informed about future opportunities!
              </p>
            </div>
          </form>
          {loading ? (
            <h2 className={`${shrunk && "shrunk"}`}>One moment please...</h2>
          ) : (
            // <h2 className={`${shrunk && "shrunk"}`}>{description}</h2>
            <h2 className={`${shrunk && "shrunk"}`}>(The official ConnecMe2 app is set to launch Q2 2022, but if you're looking for early access to opportunities and would like to become a beta-tester, enter your email below!):</h2>
          )}
        </>
      )}
    </div>
  );
}
