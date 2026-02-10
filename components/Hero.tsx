"use client";

export default function Hero() {
  const scrollToContact = (tab: "couples" | "brands") => {
    // Dispatch custom event to switch tab
    window.dispatchEvent(new CustomEvent("switchContactTab", { detail: { tab } }));
    
    // Scroll to contact section
    setTimeout(() => {
      const element = document.getElementById("contact");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-light to-white px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance leading-tight">
          Invitation cards made free — powered by trusted brands
        </h1>
        <p className="text-xl md:text-2xl text-primary/70 mb-12 max-w-3xl mx-auto text-balance">
          ClearCards helps couples get physical wedding invitation cards at zero cost, 
          while brands reach real homes through meaningful moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToContact("couples")}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            I&apos;m a Couple
          </button>
          <button
            onClick={() => scrollToContact("brands")}
            className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            I&apos;m a Brand
          </button>
        </div>
      </div>
    </section>
  );
}
