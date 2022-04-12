import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Helmet from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import Spinner from "../../assets/components/Spinner";
import "../../assets/styles/styles.scss";

export default function Download() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [],
    terms: false,
    marketing: false,
  });

  const sectors = [
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
      if (sectors.includes(e.target.name)) {
        if (e.target.checked) {
          let arr = formData.interests;
          arr.push(e.target.name);
          setFormData({
            ...formData,
            interests: arr,
          });
        } else {
          setFormData({
            ...formData,
            interests: formData.interests.filter((x) => x !== e.target.name),
          });
        }
      } else {
        setFormData({
          ...formData,
          [e.target.name]: e.target.checked,
        });
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
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
        <title>CM2: Beta Testing</title>
        <meta
          name="description"
          content="Interested in becoming a seeker with ConnecMe2? Apply to beta test our app and get early access to opportunities!"
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="seekers">
        <div className="block">
          <div className="account-form">
            <div className="left">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <h1>BECOME THE FIRST TO USE CONNECME2'S NEW APP</h1>
                  <h3>
                    The ConnecMe2 App will be available on Android and iOS in
                    Q2, 2022. In the meantime, why not become a{" "}
                    <b>beta tester</b>? For early access to all ConnecMe2's
                    opportunities, fill out the form below.
                  </h3>
                </>
              )}
              {submitted ? (
                <>
                  <h3>
                    Thanks for applying to become a beta tester with ConnecMe2!
                    A member of our team will get in touch with you regarding
                    next steps. If you have any questions, feel free to email us
                    at{" "}
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
                  {/* <label htmlFor="industry">I'm interested in...</label>
                  <div className="interests">
                    {sectors.map((sector) => {
                      return (
                        <div className="interest">
                          <input
                            type="checkbox"
                            name={sector}
                            onClick={handleChange}
                          />
                          <label htmlFor={sector}>{sector}</label>
                        </div>
                      );
                    })}
                  </div> */}

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
                    <button onClick={handleSubmit}>Become a Beta Tester</button>
                  )}
                </form>
              )}
              <h5>
                Are you a Provider?{" "}
                <Link to="/providers/create-account" className="hover-link">
                  Create an account
                </Link>
                .
              </h5>
            </div>
            <div className="right">
              <h1>PERKS FOR BETA TESTERS</h1>
              <div className="perks">
                <div className="perk">
                  <div className="circle"></div>
                  <h3>
                    Discover exclusive opportunities from our early adopters
                  </h3>
                </div>
                <div className="perk rev">
                  <div className="circle"></div>
                  <h3>Collaborate with other beta testers</h3>
                </div>
                <div className="perk">
                  <div className="circle"></div>
                  <h3>
                    Build your route map for a head start when the ConnecMe2 app
                    goes live!
                  </h3>
                </div>
                <div className="perk rev">
                  <div className="circle"></div>
                  <h3>
                    Kickstart your professional journey and get one step closer
                    to achieving your career goals
                  </h3>
                </div>
              </div>
              <div className="image-wrapper">
                <StaticImage src="../../images/beta-tester.jpg" />
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
