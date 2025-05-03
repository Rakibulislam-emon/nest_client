import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Container from "../../components/shared/Container";
import ScrollToTopButton from "../../components/shared/ScrollToTopButton";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const formattedCategory = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  useEffect(() => {
    // Scroll to top when the page is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-10 mb-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{formattedCategory}</h1>
            <p className="text-gray-600 mb-8">
              Articles in this category are coming soon.
            </p>
            <div className=" gap-4">
              <button 
                onClick={() => navigate('/blog')}
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition-colors text-sm"
              >
                Back to Blog
              </button>
              <button 
                onClick={() => navigate('/')}
                className=" w-full border p-2 "
              >
                Home
              </button>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 text-center">
            Category: {formattedCategory} • Content in preparation
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </Container>
  );
}
