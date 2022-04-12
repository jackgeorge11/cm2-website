import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Cta from "../../../assets/components/common/Cta";
import RadioButton from "../../../assets/components/common/RadioButton";
import PageWrapper from "../../../assets/components/PageWrapper";
import {StaticImage} from "gatsby-plugin-image";
import Spinner from "../../../assets/components/Spinner";
import axios from "axios";
import "../../../assets/styles/styles.scss";

export default function SkyForm() {
  const [formData, setFormData] = useState({
    role: "",
    description: "",
    types: "",
    rate: "",
    duties: "",
    qualities: "",
    start: "",
    deadline: "",
    perks: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formatEmail = (obj) => {
    const keyz = Object.keys(obj);
    let email = "";
    keyz.forEach((k) => {
        email += `<h1>${k}:</h1><h1>${obj[k]}</h1><br/>`
    });
    return email;
  };

  console.log(formatEmail(formData))

  const successRef = useRef();
  const successScroll = () => successRef.current.scrollIntoView();

  const handleSubmit = () => {
    setLoading(true);
    setFormData((prevState) => {
      return { ...prevState };
    });
    console.log(formatEmail(formData));
    axios
      .post("/api/contact/handleform", {
        subject: "New Sky Opportunity for Review",
        data: formatEmail(formData),
      })
      .then((res) => {
        setLoading(false);
        setSubmitted(true);
        successScroll();
        console.log(res.data);
      });
  };

  return (
    <>
      <Helmet>
        <title>CM2: Opportunities at Sky</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Helmet>
      <PageWrapper page="providers">
        <div className="sky-form opportunity-page">
          <div className="block">
            <div className="card-50 card-intro">
              <h1>Opportunities at Sky</h1>
              <h2>
                Our motivated community of seekers is always searching for
                opportunities.
              </h2>
              <h2>
                Please fill out the form below for new roles, if you have any
                issues in doing so please email{" "}
                <a className="hover-link" href="mailto:hello@cm2.co.uk">
                  hello@cm2.co.uk
                </a>
              </h2>
              <Cta href={"#new-role"} className="">
                get started
              </Cta>
              <div className="bubble-intro" />
            </div>
            <StaticImage
              className="intro-image"
              src="../../../images/sky-logo.png"
            />
          </div>

          <div className="block scroll-to" id="new-role" ref={successRef}>
            {submitted ? (
              <div className="card-success card-50">
                <h1>Thanks for the opportunity!</h1>
                <h2>
                  Once approved, it will go live on our app and website for
                  seekers to apply to.
                </h2>
                <div className="bubble-success" />
              </div>
            ) : loading ? (
              <Spinner />
            ) : (
              <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeCKo3jTu2e4PVz7HmmOdRumN07EpzSR_bDVAQGa7WiOYyJqA/formResponse"
                target="_self"
                method="POST"
                id="mG61Hd"
                className="opportunity-form"
              >
                <h1>Opportunities at Sky</h1>
                <h2>Please only submit one opportunity per form.</h2>
                <label htmlFor="role">Role</label>
                <input name="role" onChange={(e) => handleChange(e)} />
                <label htmlFor="description">
                  Description (overview of role)
                </label>
                <textarea
                  name="description"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="types">
                  Types of role (permanent, part-time, contract, etc.)
                </label>
                <input
                  type="text"
                  name="types"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="rate">
                  Salary / Rate (please specify whether this is per annum,
                  monthly or per day)
                </label>
                <input
                  type="text"
                  name="rate"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="duties">Duties to be carried out</label>
                <textarea name="duties" onChange={(e) => handleChange(e)} />
                <label htmlFor="qualities">Desired candidate qualities</label>
                <textarea name="qualities" onChange={(e) => handleChange(e)} />
                <label htmlFor="start">
                  Start date for applicants to apply (state 'immediately' if
                  you're ready to receive applicants now)
                </label>
                <input
                  type="text"
                  name="start"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="deadline">
                  Deadline for applicants to apply
                </label>
                <input
                  type="text"
                  name="deadline"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="perks">
                  Additional perks or company incentives
                </label>
                <textarea name="perks" onChange={(e) => handleChange(e)} />
                <label htmlFor="">Additional notes</label>
                <textarea name="notes" onChange={(e) => handleChange(e)} />
                <a className="cta-button" onClick={handleSubmit}>
                  submit
                </a>
              </form>
            )}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
