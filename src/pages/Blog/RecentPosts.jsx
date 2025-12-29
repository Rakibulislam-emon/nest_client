import { Link } from "react-router";

export default function RecentPosts() {
  // Recent posts data with real images
  const recentPosts = [
    {
      id: 5,
      title: "5 Easy Organic Recipes for Busy Weeknights",
      date: "June 2, 2023",
      image:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Understanding Food Labels: Organic vs. Natural",
      date: "May 20, 2023",
      image:
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "The Environmental Impact of Organic Farming",
      date: "May 12, 2023",
      image:
        "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "How to Start Your Own Herb Garden at Home",
      date: "April 28, 2023",
      image:
        "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-soft">
      <h3 className="text-2xl font-black text-neutral-900 font-heading mb-8">
        Recent Stories
      </h3>
      <div className="space-y-6">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex gap-4 group cursor-pointer">
            <div className="shrink-0 w-20 h-20 rounded-2xl overflow-hidden border border-neutral-100 shadow-sm transition-transform duration-500 group-hover:scale-105">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <Link
                to={`/blog/${post.id}`}
                className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2"
              >
                {post.title}
              </Link>
              <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
