import React, { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission (e.g., send the data to an API)
    console.log("Form submitted", formData);
  };
  useEffect(() => {
    document.title = "Contact | Gadget Hub";
  }, []);

  return (
    <div className="container mx-auto p-10 card card-bordered my-5 text-[#ffffff] bg-gradient-to-r from-[#9538e2d8] via-[#9766be] to-[#ba90f5] ">
      <div className="container mx-auto p-6 ">
        <h1 className="text-4xl card-title  font-bold mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="mb-4">
              Feel free to reach out to us for any questions or inquiries. We
              would love to hear from you!
            </p>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p>(123) 456-7890</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Email</h3>
              <p>contact@gadgetsheaven.com</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Address</h3>
              <p>1234 Main Street, City, Country</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
