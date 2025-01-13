"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-10">
            We'd love to hear from you! Please fill out the form below or use
            the information provided to reach out to us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Phone Number
                </h2>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Email</h2>
                <p className="text-gray-600">contact@pizzahouse.com</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Address</h2>
                <p className="text-gray-600">
                  123 Pizza Street, Food City, FC 98765
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12">
  <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
    Visit Us
  </h2>
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28955.566027526303!2d67.02806016621102!3d24.861462485149448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eedba4c5555%3A0x9fc71c5d58e79f93!2sKarachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1674041820403!5m2!1sen!2sus"
      className="w-full h-full rounded-lg border-0"
      allowFullScreen={true}
      loading="lazy"
    ></iframe>
  </div>
</div>

      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
