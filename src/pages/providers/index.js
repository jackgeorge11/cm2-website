import React from "react";
import { Helmet } from "react-helmet";
import Cta from "../../assets/components/common/Cta";
import PageWrapper from "../../assets/components/PageWrapper";
import InlineLink from "../../assets/components/common/InlineLink";
import { StaticImage } from "gatsby-plugin-image";

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
              <h1>Revolutionising the recruitment process</h1>
              <h2>
                We are changing communities and organisations one subscription
                at a time.
              </h2>
              <h2>
                Our app has been designed to become the perfect partner for the
                companies and sector bodies of tomorrow. ConnecMe2 is the
                playground where talent, curated content and authentic
                interactions between providers and seekers reside.
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
              <h1>Changing the landscape… (what do we know)</h1>
              <h2>
                Today, we already know that you’re 60% more likely to get a
                professional job if you come from privilege rather than a
                working class background. But it’s not just about privilege,
                research has revealed that a third of our graduates have found
                themselves in roles which fail to meet their level of Higher
                Education; and to make it worse, both our seekers and providers
                are finding themselves in a sunken place. A place where an array
                of options has actually become a distraction, and for some,
                noise.
              </h2>
              <h2>
                If only there was a data-driven, digital solution that would
                offer a unique ‘ownable’ pathway for the next generation of
                changemakers to have access to brands and opportunities!
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
                authentic vocational experiences within our platform. For our
                providers we are looking forward to offering councils valuable
                insight into the interests of their residents, whilst giving
                leading brands access to a youthful and dynamic generation of
                savvy talent who are ready to tell their stories, create their
                route-maps and make their vision plain.
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
              <h1>Something special for our Early Adopters.</h1>
              <h2>
                With our App just moments away (officially on) from being on the
                app store, we are inviting providers to join us on our mission
                and to become an early adopter. As an early adopter you will
                have exclusive access to our community managers who will be
                offering technical and brand experience support to ensure your
                annual subscription is of great value.
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
