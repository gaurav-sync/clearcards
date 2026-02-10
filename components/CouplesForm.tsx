"use client";

import { useState, FormEvent } from "react";

interface FormData {
  fullName: string;
  phone: string;
  city: string;
  eventType: string;
  numberOfCards: string;
  message: string;
}

export default function CouplesForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    city: "",
    eventType: "wedding",
    numberOfCards: "",
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
      const response = await fetch("/api/contact/couples", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request");
      }

      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          phone: "",
          city: "",
          eventType: "wedding",
          numberOfCards: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          We&apos;ll get in touch with you shortly to discuss your invitation cards.
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
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-primary mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="Enter your full name"
        />
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
            className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-primary mb-2">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Your city"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-primary mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="wedding">Wedding</option>
            <option value="engagement">Engagement</option>
            <option value="reception">Reception</option>
            <option value="other">Other Celebration</option>
          </select>
        </div>

        <div>
          <label htmlFor="numberOfCards" className="block text-sm font-medium text-primary mb-2">
            Number of Cards *
          </label>
          <input
            type="number"
            id="numberOfCards"
            name="numberOfCards"
            required
            min="50"
            value={formData.numberOfCards}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="e.g., 200"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          placeholder="Any specific requirements or questions?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Request Free Cards"}
      </button>
    </form>
  );
}
