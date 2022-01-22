import React from "react";
import {Link} from "gatsby";

export default function InlineLink(props) {
  return (
    <>
      {props.external ? (
        <a
          href={props.href && props.href}
          target="_blank"
          rel="noreferrer"
          className={`inline-link`}
        >
          {props.children}
        </a>
      ) : (
        <Link href={props.href} className="inline-link">
          {props.children}
        </Link>
      )}
    </>
  );
}
