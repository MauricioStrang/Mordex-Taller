//Component to manage the scroll behavior of the banner visibility

"use client";
import { useState, useEffect } from "react";
import Banner from "../banner/banner";
import Header from "../header/header";

const ScrollManager = ({ children }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsBannerVisible(true); // Show banner when scrolled to top
    } else {
      setIsBannerVisible(false); // Hide banner when scrolled down
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Banner isVisible={isBannerVisible} />
      <Header />
      {children}
    </>
  );
};

export default ScrollManager;