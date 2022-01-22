import React, {useState, useEffect} from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function PageWrapper(props) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const bodySize = window.document.body.offsetHeight - window.innerHeight;
    const percentage = window.pageYOffset / bodySize * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header page={props.page} scroll={scrollPercentage}/>
      {props.children}
      <Footer />
    </div>
  );
}
