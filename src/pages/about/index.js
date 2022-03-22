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
          <div className="block">
            <div className="card card-40">
              <h1>Our Story</h1>
              <h2>
                What started as an on-the-ground people focused social
                enterprise, dedicated towards connecting young individuals with
                limited access to apprenticeships, training and professional
                opportunities across a number of industries evolved into a tech
                platform perfectly suited to solve society’s widening skill gap.
              </h2>
              <h2>
                At ConnecMe2 our mission is simple, we want to empower the next
                generation to curate their pathways to success. Quote:
                “ConnecMe2 was born out of a passion for building an inclusive
                and cohesive community which enables decision makers to discover
                and champion our young seekers that are digitally savvy,
                inventive and in many scenarios overqualified for the roles they
                find themselves in.”
              </h2>
              <h2>
                Want to learn more about how we started? Checkout the ConnecMe2
                Trust!
              </h2>
              <div className="bubble" />
              <div className="d-flex">
                <Cta href="https://cm2.co.uk" external={true}>
                  CM2 Trust
                </Cta>
              </div>
              {/* <BetaForm
                description="Want to join our ever-growing community? Sign up to become a beta user of our app and get early access to opportunities."
                shrunk={true}
              /> */}
            </div>
            <StaticImage
              src="../../images/idea.png"
              className="image-40"
              hide={true}
            />
          </div>
          <div className="block rev">
            <div className="card card-40">
              <h1>Generational Impact</h1>
              <h2>
                At ConnecMe2™ we believe that we are on the cusp of a
                generational shift which will be propelled by tech and data. At
                the helm will be the Gen Z generation and the brands and
                organisations that are willing to listen and champion the voices
                of those that are given access and opportunity to design their
                own paths.
              </h2>
              <h2>
                With the help of our early adopters and our seekers, we are
                excited to launch an app that serves the needs of both
                communities.
              </h2>
              <div className="bubble" />
              <Cta href="/seekers">Seekers</Cta>
            </div>
            <StaticImage
              src="../../images/basket.png"
              className="image-40"
              hide={true}
            />
          </div>

          <div className="block">
            <div className="card-40 card">
              <h1>Get in touch</h1>
              <h2>
                Have any enquiries, ideas, or just want to say hello? Send us an
                email at{" "}
                <a className="hover-link" href="mailto:hello@cm2.co.uk">
                  hello@cm2.co.uk
                </a>
                .
              </h2>
              <h2>Or fill our contact form.</h2>
              <Cta href="/contact">Contact</Cta>
              <div className="bubble"></div>
            </div>
            <StaticImage
              src="../../images/envelope.png"
              className="image-40"
              hide={true}
            />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
