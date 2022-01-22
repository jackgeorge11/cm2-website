import React from "react";
import { Helmet } from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import BetaForm from "../../assets/components/BetaForm";
import {StaticImage} from "gatsby-plugin-image";
import Cta from "../../assets/components/common/Cta";

export default function index() {
  return (
    <>
      <Helmet>
        <title>CM2: About Us</title>
        <meta
          name="description"
          content="ConnecMe2 is a mobile app and SaaS-based product for those seeking and providing opportunities. We are a community of like-minded driven professionals aiming to help young, driven individuals achieve their career goals and top brands recruit and connect to top talent."
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="about">
        <div className="cm2">
          <div className="block scroll-to" id="our-story">
            <div className="card-40 card-intro">
              <h1>Our Story</h1>
              <h2>
                What started as an on-the-ground CSR initiative toward
                connecting people who had limited to no access to opportunity
                with the companies and organisations that needed them the most,
                has blossomed into a tech platform for profiling and connecting
                all types of talent. And we've only just begun.
              </h2>
              <div className="bubble-intro" />
              <BetaForm
                description="Want to join our ever-growing community? Sign up to become a beta user of our app and get early access to opportunities."
                shrunk={true}
              />
            </div>
            <StaticImage
              src="../../images/idea.png"
              className="image-intro"
              hide={true}
            />
          </div>

          <div className="block scroll-to rev" id="get-in-touch">
            <StaticImage
              src="../../images/envelope.png"
              className="image-contact"
              hide={true}
            />
            <div className="card-40 card-contact">
              <h1>Get in touch</h1>
              <h2>
                Have any enquiries, ideas, or just want to say hello? Send us an
                email at{" "}
                <a className="hover-link" href="mailto:hello@cm2.co.uk">
                  hello@cm2.co.uk
                </a>
                .
              </h2>
              <Cta href="mailto:hello@cm2.co.uk" external={true}>
                Contact us
              </Cta>
              <div className="bubble-contact"></div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
