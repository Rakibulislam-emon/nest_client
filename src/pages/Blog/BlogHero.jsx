export default function BlogHero() {
  return (
    <div className="relative bg-green-50 rounded-xl overflow-hidden my-8">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-transparent"></div>
      <div className="relative z-10 py-16 px-8 md:px-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Blog</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover the latest news, tips, and insights about organic products and sustainable living.
        </p>
      </div>
    </div>
  );
}
