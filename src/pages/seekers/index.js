import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Cta from "../../assets/components/common/Cta";
import PageWrapper from "../../assets/components/PageWrapper";
import { StaticImage } from "gatsby-plugin-image";
import BetaForm from "../../assets/components/BetaForm";
import FeaturedOpportunity from "../../assets/components/FeaturedOpportunity";
import opportunities from "../../assets/components/__OpportunitySeeds";

export default function Index() {
  const [demoScreen, setDemoScreen] = useState("collab");

  const toggleCarousel = (screen) => {
    if (demoScreen !== screen) {
      setDemoScreen(screen);
    }
  };
  return (
    <>
      <Helmet>
        <title>CM2: Seekers</title>
        <meta
          name="description"
          content="Kickstart your career with exclusive jobs, training courses, collaborations and networking opportunities with ConnecMe2's new app, available soon in the App and Google Play stores."
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="seekers">
        <div className="seekers">
          <div className="block">
            <div className="card card-40">
              <h1>Your next career starts here</h1>
              <h2>
                “It’s about time we shared vocational opportunities designed to
                connect the next generation of change makers with conscious
                brands and allies who want to dismantle the glass ceilings and
                give the mic to those who are shaping culture and moving with
                purpose.”
              </h2>
              <h2>
                The ConnecMe2 app is set to launch in Q2, 2022. Want to become a
                beta tester, and have early access to opportunities?
              </h2>
              <Cta href="/seekers/download">Download Our App</Cta>
              <div className="bubble" />
            </div>
            <StaticImage className="image-40" src="../../images/our-app.png" />
          </div>

          <div className="block rev">
            <div className="card card-40">
              <h1>Built with a new generation in mind</h1>
              <h2>
                At ConnecMe2 our app embraces the ways of a generation that want
                authenticity from the brands they interact with and admire. A
                core part of our vision is to build a platform that offers our
                seekers access to peers, mentors and career related industry
                events; but most importantly, we want to give our seekers the
                opportunity to showcase their creativity and ingenuity with
                brands and organisations they trust and believe in.
              </h2>
              <div className="bubble" />
            </div>
            <StaticImage className="image-40" src="../../images/seekers.png" />
          </div>
          <div className="block">
            <div className="card card-40">
              <h1>Times have changed… no more blurred lines.</h1>
              <h2>
                “With the likes of TikTok, Instagram, user generated content and
                influencer marketing changing the face of popular culture, we
                believe that the shift has already been made in how our seekers
                want to showcase their talents, productivity and career
                milestones to future employers.
              </h2>
              <h2>
                Cover letters have been replaced with witty and compelling
                elevator pitches and in many cases short films from talented
                individuals sharing their authentic stories directly to the
                decision makers.
              </h2>
              <h2>
                We at ConnecMe2 are excited by this shift and we’re here for it!
                So much so, we have built an app for it!
              </h2>
              <div className="bubble" />
            </div>
            <StaticImage className="image-40" src="../../images/basket.png" />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
