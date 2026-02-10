import Image from "next/image";

export default function SampleDesigns() {
  const designs = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="py-20 px-4 bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
          Sample Card Designs
        </h2>
        <p className="text-center text-primary/60 mb-12 text-lg">
          Sample designs shown for representation only
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div
              key={design}
              className="aspect-[3/4] bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-accent/20"
            >
              <Image
                src={`/samplecards/sample${design}.png`}
                alt={`Wedding invitation card design ${design}`}
                width={400}
                height={533}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
