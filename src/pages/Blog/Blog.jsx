import { useEffect } from "react";
import Container from "../../components/shared/Container";
import ScrollToTopButton from "../../components/shared/ScrollToTopButton";
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
    <Container>
      <BlogHero />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12">
        <div className="lg:col-span-2">
          <BlogPosts />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <RecentPosts />
            <Categories />
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </Container>
  );
}
