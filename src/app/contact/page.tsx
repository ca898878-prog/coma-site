"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <section className="max-w-3xl mx-auto px-6 py-24">
        {!submitted ? (
          <>
            {/* Header */}
            <h1 className="text-4xl font-serif text-emerald-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-10">
              Have a question, suggestion, or just want to say hello?  
              Send us a message and we’ll get back to you shortly.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-emerald-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
              >
                Send Message
              </button>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
            <h2 className="text-3xl font-serif text-emerald-900 mb-4">
              Thank you!
            </h2>
            <p className="text-gray-600 mb-6">
              Your inquiry has been received.  
              We’ll get back to you shortly.
            </p>
            <p className="text-amber-500 text-2xl">🌼</p>
          </div>
        )}
      </section>
    </main>
  );
}
