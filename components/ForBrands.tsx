"use client";

export default function ForBrands() {
  const scrollToContact = () => {
    // Dispatch custom event to switch to brands tab
    window.dispatchEvent(new CustomEvent("switchContactTab", { detail: { tab: "brands" } }));
    
    // Scroll to contact section
    setTimeout(() => {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const benefits = [
    "Reach real households, not just screens",
    "Invitations are opened, shared, and remembered",
    "High-intent audience during weddings",
    "Category exclusivity per card",
  ];

  return (
    <section id="for-brands" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            For Brands
          </h2>
          <ul className="space-y-4 text-left mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg text-primary/80">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
            <p className="text-primary/80 text-lg">
              Sponsorship details are discussed personally after you contact us.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Partner With ClearCards
          </button>
        </div>
      </div>
    </section>
  );
}
