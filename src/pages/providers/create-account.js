import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Helmet from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import Spinner from "../../assets/components/Spinner";
import "../../assets/styles/styles.scss";

export default function CreateAccount() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    number: "",
    sector: "",
    message: "",
    terms: false,
    marketing: false,
  });

  const sectors = [
    "Select",
    "T & Telecoms",
    "Education",
    "Accountancy (Qualified)",
    "Recruitment Consultancy",
    "Customer Service",
    "Admin, Secretarial & PA",
    "Marketing & PR",
    "Accountancy",
    "Construction & Property",
    "Sales",
    "Social Care",
    "Banking",
    "Financial Services",
    "Strategy & Consultancy",
    "Transport & Logistics",
    "Retail",
    "Health & Medicine",
    "Human Resources",
    "Engineering",
    "Hospitality & Catering",
    "Legal",
    "Media, Digital & Creative",
    "Estate Agency",
    "General Insurance",
    "Graduate Training & Internships",
    "Charity & Voluntary",
    "Scientific",
    "Motoring & Automotive",
    "Manufacturing",
    "Security & Safety",
    "Purchasing",
    "FMCG",
    "Leisure & Tourism",
    "Energy",
    "Training",
    "Apprenticeships",
    "Public Sector",
    "Architecture ",
    "Other",
  ];

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
    console.log(formData);
  };

  const formatEmail = (obj) => {
    const keyz = Object.keys(obj);
    let email = "";
    keyz.forEach((k) => {
      email += `<h1>${k}:</h1><h1>${obj[k]}</h1><br/>`;
    });
    return email;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.terms) {
      setLoading(true);
      window.Email.send({
        SecureToken: "29b06643-50e2-4725-8e5c-7df6c59e7433",
        Username: "no-reply@cm2.co.uk",
        To: ["hello@cm2.co.uk", formData.email],
        From: "no-reply@cm2.co.uk",
        Subject: "Becoming a ConnecMe2 Provider",
        Body: `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>ConnecMe2</title>
            <style>
              @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800");
        
              body {
                font-family: "Manrope", sans-serif;
              }
        
              h1 {
                font-size: 2rem;
                font-weight: 400;
              }
        
              h2 {
                font-size: 1.5rem;
                font-weight: 300;
              }
        
              h3 {
                  font-size: 1rem;
                font-weight: 300;
                margin-bottom: 5px;
              }
      
              a {
                color: orange;
              }
      
              p {
                  font-size: .55rem;
              }
      
              .icons {
                  margin-bottom: 25px;
              }
        
              .icons > a {
                margin-right: 5px;
              }
            </style>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body>
            <h1>Thanks for your interest in becoming a provider with <a href="www.connecme2.com">ConnecMe2</a>!</h1>
            <h2>
              Someone from our team will be in touch soon regarding next steps. If you have any questions, or just want to say hello, feel free to send us an email at <a href="mailto:hello@cm2.co.uk">hello@cm2.co.uk</a>.
            </h2>
            <div class="socials">
              <h3>In the meantime, let's get social!</h3>
              <div class="icons">
                <a
                  href="https://www.facebook.com/ConnecMe2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://cdn.exclaimer.com/Handbook%20Images/facebook-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
                    alt="Facebook"
                /></a>
                <a
                  href="https://instagram.com/connecme2"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://cdn.exclaimer.com/Handbook%20Images/instagram-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
                    alt="Instagram"
                /></a>
                <a
                  href="https://www.linkedin.com/company/connecme2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://cdn.exclaimer.com/Handbook%20Images/linkedin-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
                    alt="Linkedin"
                /></a>
                <a
                  href="https://www.youtube.com/channel/UCMPpu68pn_wJpiguGPNPlmA"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://cdn.exclaimer.com/Handbook%20Images/youtube-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
                    alt="Youtube"
                /></a>
                <a
                  href="https://twitter.com/connecme2"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://cdn.exclaimer.com/Handbook%20Images/twitter-icon_24x24.png?_ga=2.212241875.676658505.1636550838-628138744.1636550838"
                    alt="Twitter"
                /></a>
                <a
                  href="https://www.tiktok.com/@connecme2"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img
                    src="https://cdn.exclaimer.com/Handbook%20Images/TikTok_logo_24.png?_ga=2.157322877.676658505.1636550838-628138744.1636550838"
                    alt="Tik Tok"
                /></a>
                <p className="disclaimer">
                This e-mail, the information contained in it and any files or attachments transmitted with it are confidential and may be legally privileged. They are intended solely for the use of the intended recipient(s). Access to this e-mail by anyone else is unauthorised. 
                The content of this e-mail and any files or attachments transmitted with it may have been changed or replaced without the consent of the author, and in circumstances where the content of this e-mail is important you should not rely on its integrity without checking it by telephone or fax. ConnecMe2 does not accept any responsibility for any breach of confidence which may arise from the use of e-mail as a means of communication If you are not the intended recipient, any review, dissemination, disclosure, alteration, printing, copying, transmission or other use of this e-mail is prohibited and may, in certain circumstances, be a criminal offence, as may any action taken or omitted to be taken in reliance on it. 
                Please also note that any views, opinions or advice contained in this e-mail are those of the sending individual, except where the sender specifically states them to be the views of ConnecMe2. 
                </p>
              </div>
            </div>
            <script src="" async defer></script>
          </body>
        </html>
          `,
      }).then((message) => {
        setSubmitted(true);
        setLoading(false);
        alert(message);
      });
    } else if (!formData.terms) {
      window.alert("Please agree to our Terms and Conditions");
    } else {
      window.alert("Please enter your email");
    }
  };

  return (
    <>
      <Helmet>
        <title>CM2: Create Account</title>
        <meta
          name="description"
          content="Interested in becoming a provider with ConnecMe2? Create an account with us today!"
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="providers">
        <div className="block">
          <div className="account-form">
            <div className="left">
              {loading ? <Spinner /> : <h1>BECOME AN EARLY ADOPTER</h1>}
              {submitted ? (
                <>
                  <h3>
                    Thanks for creating an account with ConnecMe2! A member of
                    our team will get in touch with you regarding next steps. If
                    you have any questions, feel free to email us at{" "}
                    <a href="mailto:hello@cm2.co.uk" className="hover-link">
                      hello@cm2.co.uk
                    </a>
                  </h3>
                  <br />
                  <br />
                  <StaticImage src="../../images/check.png" />
                </>
              ) : (
                <>
                  <h3>
                    For a limited time only <b>£900 per annum</b>.
                  </h3>
                  <form action="">
                    <label htmlFor="name">Your Name</label>
                    <input
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <label htmlFor="company">Company Name</label>
                    <input
                      value={formData.company}
                      onChange={handleChange}
                      type="text"
                      name="company"
                      placeholder="Enter registered company name"
                    />
                    <label htmlFor="number">Company Registration No.</label>
                    <input
                      value={formData.number}
                      onChange={handleChange}
                      type="text"
                      name="number"
                      placeholder="Enter registered company number"
                    />
                    <label htmlFor="sector">Select your industry</label>
                    <select
                      name="sector"
                      onChange={handleChange}
                      value={formData.sector}
                    >
                      {sectors.map((sector, i) => {
                        return (
                          <option value={sector} key={i}>
                            {sector}
                          </option>
                        );
                      })}
                    </select>
                    <label htmlFor="message">How can ConnecMe2 help you?</label>
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                      placeholder="Looking for talent, interested in social mobility campaigns, aiming to reach new markets, etc."
                    />
                    <div className="agree">
                      <input
                        type="checkbox"
                        name="terms"
                        onClick={handleChange}
                        value={formData.terms}
                      />
                      <label htmlFor="terms">
                        By checking this box I agree to ConnecMe2's{" "}
                        <a
                          href="/cm2-saas-agreement.pdf"
                          className="hover-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          subscription agreement
                        </a>
                        ,{" "}
                        <a
                          href="/cm2-provider-privacy-policy.pdf"
                          className="hover-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          privacy policy
                        </a>
                        ,{" "}
                        <a
                          href="/cm2-copyright-policy.pdf"
                          className="hover-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          copyright policy
                        </a>
                        ,{" "}
                        <a
                          href="/cm2-community-guidelines.pdf"
                          className="hover-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          community guidelines
                        </a>{" "}
                        and{" "}
                        <a
                          href="/cm2-disclaimer.pdf"
                          className="hover-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          disclaimer
                        </a>
                        .
                      </label>
                    </div>

                    <div className="agree">
                      <input
                        type="checkbox"
                        name="marketing"
                        checked={formData.marketing}
                        onClick={handleChange}
                      />
                      <label htmlFor="marketing">
                        By checking this box I am opting in to receive{" "}
                        <b>marketing emails</b> from ConnecMe2. I understand
                        that I can unsubscribe from their mailing list at any
                        time.
                      </label>
                    </div>
                    {loading ? (
                      <Spinner />
                    ) : (
                      <button onClick={handleSubmit}>Create Account</button>
                    )}
                  </form>
                </>
              )}
            </div>
            <div className="right">
              <h1>PERKS FOR EARLY ADOPTERS</h1>
              <div className="perks">
                <div className="perk">
                  <div className="circle">
                    <StaticImage src="../../images/icons/icon-ladder.png" />
                  </div>
                  <h3>
                    Communicate directly with applicants via ConnecMe2's
                    messaging API
                  </h3>
                </div>
                <div className="perk rev">
                  <div className="circle">
                    <StaticImage src="../../images/icons/icon-oranges.png" />
                  </div>
                  <h3>
                    Build and recruit from a pool of diverse and ambitious
                    talent
                  </h3>
                </div>
                <div className="perk">
                  <div className="circle">
                    <StaticImage src="../../images/icons/icon-community.png" />
                  </div>
                  <h3>
                    Create events, register participants and engage with your
                    community using our integrated CRM system
                  </h3>
                </div>
                <div className="perk rev">
                  <div className="circle">
                    <StaticImage src="../../images/icons/icon-woman.png" />
                  </div>
                  <h3>
                    Get to know your followers by engaging with their video
                    content and tracking their route maps
                  </h3>
                </div>
              </div>
              <div className="image-wrapper">
                <StaticImage src="../../images/early-adopter.jpg" />
                <div className="overlay" />
                <h3>
                  ConnecMe2: Revolutionising recruitment and building stronger
                  communities in the process
                </h3>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
