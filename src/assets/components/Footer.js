import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-nav-section">
          <Link href="/providers" className="footer-main-nav">
            PROVIDERS
          </Link>
          <a
            href="https://dev.d25wjfvzegfqfu.amplifyapp.com/dashboard"
            target="_blank"
            rel="noreferrer"
            className="footer-sub-nav"
          >
            Sign In
          </a>
          <Link href="/providers/create-account" className="footer-sub-nav">
            Create Account
          </Link>
        </div>
        <div className="footer-nav-section">
          <Link href="/seekers" className="footer-main-nav">
            SEEKERS
          </Link>
          <Link href="/seekers/download" className="footer-sub-nav">
            Download Our App
          </Link>
        </div>
        {/* <div className="footer-nav-section">
          <Link href="/news" className="footer-main-nav">
            NEWS
          </Link>
          <Link href="/news/contribute" className="footer-sub-nav">
            Contribute
          </Link>
        </div> */}
        <div className="footer-nav-section">
          <Link href="/about" className="footer-main-nav">
            ABOUT
          </Link>
        </div>
        <div className="footer-nav-section">
          <Link href="/trust" className="footer-main-nav">
            TRUST
          </Link>
        </div>
        {/* <div className="footer-nav-section">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ConnecMe2/"
            className="footer-main-nav"
          >
            CM2 TRUST
          </a>
        </div> */}
      </div>
      <div className="footer-assets">
        <Link href="/" className="logo-link-wrapper">
          <StaticImage src="../../images/logo.png" alt="App Mock" />
        </Link>
        <div className="socials">
          <a
            target="_blank"
            rel="noreferrer"
            className="social-icon-wrapper"
            href="https://www.facebook.com/ConnecMe2/"
          >
            <StaticImage src="../../images/icons/facebook.png" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-icon-wrapper"
            href="https://www.instagram.com/connecme2/"
          >
            <StaticImage src="../../images/icons/instagram.png" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-icon-wrapper"
            href="https://twitter.com/connecme2"
          >
            <StaticImage src="../../images/icons/twitter.png" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-icon-wrapper"
            href="https://www.tiktok.com/@connecme2"
          >
            <StaticImage src="../../images/icons/tiktok.png" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-icon-wrapper"
            href="https://www.youtube.com/channel/UCMPpu68pn_wJpiguGPNPlmA"
          >
            <StaticImage src="../../images/icons/youtube.png" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-icon-wrapper"
            href="https://www.linkedin.com/company/connecme2/"
          >
            <StaticImage src="../../images/icons/linkedin.png" />
          </a>
        </div>
        <div className="legal-docs">
          <a
            href="/cm2-website-privacy-policy.pdf"
            className="hover-link"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
          {" | "}
          <a
            href="/cm2-cookie-policy.pdf"
            className="hover-link"
            target="_blank"
            rel="noreferrer"
          >
            Cookies
          </a>
          {" | "}
          <a
            href="/cm2-website-terms-of-use.pdf"
            className="hover-link"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Use
          </a>
        </div>
        <a href="mailto:hello@cm2.co.uk" className="hover-link">
          hello@cm2.co.uk
        </a>
      </div>
    </div>
  );
}
