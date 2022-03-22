import React from "react";
import { Helmet } from "react-helmet";
import Cta from "../assets/components/common/Cta";
import PageWrapper from "../assets/components/PageWrapper";
import { StaticImage } from "gatsby-plugin-image";
import "../assets/styles/styles.scss";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>CM2: Welcome to ConnecMe2!</title>
        <meta
          name="description"
          content="ConnecMe2 is a mobile app and SaaS-based product platforming career opportunities, educational experiences and everything in between. We have been putting the right people in the right seats since 2015."
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>

      <PageWrapper>
        <div className="home">
          <div className="block">
            <div className="card card-40">
              <h1>PUTTING THE RIGHT PEOPLE IN THE RIGHT SEATS</h1>
              <h2>
                A social-vocational networking platform for those seeking
                opportunities, and a revolutionary SaaS-based must-have for
                those providing opportunities.
              </h2>
              <div className="d-flex">
                <Cta href={"/seekers"} className="">
                  seekers
                </Cta>
                <Cta href={"/providers"} className="">
                  providers
                </Cta>
              </div>

              <div className="bubble" />
            </div>
            <StaticImage
              src="../images/our-app.png"
              className="image-40"
              alt-="ConnecMe2: Collaborate with peers, discover opportunities, build your route map."
            />
          </div>

          <div className="block rev less-margin">
            <div className="card card-30">
              <h1>Seekers</h1>
              <h2>
                For motivated individuals <span className="bold">seeking</span>{" "}
                opportunities, download the ConnecMe2 app to:
              </h2>
              <ul>
                <li>Collaborate with peers</li>
                <li>Discover opportunities</li>
                <li>Build your route map</li>
              </ul>
              <Cta href={"/seekers"} className="">
                LEARN MORE
              </Cta>
              <div className="bubble" />
            </div>
            <StaticImage
              src="../images/compass.png"
              className="image-30"
              hide={true}
            />
          </div>

          <div className="block">
            <div className="card card-30">
              <h1>Providers</h1>
              <h2>
                For companies and organisations{" "}
                <span className="bold">providing</span> opportunities, our D2C
                platform will revolutionize the way you:
              </h2>
              <ul>
                <li>Discover diversity</li>
                <li>Recruit top talent</li>
                <li>Build your community</li>
              </ul>
              <Cta href={"/providers"} className="">
                LEARN MORE
              </Cta>
              <div className="bubble" />
            </div>
            <StaticImage
              src="../images/oranges.png"
              className="image-30"
              hide={true}
            />
          </div>

          <div className="block rev">
            <div className="card card-40">
              <h1>OPPORTUNITY</h1>
              <h2 className="is-bold">It's that simple.</h2>
              <h2>
                Finding your next job and networking with like-minded
                professionals, connecting with diverse talent and onboarding
                team members that fit your company’s culture -- it’s never been
                easier.
              </h2>
              <div className="d-flex">
                <Cta href={"/seekers"} className="">
                  seekers
                </Cta>
                <Cta href={"/providers"} className="">
                  providers
                </Cta>
              </div>

              <div className="bubble" />
            </div>
            <StaticImage
              src="../images/basket.png"
              className="image-40"
              hide={true}
            />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
