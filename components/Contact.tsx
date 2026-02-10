"use client";

import { useState, useEffect } from "react";
import CouplesForm from "./CouplesForm";
import BrandsForm from "./BrandsForm";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"couples" | "brands">("couples");

  useEffect(() => {
    const handleTabSwitch = (event: CustomEvent<{ tab: "couples" | "brands" }>) => {
      setActiveTab(event.detail.tab);
    };

    window.addEventListener("switchContactTab", handleTabSwitch as EventListener);

    return () => {
      window.removeEventListener("switchContactTab", handleTabSwitch as EventListener);
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-neutral-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Get Started
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-md">
            <button
              onClick={() => setActiveTab("couples")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "couples"
                  ? "bg-primary text-white"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              For Couples
            </button>
            <button
              onClick={() => setActiveTab("brands")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "brands"
                  ? "bg-accent text-primary"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              For Brands
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          {activeTab === "couples" ? <CouplesForm /> : <BrandsForm />}
        </div>
      </div>
    </section>
  );
}
