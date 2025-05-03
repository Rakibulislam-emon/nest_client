import { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import ScrollToTopButton from "../../components/shared/ScrollToTopButton";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function Contact() {
  useEffect(() => {
    // Scroll to top when the page is loaded
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <Container>
      {/* Hero Section */}
      <div className="relative bg-green-50 rounded-xl overflow-hidden my-8">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
        <div className="relative z-10 py-12 px-8 md:px-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions or feedback? We&apos;d love to hear from you. Fill out the form below or reach out through any of our contact channels.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 my-12">
        {/* Contact Information */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-50 p-3 rounded-full mr-4">
                  <FiMail className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">support@nestorganics.com</p>
                  <p className="text-gray-600">info@nestorganics.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-50 p-3 rounded-full mr-4">
                  <FiPhone className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-50 p-3 rounded-full mr-4">
                  <FiMapPin className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600 mt-1">
                    123 Organic Lane<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-50 p-3 rounded-full mr-4">
                  <FiClock className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600 mt-1">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We&apos;ll get back to you as soon as possible.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="my-12 bg-white rounded-lg shadow-sm overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.039145807323!2d90.40241535!3d23.7461625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sGulshan%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1685648883311!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nest Organics Location"
        ></iframe>
      </div>
      
      {/* FAQ Section */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">What are your delivery areas?</h3>
            <p className="text-gray-600">
              We currently deliver to all major cities in the United States. Enter your zip code at checkout to confirm if we deliver to your area.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">How can I track my order?</h3>
            <p className="text-gray-600">
              Once your order is shipped, you&apos;ll receive a tracking number via email. You can also track your order in your account dashboard.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">What is your return policy?</h3>
            <p className="text-gray-600">
              We offer a 100% satisfaction guarantee. If you&apos;re not happy with your purchase, please contact us within 24 hours of delivery for a refund or replacement.
            </p>
          </div>
        </div>
      </div>
      
      <ScrollToTopButton />
    </Container>
  );
}
