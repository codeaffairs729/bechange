import { Box, Container, Divider, useScrollTrigger } from "@mui/material";
import React from "react";
import Compare from "../components/Compare";
import Jumbotron from "../components/Jumbotron";
import Partners from "../components/Partners";
import Partners2 from "../components/Partners2";
import Reviews from "../components/Reviews";
import AdSection from "../components/AdSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [sectionToScroll, setSectionToScroll] = useState("");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSectionToScroll("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, background: "#fffafa" ,border:"1px solid"}}>
      <Jumbotron
        title={"Dein wirklich grünes Vergleichsportal"}
        desc={"Transparent, sicher & einfach"}
        btnText={"Vergleiche"}
        link={true}
        setSectionToScroll={setSectionToScroll}
      />
      <Compare sectionToScroll={sectionToScroll} id={sectionToScroll} />
      <Divider />
      <Partners2 />
      <Divider />
      <Container>
        <AdSection
          title={"Blog-Artikel"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus libero ullam at ipsum quibusdam illum dignissimos, quam totam!"
          }
          text1={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          text2={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </Container>
      <Divider />
      <Reviews />
    </Box>
  );
}
