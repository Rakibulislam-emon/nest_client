import { Link } from "react-router";
import Badge from "../../components/common/Badge";
import { FaRegClock, FaRegUser, FaArrowRight } from "react-icons/fa6";

export default function BlogPosts() {
  // Blog post data with real images
  const blogPosts = [
    {
      id: 1,
      title: "10 Benefits of Organic Vegetables You Should Know",
      excerpt:
        "Discover the health benefits of incorporating organic vegetables into your daily diet and how they can improve your overall wellbeing.",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1200&q=80",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      category: "Healthy Eating",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Store Fresh Produce to Make It Last Longer",
      excerpt:
        "Learn the best practices for storing different types of fruits and vegetables to extend their freshness and reduce food waste.",
      image:
        "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&w=1200&q=80",
      date: "May 28, 2023",
      author: "Michael Chen",
      category: "Food Storage",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Seasonal Eating: Why It Matters and How to Start",
      excerpt:
        "Explore the benefits of eating seasonally and get tips on how to incorporate more seasonal produce into your meals.",
      image:
        "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&w=1200&q=80",
      date: "April 10, 2023",
      author: "Emma Wilson",
      category: "Sustainable Living",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Rise of Plant-Based Alternatives in Modern Cooking",
      excerpt:
        "Discover how plant-based alternatives are changing the culinary landscape and how you can incorporate them into your cooking.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
      date: "March 22, 2023",
      author: "David Rodriguez",
      category: "Food Trends",
      readTime: "10 min read",
    },
  ];

  return (
    <div className="space-y-16">
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Image Section */}
            <div className="md:col-span-5 relative overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-soft transition-transform duration-700 group-hover:shadow-premium group-hover:-translate-y-2">
              <Link to={`/blog/${post.id}`} className="block aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </Link>
              <div className="absolute top-6 left-6">
                <Badge
                  variant="primary"
                  size="lg"
                  className="backdrop-blur-md shadow-lg"
                >
                  {post.category}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-neutral-400 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <FaRegClock className="text-primary-500" /> {post.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <FaRegUser className="text-primary-500" /> {post.author}
                </span>
                <span>{post.date}</span>
              </div>

              <Link to={`/blog/${post.id}`} className="block">
                <h3 className="text-3xl font-black text-neutral-900 font-heading leading-tight group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
              </Link>

              <p className="text-neutral-500 font-medium leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-3 text-primary-600 font-black uppercase text-xs tracking-[0.2em] group/link"
                >
                  Read Full Article
                  <span className="p-2 bg-neutral-100 rounded-full group-hover/link:bg-primary-600 group-hover/link:text-white transition-all">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Section */}
      <div className="pt-12 flex justify-center">
        <button className="px-12 py-5 bg-neutral-900 text-white font-black rounded-3xl hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-200 hover:-translate-y-1 active:scale-95 group">
          <span className="flex items-center gap-3 uppercase text-sm tracking-widest">
            Load More Stories
            <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:animate-ping"></div>
          </span>
        </button>
      </div>
    </div>
  );
}
