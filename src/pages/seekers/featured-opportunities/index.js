import React from "react";
import { Helmet } from "react-helmet";
import BetaForm from "../../../assets/components/BetaForm";
import {StaticImage} from "gatsby-plugin-image";
import FeaturedOpportunity from "../../../assets/components/FeaturedOpportunity";
import PageWrapper from "../../../assets/components/PageWrapper";
import opportunities from "../../../assets/components/__OpportunitySeeds";

export default function FeaturedOpportunities() {
  return (
    <>
      <Helmet>
        <title>CM2: Featured Opportunities</title>
        <meta
          name="description"
          content="Explore job openings, career opportunities, training and courses, netwowrking events, industry talks, and everything in between to provide you with the professional experience you need to achieve your dreams."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Helmet>
      <PageWrapper>
        <div className="featured-opportunities">
          <div className="block">
            <div className="card-intro card-50">
              <h1>Featured Opportunities</h1>
              <h2>Because some opportunities are just too good to pass up.</h2>
              <BetaForm
                success={`Thanks for signing up! We'll be in touch as soon as our app is ready
              to use.`}
                description={`Want more opportunities? Enter your email to become a beta user of our app and get early access to all of our opportunities.`}
                shrunk={true}
              />
              <div className="bubble-intro" />
            </div>
            <StaticImage className="intro-image" src="../../images/basket.png"/>
          </div>

          <div className="block featured-list">
            {opportunities.map((opportunity, i) => {
              return <FeaturedOpportunity opportunity={opportunity} key={i} />;
            })}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
