import { useEffect } from "react";
import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";

export default function Blog() {
  useEffect(() => {
    // Scroll to top when the page is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-12 md:py-20">
      <BlogHero />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
        {/* Main Content: Blog List */}
        <div className="lg:col-span-8">
          <BlogPosts />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          <div className="sticky top-28 space-y-12">
            <RecentPosts />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
