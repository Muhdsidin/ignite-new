import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { HyperText } from "../ui/hyper-text";

function Offer() {
  return (
    <div className=" w-full">
      <div className=" w-full">
      <HyperText
      className="text-5xl font-bold text-white"
      text="Why us"
    />
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}

export default Offer;