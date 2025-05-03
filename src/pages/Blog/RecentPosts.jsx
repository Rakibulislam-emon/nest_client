import { Link } from "react-router";

export default function RecentPosts() {
  // Recent posts data with real images
  const recentPosts = [
    {
      id: 5,
      title: "5 Easy Organic Recipes for Busy Weeknights",
      date: "June 2, 2023",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Understanding Food Labels: Organic vs. Natural",
      date: "May 20, 2023",
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "The Environmental Impact of Organic Farming",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "How to Start Your Own Herb Garden at Home",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map(post => (
          <div key={post.id} className="flex gap-3">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <Link 
                to={`/blog/${post.id}`}
                className="font-medium hover:text-green-600 transition-colors"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
