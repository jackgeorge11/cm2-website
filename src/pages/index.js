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
              <h1>profiling human talent</h1>
              <h2>
                Welcome to ConnecMe2, a social-vocational networking platform
                for those seeking opportunities, and a revolutionary SaaS-based
                must-have for those providing opportunities.
              </h2>
              <div className="d-flex">
                <Cta href="/seekers">seekers</Cta>
                <Cta href="/providers">providers</Cta>
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
                Dedicated to serve the motivated individuals seeking
                opportunities, we have created a mobile app that combines the
                beauty of video and dynamic user generated content, with the
                ability to create what some have called a virtual CV and
                portfolio you can share with the leaders, experts and decision
                makers within your circle. The ConnecMe2 app makes it easy to:
              </h2>
              <ul>
                <li>Collaborate with peers</li>
                <li>Discover opportunities</li>
                <li>
                  And build your route map that showcases your talent and latest
                  milestones
                </li>
              </ul>
              <Cta href="/seekers">LEARN MORE</Cta>
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
                For companies and organisations providing opportunities,
                launching campaigns and seeking diverse talent our SaaS based
                platform promises to revolutionise the approach to maximising
                human potential and talent, locally and internationally.
              </h2>
              <h2>
                With the help of our web portal and your customisable dashboard,
                you will be able to:
              </h2>
              <ul>
                <li>Discover and recruit from an incredible pool of talent</li>
                <li>Build your community of engaged followers</li>
                <li>
                  Interact and amplify your brand among a network of influential
                  and loyal users.
                </li>
              </ul>
              <Cta href="/providers">LEARN MORE</Cta>
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
              <h1>Opportunities like no other</h1>
              <h2>
                At ConnecMe2 we are excited about how our platform will change
                how opportunities are found, shared and created. By creating a
                playground where both providers and seekers will benefit from
                having access to shareable moments of authentic experiences - we
                look forward to seeing how organisations will onboard teams and
                begin their journey to enhancing company culture; whilst our
                seekers take a step closer to reaching their vocational
                destination.
              </h2>
              <div className="d-flex">
                <Cta href="/seekers">seekers</Cta>
                <Cta href="/providers">providers</Cta>
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
