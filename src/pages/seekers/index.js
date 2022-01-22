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
            <div className="card-intro card-50">
              <h1>Your next career starts here</h1>
              <h2>
                <span className="bold">
                  Connecting opportunities to those who seek them.
                </span>{" "}
                Discover exclusive job openings, training, networking events,
                peer-to-peer collaborations and more, all on ConnecMe2.
              </h2>
              <BetaForm
                success={`Thanks for signing up! We'll be in touch as soon as our app is ready
            to use.`}
                description="(Our app is set to launch at the beginning of 2022, but if you're looking for early access to opportunities and would like to become a beta-tester, enter your email):"
                shrunk={true}
              />
              <div className="bubble-intro" />
            </div>
            <StaticImage
              className="intro-image"
              src="../../images/basket.png"
            />
          </div>

          <div className="block rev scroll-to" id="our-app">
            <div className="carousel-demo">
              <div
                className={`${
                  demoScreen === "collab" && "is--active"
                } carousel-demo-image-wrapper`}
              >
                <StaticImage
                  className="carousel-demo-image"
                  src="../../images/collaborate.png"
                />
              </div>
              <div
                className={`${
                  demoScreen === "discover" && "is--active"
                } carousel-demo-image-wrapper`}
              >
                <StaticImage
                  className="carousel-demo-image"
                  src="../../images/discover.png"
                />
              </div>
              <div
                className={`${
                  demoScreen === "build" && "is--active"
                } carousel-demo-image-wrapper`}
              >
                <StaticImage
                  src="../../images/build.png"
                  className="carousel-demo-image"
                />
              </div>
              <div className="dots">
                <div
                  className={`${
                    demoScreen === "collab" ? "dot is--active" : "dot"
                  }`}
                  onClick={() => toggleCarousel("collab")}
                />
                <div
                  className={`${
                    demoScreen === "discover" ? "dot is--active" : "dot"
                  }`}
                  onClick={() => toggleCarousel("discover")}
                />
                <div
                  className={`${
                    demoScreen === "build" ? "dot is--active" : "dot"
                  }`}
                  onClick={() => toggleCarousel("build")}
                />
              </div>
            </div>
            <div className="card-demo card-20">
              <h1>HOW IT WORKS</h1>
              {/* <h2 className={`${demoScreen === 'profile' && 'is--active'}`}><span>&#8226;</span>Customize your profile</h2> */}
              <h2 onClick={() => toggleCarousel("collab")}>
                <span>&#8226;</span>
                <span
                  className={`inliner ${
                    demoScreen === "collab" && "is--active"
                  }`}
                >
                  Collaborate with peers
                </span>
              </h2>
              <h2 onClick={() => toggleCarousel("discover")}>
                <span>&#8226;</span>
                <span
                  className={`inliner ${
                    demoScreen === "discover" && "is--active"
                  }`}
                >
                  Discover opportunities
                </span>
              </h2>
              <h2 onClick={() => toggleCarousel("build")}>
                <span>&#8226;</span>
                <span
                  className={`inliner ${
                    demoScreen === "build" && "is--active"
                  }`}
                >
                  Build your route map
                </span>
              </h2>
              <div className="bubble-demo" />
            </div>
          </div>

          <div className="block">
            <div className="card-browse-opportunities card-30">
              <h1>featured opportunities </h1>
              <h2>
                Some opportunities are just too good to pass up -- so we've
                hand-selected some of what you'll find in our app for you to
                access here.
              </h2>
              <div className="bubble-browse-opportunities" />
              <Cta href={"/seekers/featured-opportunities"} className="">
                see more
              </Cta>
            </div>
            <div className="opportunity-browser">
              {opportunities.map((opportunity, i) => {
                if (i < 3) {
                  return (
                    <FeaturedOpportunity
                      preview={true}
                      opportunity={opportunity}
                      key={i}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
