import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Helmet from "react-helmet";
import Cta from "../../assets/components/common/Cta";
import PageWrapper from "../../assets/components/PageWrapper";
import "../../assets/styles/styles.scss";

export default function index() {
  return (
    <>
      <Helmet>
        <title>CM2: Trust</title>
        <meta
          name="description"
          content="CM2 Trust is a London-based nonprofit on a mission to change the
          landscape by generating opportunities for young people to grow to
          be positive members of our community by connecting them to their
          vocational goals."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Helmet>
      <PageWrapper page="trust">
        <div className="block">
          <div className="card card-40">
            <h1>CM2 TRUST</h1>
            <h2>
              A non-profit on the mission to connect our young people within our
              communities to their vocational goals.
            </h2>
            <h2>
              CM2 Trust is a London-based nonprofit on a mission to change the
              landscape by generating opportunities for young people to grow to
              be positive members of our community by connecting them to their
              vocational goals.
            </h2>
            <div className="bubble"></div>
          </div>
          <StaticImage src="../../images/sapling-3.png" className="image-40" />
        </div>
        <div className="block rev">
          <div className="card card-40">
            <h1>EQUIPPING YOUNG Learners</h1>
            <h2>
              We work with partners across education, various sector skills
              charities, local government and private businesses to support
              young people seeking training, insight, qualifications and
              experience in a professional work place.
            </h2>
            <h2>
              Our vision is for a London where all young people can thrive
              through developing their intrinsic talent to become skilled
              professionals.
            </h2>
            <Cta href="mailto:hello@cm2.co.uk">Work with us</Cta>
            <div className="bubble"></div>
          </div>
          <StaticImage src="../../images/check.png" className="image-40" />
        </div>
      </PageWrapper>
    </>
  );
}
