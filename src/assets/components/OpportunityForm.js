import axios from "axios";
import React, { useState, useRef } from "react";
import InlineLink from "./common/InlineLink";
import RadioButton from "./common/RadioButton";
import Spinner from "./Spinner";
import Template from "../../assets/components/mail-templates/ApplyOpportunity";
import PageData from "./__OpportunitySeeds";

export default function OpportunityForm({
  opportunity,
  id,
  title,
  successRef,
}) {
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [userFile, setUserFile] = useState({
    selectedFile: null,
    selectedFileName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
  };

  const handleselectedFile = (e) => {
    setUserFile({
      selectedFile: e.target.files[0],
      selectedFileName: e.target.files[0].name,
    });
  };

  const successScroll = () => successRef.current.scrollIntoView();

  const formatEmail = (obj) => {
    const keyz = Object.keys(obj);
    let email = "";
    keyz.forEach((k) => {
      email += `<h1>${k}:</h1><h1>${obj[k]}</h1><br/>`;
    });
    return email;
  };

  const handleSubmit = () => {
    if (formData.email) {
      setLoading(true);
      window.Email.send({
        SecureToken: "29b06643-50e2-4725-8e5c-7df6c59e7433",
        Username: "no-reply@cm2.co.uk",
        To: "hello@cm2.co.uk",
        From: "no-reply@cm2.co.uk",
        Subject: `Application: ${title}`,
        Body: formatEmail(formData),
      }).then((message) => {
        setSubmitted(true);
        setLoading(false);
        successScroll();
        alert(message);
      });
    } else {
      window.alert("Please include your email.");
    }
  };

  const renderSection = ({ label, action }, i) => {
    if (action.type === "input") {
      return action.inputType === "file" ? (
        <>
          <label htmlFor={action.name && action.name}>
            <InlineLink external={true}>
              {userFile.selectedFile ? userFile.selectedFileName : label}
            </InlineLink>
          </label>
          <input
            name={action.name}
            type={action.inputType}
            id={action.id && action.id}
            className="invisible"
            onChange={handleselectedFile}
          />
        </>
      ) : (
        <>
          <label htmlFor={action.name && action.name}>{label}</label>
          <input
            name={action.name}
            type={action.inputType}
            id={action.id && action.id}
            onChange={handleChange}
          />
        </>
      );
    } else if (action.type === "textarea") {
      return (
        <>
          <label>{label}</label>
          <textarea name={action.name} onChange={handleChange} />
        </>
      );
    } else if (action.type === "select") {
      return (
        <>
          <label>{label}</label>
          <select name={action.name} onChange={handleSelect}>
            {action.options.map((option, i) => {
              return (
                <option key={i} value={option?.toLowerCase()}>
                  {option}
                </option>
              );
            })}
          </select>
        </>
      );
    }
  };

  return submitted ? (
    <div className="card-success card-50">
      <h1>Congratulations!</h1>
      <h2>
        You're application has been submitted. We will contact you soon with
        next steps.
      </h2>
      <div className="bubble-success" />
    </div>
  ) : loading ? (
    <Spinner />
  ) : (
    <form action="POST" className="opportunity-form">
      <h1>
        Fill out this form to apply, and we'll contact you with next steps.
      </h1>
      <h2>
        Still not sure? Read the{" "}
        <a className="hover-link" href="#description">
          description
        </a>{" "}
        below.
      </h2>

      {opportunity?.map((section, i) => {
        return renderSection(section, i);
      })}

      <div className="consent-section">
        <span onClick={() => setConsent((prev) => !prev)}>
          <RadioButton isActive={consent} />
        </span>
        <p className="consent" onClick={() => setConsent((prev) => !prev)}>
          Keep me informed about about future opportunities!
        </p>
      </div>
      <a className="cta-button" onClick={handleSubmit}>
        Apply
      </a>
    </form>
  );
}
