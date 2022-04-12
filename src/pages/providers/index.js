import React from "react";
import { Helmet } from "react-helmet";
import Cta from "../../assets/components/common/Cta";
import PageWrapper from "../../assets/components/PageWrapper";
import InlineLink from "../../assets/components/common/InlineLink";
import { StaticImage } from "gatsby-plugin-image";
import "../../assets/styles/styles.scss";

export default function Providers() {
  return (
    <>
      <Helmet>
        <title>CM2: Providers</title>
        <meta name="description" content="ConnecMe2 providers." />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="providers">
        <div className="providers">
          <div className="block">
            <div className="card card-40">
              <h1>Revolutionising talent acquisition</h1>
              <h2>
                We are changing communities and organisations one subscription
                at a time
              </h2>
              <h2>
                Our web app has been designed to become the perfect partner for
                the companies and sector bodies of tomorrow. ConnecMe2 is the
                playground where talent, curated content and authentic
                interactions between providers and seekers reside. Create an
                account today to use your ConnecMe2 dashboard to build & recruit
                from a pool of diverse and ambitious talent.
              </h2>
              <Cta href={"/providers/create-account"} className="">
                create account
              </Cta>
              <h2>
                Already a provider?{" "}
                <a
                  className="hover-link"
                  href="https://dev.d25wjfvzegfqfu.amplifyapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign In
                </a>
              </h2>
              <div className="bubble" />
            </div>
            <StaticImage
              src="../../images/our-app.png"
              className="image-40"
              alt-="ConnecMe2: Collaborate with peers, discover opportunities, build your route map."
              hide={true}
            />
          </div>

          <div className="block rev">
            <div className="card card-40">
              <h1>profiling human talent</h1>
              <h2>
                Data shows over 60% of Linkedin users are aged between 30 - 64;
                revealing a missed opportunity for the TikTok generation seeking
                opportunities. Research has revealed that a third of our
                graduates have found themselves in roles which fail to meet
                their level of Higher Education
              </h2>
              <h2>
                At ConnecMe2 we love video. Our seekers are able to record,
                share and document their achievements, from their latest event
                they attended to the campaign they just launched. As a provider
                in the ConnecMe2 community, you get to watch moments of
                authentic vocational experiences created just for you.
              </h2>
              <div className="bubble" />
              <Cta href={"/providers/create-account"} className="">
                create account
              </Cta>
            </div>
            <StaticImage
              src="../../images/how-it-works.png"
              className="image-40"
              hide={true}
            />
          </div>

          <div className="block">
            <div className="card-40 card">
              <h1>Building relationships</h1>
              <h2>
                At ConnecMe2, we are all about building networks and creating
                authentic vocational experiences. For our providers we are
                looking forward to offering valuable insight into the community
                of seekers following them, giving you access to a dynamic
                generation of savvy talent who are ready to tell their stories.
                Once you’re connected, take the opportunity to look through the
                seeker routemap API, an innovative way to see a seekers
                destination. Available exclusively on ConnecMe2.
              </h2>
              <Cta href={"/providers/create-account"} className="">
                create account
              </Cta>
              <div className="bubble" />
            </div>
            <StaticImage
              src="../../images/seekers.png"
              className="image-40"
              hide={true}
            />
          </div>

          <div className="block rev">
            <div className="card-40 card">
              <h1>become an early adopter</h1>
              <h2>
                With our App officially in BETA, we are excited and want to
                invite you to experience what we’ve built. As an early adopter
                you will have exclusive access to our community managers who
                will be offering technical and brand experience support for only{" "}
                <b>£900 per annum</b>. We welcome you to be part of our movement
                and lead the way in your sector.
              </h2>
              <Cta href={"/providers/create-account"} className="">
                create account
              </Cta>
              <div className="bubble" />
            </div>
            <StaticImage
              src="../../images/check.png"
              className="image-40"
              hide={true}
            />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
