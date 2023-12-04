import React from "react";

export default function useSideBarFillter() {
  // Function to generate sampleData based on allDeveloper
  const generateSampleData = (developers) => {
    const sideBarfiiter = developers.map((brand) => brand.DeveloperName);

    return [
      {
        title: "brand",
        items: sideBarfiiter,
      },
      {
        title: "size",
        items: ["2BHK", "3BHK"],
      },
      {
        title: "category",
        items: ["Commercial", "Residential"],
      },
    ];
  };
  return {
    generateSampleData,
  };
}
