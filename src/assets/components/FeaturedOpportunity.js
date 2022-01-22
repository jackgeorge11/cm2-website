import React from "react";
import {Link} from "gatsby";
import _Image from "./common/_Image";
import Cta from "./common/Cta";

export default function FeaturedOpportunity({ preview, opportunity, key }) {
  return (
    <div
      key={key}
      className={`${
        preview ? "featured-opportunity preview" : "featured-opportunity"
      }`}
    >
      <Link href={`/seekers/featured-opportunities/${opportunity.slug}`}>
        <div className="opportunity-logo-wrapper">
          <_Image
            src={`/images/${opportunity.logo}`}
            className="opportunity-logo"
            hide={true}
          />
        </div>
      </Link>
      <Link
        href={`/seekers/featured-opportunities/${opportunity.slug}`}
        className="featured-opportunity-title"
      >
        {opportunity.title}
      </Link>
      <Cta href={`/seekers/featured-opportunities/${opportunity.slug}`}>
        apply now
      </Cta>
    </div>
  );
}
