"use client";

export default function ForCouples() {
  const scrollToContact = () => {
    // Dispatch custom event to switch to couples tab
    window.dispatchEvent(new CustomEvent("switchContactTab", { detail: { tab: "couples" } }));
    
    // Scroll to contact section
    setTimeout(() => {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const benefits = [
    "Get your physical wedding invitation cards free",
    "Premium quality printing",
    "Respectful and minimal brand presence",
    "Full design preview & approval before print",
    "No compromise on dignity or aesthetics",
  ];

  return (
    <section id="for-couples" className="py-20 px-4 bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            For Couples
          </h2>
          <ul className="space-y-4 text-left">
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
        </div>
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Request Free Wedding Cards
          </button>
        </div>
      </div>
    </section>
  );
}
