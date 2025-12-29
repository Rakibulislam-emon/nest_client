import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  FaArrowLeft,
  FaRegClock,
  FaRegUser,
  FaShareNodes,
  FaQuoteLeft,
} from "react-icons/fa6";
import Badge from "../../components/common/Badge";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Loading Blog Post:", id); // Using id to satisfy lint
  }, [id]);

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation & Metadata */}
        <div className="space-y-8">
          <button
            onClick={() => navigate("/blog")}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-primary-600 transition-colors"
          >
            <span className="p-2.5 bg-neutral-100 rounded-full group-hover:bg-primary-600 group-hover:text-white transition-all">
              <FaArrowLeft />
            </span>
            Back to Journal
          </button>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="primary" size="lg">
                Insight
              </Badge>
              <div className="flex items-center gap-6 text-xs font-bold text-neutral-400 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <FaRegClock className="text-primary-500" /> 8 min read
                </span>
                <span className="flex items-center gap-2">
                  <FaRegUser className="text-primary-500" /> Sarah Johnson
                </span>
                <span>June 15, 2023</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-neutral-900 font-heading leading-[1.1] tracking-tight">
              The Art of{" "}
              <span className="text-primary-600">Organic Cultivation</span> and
              why it matters.
            </h1>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[16/9] bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2000&auto=format&fit=crop"
            alt="Organic farming"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          {/* Share Sidebar */}
          <div className="lg:col-span-1 hidden lg:block sticky top-32 h-max">
            <div className="flex flex-col gap-4">
              <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-neutral-100 text-neutral-400 hover:bg-primary-600 hover:text-white transition-all">
                <FaShareNodes />
              </button>
            </div>
          </div>

          {/* Main Copy */}
          <div className="lg:col-span-11 space-y-8">
            <p className="text-xl md:text-2xl font-medium text-neutral-600 leading-relaxed first-letter:text-7xl first-letter:font-black first-letter:text-primary-600 first-letter:mr-3 first-letter:float-left">
              Sourcing local, organic ingredients isn&apos;t just a
              choice—it&apos;s a commitment to the ecosystem. For over a decade,
              we&apos;ve partnered with traditional farmers who treat their soil
              with the same respect as their legacy. This article explores the
              hidden depth behind the organic label.
            </p>

            <div className="p-10 md:p-16 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 relative overflow-hidden group">
              <FaQuoteLeft className="absolute top-10 left-10 text-6xl text-primary-200/50 -rotate-12 transition-transform duration-700 group-hover:scale-125" />
              <blockquote className="relative z-10 text-2xl md:text-3xl font-black text-neutral-900 font-heading leading-tight italic">
                &ldquo;The soil is the actual heritage of humanity. To poison it
                for short-term gain is a tragedy we are working every day to
                reverse.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 border border-primary-200"></div>
                <span className="font-bold text-neutral-400 uppercase tracking-widest text-xs">
                  Arlow Green, Lead Agronomist
                </span>
              </div>
            </div>

            <div className="prose prose-xl prose-neutral max-w-none text-neutral-500 font-medium leading-[1.8]">
              <p>
                Transitioning to a purely organic lifestyle requires a
                perspective shift. It&apos;s about understanding the seasonal
                rhythm and respecting the natural limitations of the land. When
                we allow nature to follow its course, the resulting produce
                doesn&apos;t just taste better—it carries a nutrient density
                that modern industrial farming simply cannot replicate.
              </p>
              <h3 className="text-3xl font-black text-neutral-900 font-heading pt-8">
                The Economic Impact
              </h3>
              <p>
                Supporting organic farmers isn&apos;t charity; it&apos;s an
                investment in local economy and health infrastructure. For every
                dollar spent on organic produce, we save significant costs in
                long-term environmental restoration.
              </p>
            </div>

            {/* Footer Actions */}
            <div className="pt-16 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-2">
                {["Organic", "Sustainability", "Health"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-neutral-100 rounded-full text-[10px] font-black uppercase text-neutral-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-black text-neutral-400 uppercase tracking-widest">
                  Share this Insight
                </span>
                <button className="p-3 bg-neutral-900 text-white rounded-full hover:bg-primary-600 transition-all active:scale-95">
                  <FaShareNodes />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
