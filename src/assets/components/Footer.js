import React from "react";
import {Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-nav-section">
          <Link href="/seekers" className="footer-main-nav">
            SEEKERS
          </Link>
          <Link href="/seekers#our-app" className="footer-sub-nav">
            Our App
          </Link>
          <Link
            href="/seekers/featured-opportunities"
            className="footer-sub-nav"
          >
            Featured Opportunities
          </Link>
        </div>
        <div className="footer-nav-section">
          <Link href="/providers" className="footer-main-nav">
            PROVIDERS
          </Link>
          <Link href="/providers/register" className="footer-sub-nav">
            Register
          </Link>
          <Link href="/providers#how-it-works" className="footer-sub-nav">
            How it Works
          </Link>
        </div>
        <div className="footer-nav-section">
          <Link href="/blog" className="footer-main-nav">
            BLOG
          </Link>
          <Link href="/blog#recent-stories" className="footer-sub-nav">
            Recent Stories
          </Link>
          <Link href="/blog/contribute" className="footer-sub-nav">
            Contribute
          </Link>
        </div>
        <div className="footer-nav-section">
          <Link href="/trust" className="footer-main-nav">
            CM2 TRUST
          </Link>
          <Link href="/trust#our-projects" className="footer-sub-nav">
            Our Projects
          </Link>
          <Link href="/trust#get-in-touch" className="footer-sub-nav">
            Get In Touch
          </Link>
        </div>
        <div className="footer-nav-section">
          <Link href="/about" className="footer-main-nav">
            ABOUT
          </Link>
          <Link href="/about" className="footer-sub-nav">
            Our Story
          </Link>
          <Link href="/about#get-in-touch" className="footer-sub-nav">
            Get in Touch
          </Link>
        </div>
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
      </div>
    </div>
  );
}
