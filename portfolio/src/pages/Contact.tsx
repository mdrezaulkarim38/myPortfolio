import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r bg-gray-100 pt-25 pb-10 ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Contact Me</h2>
        <p className="text-lg text-gray-700 text-center mb-4">Love to hear from you! Get in touch.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="purpose">
              Purpose
            </label>
            <input
              type="text"
              name="purpose"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              rows={3} // Reduced height for the textarea
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
