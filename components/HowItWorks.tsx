export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Couples choose a card design",
      description: "Browse our collection and select the perfect invitation card for your celebration",
    },
    {
      number: "02",
      title: "Trusted brands sponsor the printing",
      description: "Respectful brand partners make your cards possible through elegant sponsorship",
    },
    {
      number: "03",
      title: "We design, print & deliver",
      description: "Premium quality physical cards delivered to your doorstep at zero cost",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          How ClearCards Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="text-6xl font-bold text-accent/20 mb-4 group-hover:text-accent/40 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-primary/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
