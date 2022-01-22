import React from "react";
import { Helmet } from "react-helmet";
import Cta from "../../assets/components/common/Cta";
import PageWrapper from "../../assets/components/PageWrapper";
import InlineLink from "../../assets/components/common/InlineLink";
import {StaticImage} from "gatsby-plugin-image";

export default function Providers() {
  return (
    <>
      <Helmet>
        <title>CM2: Providers</title>
        <meta
          name="description"
          content="ConnecMe2 providers."
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper page="providers">
        <div className="providers">
          <div className="block">
            <div className="card-intro card-50">
              <h1>Connect with talent</h1>
              <h2>
                With ConnecMe2, your company or organization can connect with
                our diverse user-base and promote opportunities of all kinds,
                from job openings to CSR initiatives and everything in between
              </h2>
              <h2 className="bold">
                Recruiting your next best team member has never been simpler.
              </h2>
              <Cta href={"/providers/register"} className="">
                register
              </Cta>
              {/* <h2>
                Already a provider?{" "}
                <InlineLink href="/providers/register">Log In</InlineLink>
              </h2> */}
              <div className="bubble-intro" />
            </div>
            <StaticImage src="../../images/our-app.png" className="intro-image" alt-="ConnecMe2: Collaborate with peers, discover opportunities, build your route map." hide={true}/>
          </div>

          <div className="block rev scroll-to" id="how-it-works">
            <StaticImage src="../../images/how-it-works.png" className="infographic-image" hide={true}/>
            <div className="card-infographic card-40">
              <h1>Revolutionising the recruitment process</h1>
              <h2>
                Discovering untapped talent and growing your brand's community can be an expensive, time-consuming endeavour.{" "}
                <span className="bold">But it doesn't have to be.</span>
              </h2>
              <h2>Connect with ConnecMe2's diverse user base to meet your newest team members and garner awareness about your product, service or cause in the process.</h2>
              <div className="bubble-infographic" />
              <Cta href={"/providers/register"} className="">
                register
              </Cta>
            </div>
          </div>

          <div className="block">
            <div className="card-30 card-pricing">
              <h1>What's the catch?</h1>
              <h2>
                There is none, <span className="bold">really.</span>
              </h2>
              <h2>
                For a limited time, we're offering all early-interest providers
                the ConnecMe2 Gold plan, which includes all the platform's bells
                and whistles. Register with us today{" "}
                <span className="bold">for only £900 for your first year</span>.
                Yes, you heard that correctly.
              </h2>
              <Cta href={"/providers/register"} className="">
                register
              </Cta>
              <div className="bubble-pricing" />
            </div>
            <StaticImage src="../../images/check.png" className="image-pricing" hide={true}/>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
