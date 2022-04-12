import React from "react";
import { Helmet } from "react-helmet";
import PageWrapper from "../../assets/components/PageWrapper";
import { StaticImage } from "gatsby-plugin-image";
import Cta from "../../assets/components/common/Cta";
import "../../assets/styles/styles.scss";

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
                Founded on a shared vision to change the landscape of providing
                vocational opportunities to a wider segment of society.
                ConnecMe2 is a data driven app that seeks to empower the next
                generation of talent by providing them with a transparent
                network where they can create their own pathways to vocational
                opportunities in partnership with some of the most exciting
                brands, influencers and organisations.
              </h2>
              <h2>
                Want to learn more about how we started? Checkout the ConnecMe2
                Trust!
              </h2>
              <div className="bubble" />
              <div className="d-flex">
                <Cta href="/trust">CM2 Trust</Cta>
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
              <h1>creating authentic experiences</h1>
              <h2>
                A global platform bringing vocational insight to both our
                Providers and Seekers. ConnecMe2 takes user generated data from
                every one of our active users, giving voice and exposure to our
                community. As we learn more about our network of providers and
                seekers, we will introduce, AI, behavioural tracking and
                segmentation to enhance and personalise each and every dedicated
                user’s experience within our platform. ConnecMe2 combines the
                power of video, live interactions and the ability to share,
                curate and create experiences to optimise the Seeker’s
                performance. Our platform seeks to deliver actionable and
                beneficial insights exclusively for our providers and seekers.
              </h2>
              <div className="bubble" />
              <div className="d-flex">
                <Cta href="/seekers">seekers</Cta>
                <Cta href="/providers">providers</Cta>
              </div>
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
              <Cta href="mailto:hello@cm2.co.uk" external={true}>
                Contact
              </Cta>
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
