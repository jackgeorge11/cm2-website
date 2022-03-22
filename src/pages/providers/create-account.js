import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Helmet from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import Spinner from "../../assets/components/Spinner";

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
        To: "hello@cm2.co.uk",
        From: "no-reply@cm2.co.uk",
        Subject: `Provider Application`,
        Body: formatEmail(formData),
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
                      <a href="" className="hover-link">
                        subscription agreement
                      </a>
                      ,{" "}
                      <a href="" className="hover-link">
                        privacy policy
                      </a>{" "}
                      and{" "}
                      <a href="" className="hover-link">
                        terms of services
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
                      By checking this box I am opting in to receive marketing
                      emails from ConnecMe2. I can unsubscribe from their
                      mailing list at any time.
                    </label>
                  </div>
                  {loading ? (
                    <Spinner />
                  ) : (
                    <button onClick={handleSubmit}>Create Account</button>
                  )}
                </form>
              )}
            </div>
            <div className="right">
              <h1>PERKS FOR EARLY ADOPTERS</h1>
              <div className="perks">
                <div className="perk">
                  <div className="circle"></div>
                  <h3>
                    Build and recruit from a pool of diverse and ambitious
                    talent
                  </h3>
                </div>
                <div className="perk rev">
                  <div className="circle"></div>
                  <h3>
                    Communicate directly with applicants via ConnecMe2's
                    messaging API
                  </h3>
                </div>
                <div className="perk">
                  <div className="circle"></div>
                  <h3>
                    Build and recruit from a pool of diverse and ambitious
                    talent
                  </h3>
                </div>
                <div className="perk rev">
                  <div className="circle"></div>
                  <h3>
                    Communicate directly with applicants via ConnecMe2's
                    messaging API
                  </h3>
                </div>
              </div>
              <div className="image-wrapper">
                <StaticImage src="../../images/people-on-phone.jpg" />
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
