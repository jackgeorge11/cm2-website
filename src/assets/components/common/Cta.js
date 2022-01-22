import React from "react";
import {Link} from "gatsby";

export default function Cta(props) {
  return (
    <>
      {props.href ? (
        props.external ? (
          <a
            href={props.href}
            target="_blank"
            rel="noreferrer"
            className={`cta-button ${props.className}`}
          >
            {props.children}
          </a>
        ) : (
          <Link to={props.href} className={`cta-button ${props.className}`}>
            {props.children}
          </Link>
        )
      ) : (
        <a className={`cta-button ${props.className}`}>{props.children}</a>
      )}
    </>
  );
}
