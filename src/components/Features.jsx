import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeatureWrapper from "./feature/FeatureWrapper";
import GlassCard from "./card/GlassCard";
import DetailForm from "./forms/DetailForm";

const CARD_WIDTH = 420; // must match FeatureWrapper width

const Features = ({ items }) => {
  // 👇 middle index auto-selected
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(items.length / 2)
  );

  const next = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex((i) => i + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }
  };

  return (
    <section
      className="w-full h-screen flex flex-col overflow-hidden relative"
      id="features"
    >
      <h1 className="text-4xl md:text-6xl font-medium mb-10">
        Features
      </h1>

      
    </section>
  );
};

export default Features;
