import { useState, useRef, useEffect } from "react";
import GlassCard from "./card/GlassCard";
import TitleText from "./titleText/TitleText"
import RecommendationSystem from "./RecommendationSystem"
import ProjectSummary from "./ProjectSummary"




const Features = () => {

  return (
    <section className="px-6 py-10" id="features">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Features
      </h2>

      <RecommendationSystem/>
      <ProjectSummary/>

      
    </section>
  );
};

export default Features;