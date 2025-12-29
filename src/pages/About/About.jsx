import { useEffect } from "react";
import { FaLeaf, FaShippingFast, FaAward } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Jane Smith",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Michael Brown",
      role: "Co-Founder & COO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Procurement",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "David Lee",
      role: "Customer Experience",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const values = [
    {
      icon: <FaLeaf />,
      title: "100% Organic",
      desc: "Every product is verified organic, free from synthetic pesticides.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      desc: "Our logistics chain is optimized for ultra-fresh farm-to-door delivery.",
    },
    {
      icon: <MdSupportAgent />,
      title: "Expert Support",
      desc: "Our agronomists and support team are available for your needs 24/7.",
    },
    {
      icon: <FaAward />,
      title: "Quality Awarded",
      desc: "Recognized as the leading organic supplier for 3 consecutive years.",
    },
  ];

  return (
    <div className="container py-12 md:py-24 space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-110"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2000&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 text-center">
          <div className="max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 p-12 md:p-20 rounded-[3rem] shadow-2xl space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-200 border border-primary-500/30 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              Our Heritage
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white font-heading tracking-tight leading-none">
              The <span className="text-primary-400">Nest</span> Story
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Redefining the relationship between nature and the modern table
              since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Stats */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em]">
              Our Mission
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-neutral-900 font-heading leading-tight">
              Empowering a <span className="text-primary-600">Sustainable</span>{" "}
              Future.
            </h3>
          </div>
          <p className="text-lg text-neutral-500 font-medium leading-relaxed">
            Founded on the principle of uncompromised quality, Nest has grown
            from a local initiative into a nationwide beacon for sustainable
            living. We bridge the gap between conscientious farmers and people
            who value the integrity of their food.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <div className="text-5xl font-black text-neutral-900 font-heading">
                50k+
              </div>
              <div className="text-xs font-black text-neutral-400 uppercase tracking-widest mt-2 text-wrap">
                Active Members
              </div>
            </div>
            <div>
              <div className="text-5xl font-black text-neutral-900 font-heading">
                200+
              </div>
              <div className="text-xs font-black text-neutral-400 uppercase tracking-widest mt-2">
                Organic Farms
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-premium">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200"
              alt="Farm to table"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-premium border border-neutral-100 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">
                <FaAward />
              </div>
              <div>
                <div className="font-black text-neutral-900 leading-none">
                  Certified Pioneer
                </div>
                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">
                  Sustainability 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="bg-neutral-900 rounded-[4rem] p-12 md:p-24 text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-sm font-black text-primary-500 uppercase tracking-[0.3em]">
            Our Philosophy
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white font-heading tracking-tight">
            Standard of Excellence
          </h3>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] space-y-6 hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto bg-primary-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-primary-500/20">
                {v.icon}
              </div>
              <h4 className="text-xl font-black text-white font-heading">
                {v.title}
              </h4>
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em]">
            The Visionaries
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-neutral-900 font-heading">
            Meet Our Team
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group text-center space-y-6">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-soft transition-all duration-700 group-hover:shadow-premium group-hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    {/* Social icons would go here */}
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30" />
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-black text-neutral-900 font-heading">
                  {member.name}
                </h4>
                <p className="text-xs font-black text-primary-600 uppercase tracking-[0.2em] mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-[3.5rem] bg-primary-600 p-12 md:p-24 text-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/leaf.png')",
          }}
        />
        <div className="relative z-10 space-y-10">
          <h3 className="text-4xl md:text-7xl font-black text-white font-heading tracking-tight leading-none">
            Join the Organic Revolution.
          </h3>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Experience the pinnacle of freshness. Discover why thousands trust
            Nest every single day.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-white text-primary-700 font-black rounded-3xl hover:bg-neutral-100 transition-all shadow-xl shadow-primary-900/20 active:scale-95">
              Get Started
            </button>
            <button className="px-12 py-5 border-2 border-primary-400 text-white font-black rounded-3xl hover:bg-primary-500 transition-all active:scale-95 text-nowrap">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
