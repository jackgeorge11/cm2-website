import React from "react";
import { Helmet } from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import BetaForm from "../../assets/components/BetaForm";
import { StaticImage } from "gatsby-plugin-image";
import Cta from "../../assets/components/common/Cta";

export default function index() {
  return (
    <>
      <Helmet>
        <title>CM2: ConnecMe2 Trust</title>
        <meta
          name="description"
          content="ConnecMe2 is a mobile app and SaaS-based product for those seeking and providing opportunities. We are a community of like-minded driven professionals aiming to help young, driven individuals achieve their career goals and top brands recruit and connect to top talent."
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="trust">
        <div className="trust">
          <div className="block">
            <div className="card-40 card-intro">
              <h1>Our Mission</h1>
              <h2>
                ConnecMe2 Trust is an on-the-ground initiatve which provides
                opportunities to those with lesser access to opportunity. We
                strive to connect people of all backgrounds, education-levels
                and personal histories, because everyone deserves a chance to
                apply themselves professionally, learn novel skills, and build a
                better future.
              </h2>
              <div className="bubble-intro" />
              <BetaForm
                description="Want to join our ever-growing community? Sign up to become a beta user of our app and get early access to opportunities."
                shrunk={true}
              />
            </div>
            <StaticImage
              src="../../images/sapling-3.png"
              className="image-intro"
              hide={true}
            />
          </div>

          <div className="block scroll-to rev" id="our-projects">
            <StaticImage
              src="../../images/basket.png"
              className="image-examples"
              hide={true}
            />
            <div className="card-40 card-examples">
              <h1>our projects</h1>
              <h2>
                At the moment, ConnecMe2 Trust is running several training
                courses in partnership with the London Boroughs to find
                opportunity seekers job placement in industries like
                construction, security and more.
              </h2>
              <h2>
                Past projects include construction courses, security training
                and film challenges.
              </h2>
              <div className="bubble-examples"></div>
            </div>
          </div>

          <div className="block scroll-to" id="get-in-touch">
            <div className="card-40 card-contact">
              <h1>Get in touch</h1>
              <h2>
                Are you NEET (not in education, employment or training)? If so,
                we have some opportunities for you! Send us an email at{" "}
                <a className="hover-link" href="mailto:hello@cm2.co.uk">
                  hello@cm2.co.uk
                </a>
                .
              </h2>
              <Cta href="mailto:hello@cm2.co.uk" external={true}>
                Contact us
              </Cta>
              <BetaForm shrunk={true} />
              <div className="bubble-contact"></div>
            </div>
            <StaticImage
              src="../../images/envelope.png"
              className="image-contact"
              hide={true}
            />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
