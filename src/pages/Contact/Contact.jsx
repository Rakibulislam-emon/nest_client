import { useEffect, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Badge from "../../components/common/Badge";
import { FaPaperPlane, FaQuestionCircle } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "support@nestpremium.com",
      sub: "info@nestpremium.com",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      sub: "+1 (555) 987-6543",
    },
    {
      icon: <FiMapPin />,
      title: "Headquarters",
      value: "123 Organic Lane",
      sub: "San Francisco, CA 94107",
    },
    {
      icon: <FiClock />,
      title: "Business Hours",
      value: "Mon - Fri: 9am - 6pm",
      sub: "Sat: 10am - 4pm",
    },
  ];

  return (
    <div className="container py-12 md:py-24 space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[3.5rem] bg-neutral-900 p-12 md:p-24 text-center">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="relative z-10 space-y-6">
          <Badge
            variant="primary"
            size="lg"
            className="uppercase tracking-[0.3em]"
          >
            Connect
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black text-white font-heading tracking-tight leading-none">
            Get in <span className="text-primary-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium">
            Have questions about our premium organic selections? Our concierge
            team is here to guide you.
          </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-16">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-soft space-y-10">
            <h2 className="text-3xl font-black text-neutral-900 font-heading">
              Direct Channels
            </h2>
            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-neutral-50 rounded-2xl flex items-center justify-center text-primary-600 text-xl border border-neutral-100 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-neutral-400 uppercase tracking-widest">
                      {item.title}
                    </h3>
                    <p className="text-lg font-bold text-neutral-900 mt-1">
                      {item.value}
                    </p>
                    <p className="text-neutral-500 font-medium text-sm">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-10 md:p-16 rounded-[2.5rem] border border-neutral-100 shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
              <FaPaperPlane className="text-9xl rotate-12" />
            </div>

            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black text-neutral-900 font-heading">
                  Send an Inquiry
                </h2>
                <p className="text-neutral-500 font-medium">
                  Expected response time is within 4 business hours.
                </p>
              </div>

              {submitSuccess && (
                <div className="bg-primary-50 border border-primary-200 text-primary-700 px-6 py-4 rounded-2xl font-bold animate-fade-in flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-ping" />
                  Inquiry sent successfully. We will reach out shortly.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="space-y-2">
                  <label className="text-xs font-black text-neutral-400 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alexander Knight"
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-neutral-800 placeholder:font-normal placeholder:text-neutral-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-neutral-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@example.com"
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-neutral-800 placeholder:font-normal placeholder:text-neutral-300"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-neutral-400 uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-neutral-800 placeholder:font-normal placeholder:text-neutral-300"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-neutral-400 uppercase tracking-widest ml-1">
                    Message Detail
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Describe your request in detail..."
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl outline-none focus:border-primary-500 focus:bg-white transition-all font-bold text-neutral-800 placeholder:font-normal placeholder:text-neutral-300 resize-none"
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-5 bg-neutral-900 text-white font-black rounded-3xl hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-200 hover:-translate-y-1 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 uppercase text-sm tracking-widest"
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="relative rounded-[4rem] overflow-hidden shadow-premium border border-neutral-100 aspect-[16/6] min-h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.039145807323!2d90.40241535!3d23.7461625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sGulshan%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1685648883311!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full grayscale opacity-80"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Nest Premium Location"
        />
      </section>

      {/* FAQ Grid */}
      <section className="space-y-16">
        <div className="text-center space-y-6">
          <Badge
            variant="neutral"
            size="lg"
            className="uppercase tracking-[0.3em] bg-neutral-100 text-neutral-400"
          >
            Knowledge Base
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 font-heading">
            Frequently Asked
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              q: "What are your delivery areas?",
              a: "We currently offer boutique organic delivery to all major metropolitan hubs in the United States. Check your zip code at checkout.",
            },
            {
              q: "How can I track my order?",
              a: "Real-time satellite tracking is provided via email once your selection is dispatched from our distribution hub.",
            },
            {
              q: "What is your return policy?",
              a: "We offer a 100% excellence guarantee. If your selection doesn't meet our elite standards, contact us within 24h for a concierge resolution.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 hover:shadow-premium transition-all duration-500 space-y-6 group"
            >
              <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-primary-400 text-xl group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                <FaQuestionCircle />
              </div>
              <h3 className="text-xl font-black text-neutral-900 font-heading leading-tight">
                {faq.q}
              </h3>
              <p className="text-neutral-500 font-medium leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
