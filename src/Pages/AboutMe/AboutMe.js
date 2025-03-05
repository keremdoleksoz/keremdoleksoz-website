import React from "react";
import "./AboutMe.css";
import { useLanguage } from "../../Context/LanguageContext";

const AboutMe = () => {
  const { content } = useLanguage();
  
  const aboutMe = content.aboutMePage;

  return (
    <div className="aboutMePage">
      <h1 className="title">{aboutMe.title}</h1>
      <h2 className="inSummary">{aboutMe.inSummary}</h2>
      <p>{aboutMe.aboutMeText1}</p>
      <p>{aboutMe.aboutMeText2}</p>
      <p>{aboutMe.aboutMeText3}</p>
      <p>{aboutMe.aboutMeText4}</p>
      <p>{aboutMe.aboutMeText5}</p>
      <p>{aboutMe.aboutMeText6}</p>
      <p>{aboutMe.thanks}</p>
      <p>
        {aboutMe.bestRegards}
        <br />
        
        <strong>{aboutMe.keremDoleksoz}</strong>
      </p>
    </div>
  );
};

export default AboutMe;
