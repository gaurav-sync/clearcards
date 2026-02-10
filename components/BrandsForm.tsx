"use client";

import { useState, FormEvent } from "react";

interface FormData {
  brandName: string;
  contactPerson: string;
  phone: string;
  email: string;
  cityRegion: string;
  message: string;
}

export default function BrandsForm() {
  const [formData, setFormData] = useState<FormData>({
    brandName: "",
    contactPerson: "",
    phone: "",
    email: "",
    cityRegion: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact/brands", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          brandName: "",
          contactPerson: "",
          phone: "",
          email: "",
          cityRegion: "",
          message: "",
        });
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-semibold text-primary mb-2">
          Thank you for your interest!
        </h3>
        <p className="text-primary/70">
          We'll reach out shortly to discuss partnership opportunities.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="brandName" className="block text-sm font-medium text-primary mb-2">
            Brand Name *
          </label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            required
            value={formData.brandName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="Your brand name"
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-primary mb-2">
            Contact Person *
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            required
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="Full name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cityRegion" className="block text-sm font-medium text-primary mb-2">
          City / Region *
        </label>
        <input
          type="text"
          id="cityRegion"
          name="cityRegion"
          required
          value={formData.cityRegion}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          placeholder="Your operating region"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
          placeholder="Tell us about your brand and partnership interest"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-accent text-primary rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Partner With Us"}
      </button>
    </form>
  );
}
