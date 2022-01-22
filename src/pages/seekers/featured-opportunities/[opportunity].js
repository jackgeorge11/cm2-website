import React, { useRef } from "react";
// import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import PageWrapper from "../../../assets/components/PageWrapper";
import Cta from "../../../assets/components/common/Cta";
import { StaticImage } from "gatsby-plugin-image";
import BetaForm from "../../../assets/components/BetaForm";
import OpportunityForm from "../../../assets/components/OpportunityForm";
import opportunities from "../../../assets/components/__OpportunitySeeds";

export default function OpportunityPage(props) {
  const slug = props?.location?.pathname?.slice(32);
  const successRef = useRef();

  const opportunity = opportunities.find(
    (opportunity) => opportunity.slug === slug
  );

  return (
    <>
      <Helmet>
        <title>CM2: Featured Opportunities</title>
        <meta
          name="description"
          content="Explore job openings, career opportunities, training and courses, netwowrking events, industry talks, and everything in between to provide you with the professional experience you need to achieve your dreams."
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <PageWrapper>
        <div className="opportunity-page">
          <div className="block" ref={successRef}>
            <div className="card-50 card-intro">
              <h1>{opportunity?.title}</h1>
              <h2>
                <span className="bold">Regions: </span>
                {opportunity?.regions}
              </h2>
              <h2>
                <span className="bold">Deadline: </span>{opportunity?.deadline}.
              </h2>
              <Cta href={"#apply-now"} className="">
                apply now
              </Cta>
              <BetaForm
                success={`Thanks for signing up! We'll be in touch as soon as our app is
                ready to use.`}
                description={`Want more opportunities? Enter your email to become a beta
                  user of our app and get early access to all of our
                  opportunities.`}
                shrunk={true}
              />
              <div className="bubble-intro" />
            </div>
            <StaticImage
              className="intro-image"
              src={`../../images/logo.png`}
            />
          </div>

          <div className="block scroll-to" id="apply-now">
            <OpportunityForm
              opportunity={opportunity?.form}
              id={opportunity?.id}
              title={opportunity?.title}
              successRef={successRef}
            />
          </div>

          <div className="block scroll-to" id="description">
            <div className="card-90 card-description">
              {opportunity?.description?.map((section) => {
                return (
                  <>
                    {section.header && <h1>{section.header}</h1>}
                    {section.text &&
                      section.text.map((text, index) => {
                        return <h2 key={index}>{text}</h2>;
                      })}
                  </>
                );
              })}
              <Cta href="#apply-now">apply now</Cta>
              <div className="bubble-description" />
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
