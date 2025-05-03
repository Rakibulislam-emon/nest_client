import { Link } from "react-router";

export default function BlogPosts() {
  // Blog post data with real images
  const blogPosts = [
    {
      id: 1,
      title: "10 Benefits of Organic Vegetables You Should Know",
      excerpt: "Discover the health benefits of incorporating organic vegetables into your daily diet and how they can improve your overall wellbeing.",
      image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      category: "Healthy Eating"
    },
    {
      id: 2,
      title: "How to Store Fresh Produce to Make It Last Longer",
      excerpt: "Learn the best practices for storing different types of fruits and vegetables to extend their freshness and reduce food waste.",
      image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "May 28, 2023",
      author: "Michael Chen",
      category: "Food Storage"
    },
    {
      id: 3,
      title: "Seasonal Eating: Why It Matters and How to Start",
      excerpt: "Explore the benefits of eating seasonally and get tips on how to incorporate more seasonal produce into your meals.",
      image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "April 10, 2023",
      author: "Emma Wilson",
      category: "Sustainable Living"
    },
    {
      id: 4,
      title: "The Rise of Plant-Based Alternatives in Modern Cooking",
      excerpt: "Discover how plant-based alternatives are changing the culinary landscape and how you can incorporate them into your cooking.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "March 22, 2023",
      author: "David Rodriguez",
      category: "Food Trends"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
      <div className="space-y-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span className="text-green-600">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-green-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}

