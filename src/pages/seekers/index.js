import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Cta from "../../assets/components/common/Cta";
import PageWrapper from "../../assets/components/PageWrapper";
import { StaticImage } from "gatsby-plugin-image";
import BetaForm from "../../assets/components/BetaForm";
import FeaturedOpportunity from "../../assets/components/FeaturedOpportunity";
import opportunities from "../../assets/components/__OpportunitySeeds";
import "../../assets/styles/styles.scss";

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
              <h1>Supporting the Talent</h1>
              <h2>
                At ConnecMe2, we understand that we’re in a digital era where
                access, authenticity and vocational opportunities that match the
                talents of our seeker community are being disrupted by an
                information overload from far too many sources. As a result,
                we’re excited to release the BETA version of our free, peer to
                peer app that places vocational data and dynamic user generated
                content at the heart of our mobile app. Gone are the days of
                cluttered inboxes, instead we’re placing the power to create
                opportunities and experiences with peers, leaders and experts in
                the palm of your hand with our app.
              </h2>
              <h2>
                Are you ready to change the game? Download the app today and
                join our community of seekers.
              </h2>
              <Cta href="/seekers/download">Download Our App</Cta>
              <div className="bubble" />
            </div>
            <StaticImage className="image-40" src="../../images/our-app.png" />
          </div>

          <div className="block rev">
            <div className="card card-40">
              <h1>for a new generation</h1>
              <h2>
                Our app embraces the ways of a new generation, a generation that
                want authenticity from the brands they interact with and the
                organisations they admire and want to work with. As a result, we
                have built a platform that offers our seekers access to find
                opportunities, an environment to interact and collaborate with
                peers, and most excitingly, a way to visually document their
                achievements as they embark on their journey towards their
                vocational destination via our intuitive and user-centric
                route-map feature.
              </h2>
              <h2>
                Join the community of seekers who are creating their own
                pathways towards their next chapter exclusively on our app.{" "}
              </h2>
              <Cta href="/seekers/download">Download Our App</Cta>
              <div className="bubble" />
            </div>
            <StaticImage className="image-40" src="../../images/seekers.png" />
          </div>
          <div className="block">
            <div className="card card-40">
              <h1>Get to know the organisations you love</h1>
              <h2>
                Exclusively to our seeker community, our app provides our
                seekers with the ability to interact, follow and share exclusive
                content released by our network of brands and organisations.
                From the latest opportunities, to release dates of a launch or a
                networking event - our app promises to be that bridge that
                empowers our seekers to make moves that will be seen and
                acknowledged by brands they love. If you’re looking to make a
                vocational move, download the app, create your free profile and
                start your journey today.
              </h2>
              <Cta href="/seekers/download">Download Our App</Cta>
              <div className="bubble" />
            </div>
            <StaticImage className="image-40" src="../../images/basket.png" />
          </div>
          <div className="block rev">
            <div className="card card-40">
              <h1>Collaborate, create, share...</h1>
              <h2>
                As a seeker, we invite you to join an eclectic network of
                talented, intelligent, savvy and creative individuals that share
                a similar belief that access, combined with autonomy, action and
                collaboration are the tenants to finding greater opportunities
                and success. We’re excited to announce that our BETA version of
                our app will allow each and every seeker to collaborate with
                peers on special projects and campaigns, create and publish
                video content and build relationships with providers and peers
                that could lead to something groundbreaking
              </h2>
              <h2>
                Start creating today by simply downloading our app and be part
                of the conversation that shapes the future of our mobile
                platform.
              </h2>
              <Cta href="/seekers/download">Download Our App</Cta>
              <div className="bubble" />
            </div>
            <StaticImage className="image-40" src="../../images/basket.png" />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
