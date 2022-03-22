import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Cta from "./common/Cta";

export default function Header({ page, scroll }) {
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuClick = () => {
    setHamburgerActive(!isHamburgerActive);
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-umbrella">
      <div className="header">
        <Link href="/" className="logo-link-wrapper">
          <StaticImage src="../../images/logo.png" alt="ConnecMe2 Logo" />
        </Link>
        <div className="main-nav">
          <div className="nav-left">
            <div className="dropdown">
              <Link
                href="/providers"
                className={`main-nav-item ${
                  page === "providers" && "is--active"
                }`}
              >
                PROVIDERS
              </Link>
            </div>
            <div className="dropdown">
              <Link
                href="/seekers"
                className={`main-nav-item ${
                  page === "seekers" && "is--active"
                }`}
              >
                SEEKERS
              </Link>
            </div>
            {/* <div className="dropdown">
              <Link
                href="/news"
                className={`main-nav-item ${page === "news" && "is--active"}`}
              >
                NEWS
              </Link>
            </div> */}
            <div className="dropdown">
              <Link
                href="/about"
                className={`main-nav-item ${page === "about" && "is--active"}`}
              >
                ABOUT
              </Link>
            </div>
            {/* <div className="dropdown">
              <a
                href="https://cm2.co.uk"
                target="_blank"
                rel="noreferrer"
                className="main-nav-item"
              >
                CM2 TRUST
              </a>
            </div> */}
          </div>
          <div className="nav-right">
            <div className="dropdown">
              <a
                href="https://dev.d25wjfvzegfqfu.amplifyapp.com/"
                target="_blank"
                rel="noreferrer"
                className="main-nav-item"
              >
                SIGN IN
              </a>
            </div>
            <div className="dropdown">
              <Cta
                href="/providers/create-account"
                className={`${page === "blog" && "is--active"}`}
              >
                Create account
              </Cta>
            </div>
          </div>
          <button
            className={`hamburger hamburger--spin ${
              isHamburgerActive && "is-active"
            }`}
            type="button"
            onClick={() => menuClick()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div className={isMenuOpen ? "expanded-nav is--active" : "expanded-nav"}>
        <Link
          href="/providers"
          className={`expanded-nav-item ${
            page === "providers" && "is--active"
          }`}
        >
          PROVIDERS
        </Link>
        <Link
          href="/seekers"
          className={`expanded-nav-item ${page === "seekers" && "is--active"}`}
        >
          SEEKERS
        </Link>
        {/* <Link
          href="/news"
          className={`expanded-nav-item ${page === "news" && "is--active"}`}
        >
          NEWS
        </Link> */}
        <Link
          href="/about"
          className={`expanded-nav-item ${page === "about" && "is--active"}`}
        >
          ABOUT
        </Link>
        <a
          href="https://dev.d25wjfvzegfqfu.amplifyapp.com/"
          target="_blank"
          rel="noreferrer"
          className="expanded-nav-item"
        >
          SIGN IN
        </a>
        <Link
          href="/providers/create-acccount"
          className={`expanded-nav-item ${
            page === "create-account" && "is--active"
          }`}
        >
          CREATE ACCOUNT
        </Link>
      </div>
      <div className={scroll ? "scroll-line" : "scroll-line hidden"}>
        <svg
          viewBox="0 -.9 100 1.8"
          xmlns="http://www.w3.org/2000/svg"
          vectorEffect="nonScalingStroke"
        >
          <line
            x1="0"
            y1="0"
            x2={scroll}
            y2="0"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}
