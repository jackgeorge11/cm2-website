import React from "react";
import Cta from "./common/Cta";

export default function Featured({
  title,
  description,
  ctaOne,
  ctaTwo,
  linkOne,
  linkTwo,
  ctaExternal
}) {
  return (
    <div className="featured">
      <h1 className="featured-title">{title && title}</h1>
      <h2 className="featured-description">{description && description}</h2>
      {ctaOne && linkOne && <Cta href={linkOne} external={ctaExternal}>{ctaOne}</Cta>}
      {ctaTwo && linkTwo && <Cta href={linkTwo} external={ctaExternal}>{ctaTwo}</Cta>}
    </div>
  );
}
