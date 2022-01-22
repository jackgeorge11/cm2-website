import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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

          <div className="dropdown">
            <Link
              href="/seekers"
              className={`main-nav-item ${page === "seekers" && "is--active"}`}
            >
              SEEKERS
            </Link>
            <div className="dropdown-menu seekers">
              <Link href="/seekers#our-app" className="dropdown-nav-item">
                Our App
              </Link>
              <Link
                href="/seekers/featured-opportunities"
                className="dropdown-nav-item"
              >
                Featured Opportunities
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <Link
              href="/providers"
              className={`main-nav-item ${
                page === "providers" && "is--active"
              }`}
            >
              PROVIDERS
            </Link>
            <div className="dropdown-menu providers">
              <Link href="/providers/register" className="dropdown-nav-item">
                Register
              </Link>
              <Link
                href="/providers#how-it-works"
                className="dropdown-nav-item"
              >
                How it works
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <Link
              href="/blog"
              className={`main-nav-item ${page === "blog" && "is--active"}`}
            >
              BLOG
            </Link>
            <div className="dropdown-menu providers">
              <Link href="/blog#recent-stories" className="dropdown-nav-item">
                Recent Stories
              </Link>
              <Link href="/blog/contribute" className="dropdown-nav-item">
                Contribute
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <Link
              href="/trust"
              className={`main-nav-item ${page === "trust" && "is--active"}`}
            >
              CM2 TRUST
            </Link>
            <div className="dropdown-menu trust">
              <Link href="/trust#our-projects" className="dropdown-nav-item">
                Our Projects
              </Link>
              <Link href="/trust#get-in-touch" className="dropdown-nav-item">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <Link
              href="/about"
              className={`main-nav-item ${page === "about" && "is--active"}`}
            >
              ABOUT
            </Link>
            <div className="dropdown-menu blog">
              <Link href="/about" className="dropdown-nav-item">
                Our Story
              </Link>
              <Link href="/about#get-in-touch" className="dropdown-nav-item">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={isMenuOpen ? "expanded-nav is--active" : "expanded-nav"}>
        <Link
          href="/seekers"
          className={`expanded-nav-item ${page === "seekers" && "is--active"}`}
        >
          SEEKERS
        </Link>
        <Link
          href="/providers"
          className={`expanded-nav-item ${
            page === "providers" && "is--active"
          }`}
        >
          PROVIDERS
        </Link>
        <Link
          href="/blog"
          className={`expanded-nav-item ${page === "blog" && "is--active"}`}
        >
          BLOG
        </Link>
        <Link
          href="/trust"
          className={`expanded-nav-item ${page === "trust" && "is--active"}`}
        >
          CM2 TRUST
        </Link>
        <Link href="/about">
          <a
            className={`expanded-nav-item ${page === "about" && "is--active"}`}
          >
            ABOUT
          </a>
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
