export default function BlogHero() {
  return (
    <div className="relative h-[450px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl group">
      {/* Background Image with Parallax-like scale effect on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out group-hover:scale-110"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop)",
        }}
      ></div>

      {/* Dynamic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-primary-900/10 mix-blend-overlay"></div>

      {/* Glassmorphism Content Card */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
        <div className="max-w-4xl w-full backdrop-blur-xl bg-white/10 border border-white/20 p-10 md:p-20 rounded-[2.5rem] shadow-2xl text-center space-y-6 transform transition-all duration-700 hover:bg-white/15">
          <div className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-200 border border-primary-500/30 rounded-full text-xs font-black uppercase tracking-[0.2em]">
            The Nest Journal
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white font-heading tracking-tight leading-none drop-shadow-2xl">
            Our <span className="text-primary-400">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
            Immerse yourself in the world of organic excellence. Discover the
            latest insights, sustainable rituals, and culinary secrets from our
            experts.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
            <div className="h-1 w-4 bg-white/30 rounded-full"></div>
            <div className="h-1 w-4 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
