import { useEffect } from "react";
import Container from "../../components/shared/Container";
import { FaLeaf, FaShippingFast, FaUsers, FaAward } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import ScrollToTopButton from "../../components/shared/ScrollToTopButton";

export default function About() {
  useEffect(() => {
    // Scroll to top when the page is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      {/* Hero Section */}
      <div className="relative bg-green-50 rounded-xl overflow-hidden my-8 ">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
        <div className="relative z-10 py-16 px-8 md:px-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Nest</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your trusted partner for fresh, organic groceries delivered to your doorstep.
          </p>
          <p className="text-gray-600">
            Founded in 2020, Nest has grown from a small local store to a nationwide service
            committed to providing the highest quality organic products while supporting
            sustainable farming practices.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaLeaf className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We're committed to sustainable practices throughout our supply chain, from farm to table.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaUsers className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-gray-600">
              Supporting local farmers and producers while building a community of health-conscious consumers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaAward className="text-amber-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-600">
              We never compromise on quality, ensuring only the freshest, organic products reach your home.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="my-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <div className="md:flex gap-8 items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
              alt="Our team" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">
              Nest began with a simple idea: make fresh, organic groceries accessible to everyone. Our founders, 
              Jane and Michael, were frustrated by the lack of quality organic options in their neighborhood.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small farmer's market stand quickly grew into a beloved community store. 
              As demand increased, we expanded our operations while maintaining our core values of sustainability, 
              quality, and community support.
            </p>
            <p className="text-gray-600">
              Today, Nest serves thousands of customers nationwide, but we still maintain direct relationships 
              with our farmers and producers, ensuring the highest quality products reach your table.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nest</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <FaLeaf className="text-green-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">100% Organic</h3>
            <p className="text-gray-600">
              All our products are certified organic, free from harmful pesticides and chemicals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <FaShippingFast className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              We deliver your groceries within 24 hours to ensure maximum freshness.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <MdSupportAgent className="text-purple-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our customer service team is always available to assist with any questions or concerns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <FaAward className="text-amber-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">
              Not satisfied? We offer a 100% money-back guarantee on all our products.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Jane Smith",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            },
            {
              name: "Michael Brown",
              role: "Co-Founder & COO",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            },
            {
              name: "Sarah Johnson",
              role: "Head of Procurement",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            },
            {
              name: "David Lee",
              role: "Customer Experience",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end justify-center">
                  <div className="p-4 text-white">
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="hover:text-green-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="hover:text-green-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="hover:text-green-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="my-16 bg-green-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Emily R.",
              location: "New York",
              quote: "Nest has completely changed how I shop for groceries. The quality is exceptional, and I love supporting sustainable farming practices.",
              rating: 5
            },
            {
              name: "Thomas K.",
              location: "Chicago",
              quote: "The convenience of having fresh organic produce delivered to my door has been a game-changer. Their customer service is also top-notch!",
              rating: 5
            },
            {
              name: "Sophia L.",
              location: "Los Angeles",
              quote: "I've tried several grocery delivery services, but Nest stands out for their commitment to quality and sustainability. Highly recommend!",
              rating: 4
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-500 text-sm">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center">
                <FaLeaf className="text-green-600 text-4xl" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Environmental Stewardship</h3>
              <p className="text-gray-600">
                We believe in protecting our planet for future generations. That's why we work exclusively with farmers who practice sustainable agriculture, minimize water usage, and reduce carbon emissions. Our packaging is eco-friendly and we're constantly looking for ways to reduce our environmental footprint.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center">
                <FaUsers className="text-blue-600 text-4xl" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                We believe in building strong, sustainable communities. We pay fair prices to our farmers and producers, support local food banks, and run educational programs about nutrition and sustainable living. When you shop with Nest, you're helping to create a more equitable food system.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-amber-100 w-24 h-24 rounded-full flex items-center justify-center">
                <FaAward className="text-amber-600 text-4xl" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Uncompromising Quality</h3>
              <p className="text-gray-600">
                Quality is at the heart of everything we do. We carefully select each product in our inventory, working directly with farmers and producers who share our commitment to excellence. We regularly visit farms, conduct quality tests, and gather customer feedback to ensure we're always delivering the best.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="my-16 bg-green-600 text-white p-8 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Have questions about our products or services? Our team is here to help!
        </p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
          Contact Us
        </button>
      </div>
      
      <ScrollToTopButton />
    </Container>
  );
}
