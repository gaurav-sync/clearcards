export default function Trust() {
  const points = [
    {
      icon: "✨",
      title: "Designed with dignity",
      description: "Every card reflects the importance of your celebration",
    },
    {
      icon: "🤝",
      title: "Limited sponsor presence",
      description: "Tasteful and respectful brand integration",
    },
    {
      icon: "💬",
      title: "Clear communication",
      description: "Transparent process from design to delivery",
    },
    {
      icon: "❤️",
      title: "Respect for couples & families",
      description: "Your special moment is our priority",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          Trust & Transparency
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-primary/70 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
