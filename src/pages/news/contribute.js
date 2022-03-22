import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import RadioButton from "../../assets/components/common/RadioButton";
import InlineLink from "../../assets/components/common/InlineLink";
import { StaticImage } from "gatsby-plugin-image";
import Spinner from "../../assets/components/Spinner";

function Contribute() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  const [userFile, setUserFile] = useState({
    selectedFile: null,
    selectedFileName: "",
  });

  const handleselectedFile = (e) => {
    setUserFile({
      selectedFile: e.target.files[0],
      selectedFileName: e.target.files[0]?.name,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        Subject: `Blog Writer Application`,
        Body: formatEmail(formData),
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
    <>
      <Helmet>
        <title>CM2: Become a Journalist</title>
        <meta
          name="description"
          content="ConnecMe2 is a mobile app and SaaS-based product for those seeking and providing opportunities. We are a community of like-minded driven professionals aiming to help young, driven individuals achieve their career goals and top brands recruit and connect to top talent."
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="news">
        <div className="blog-contribute">
          <div className="block">
            <div className="card card-40">
              <h1>Want to write for ConnecMe2?</h1>
              <h2>
                At ConnecMe2 we are always looking for talented writers
                interested in helping our community achieve their professional
                goals. Whether it's a series of informative interviews with
                industry leaders, positive tips on staying motivated, or even an
                update on some of the ConnecMe2's latest partners, join or team
                of freelance journalists!
              </h2>
              <h2>
                Fill out the form below, and you'll be on your way to becoming a
                ConnecMe2 journalist!
              </h2>
              <div className="bubble" />
            </div>
            <div className="image-40">
              <StaticImage src="../../images/blog.png" alt="App Mock" />
            </div>
          </div>

          <div className="block">
            {loading ? (
              <Spinner />
            ) : !submitted ? (
              <form action="POST" className="contribute-form">
                <label htmlFor="name">Name:</label>
                <input type="text" name="company" onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={handleChange} />
                <label htmlFor="portfolio">
                  Link to portfolio or recent work:
                </label>
                <input type="text" name="portfolio" onChange={handleChange} />
                <label htmlFor="about">
                  Tell us a bit about yourself and your passion for journalism:
                </label>
                <textarea name="about" onChange={handleChange} />
                <label htmlFor="cv-file">
                  <InlineLink external={true}>
                    {userFile.selectedFile
                      ? userFile.selectedFileName
                      : "Upload Your CV"}
                  </InlineLink>
                </label>
                <input
                  name="cv-file"
                  id="cv-file"
                  type="file"
                  className="invisible"
                  onChange={handleselectedFile}
                />
                <div className="consent-section">
                  <span onClick={() => setConsent((prev) => !prev)}>
                    <RadioButton isActive={consent} />
                  </span>
                  <p
                    className="consent"
                    onClick={() => setConsent((prev) => !prev)}
                  >
                    Keep me up to date with all things CM2!
                  </p>
                </div>
                <a
                  className="cta-button"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  submit
                </a>
              </form>
            ) : (
              <div className="card-success card-50">
                <h1>Congratulations!</h1>
                <h2>
                  You're one step closer to becoming a blogger at ConnecMe2!
                  We'll be in touch shortly regarding your application.
                </h2>
                <div className="bubble-success" />
              </div>
            )}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default Contribute;
