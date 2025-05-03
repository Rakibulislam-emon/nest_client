import { Link } from "react-router";

export default function Categories() {
  // Mock categories with post counts
  const categories = [
    { name: "Healthy Eating", count: 12 },
    { name: "Organic Farming", count: 8 },
    { name: "Sustainable Living", count: 15 },
    { name: "Food Storage", count: 6 },
    { name: "Recipes", count: 20 },
    { name: "Food Trends", count: 9 },
    { name: "Gardening", count: 7 }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category.name} className="flex justify-between items-center">
            <Link 
              to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-green-600 transition-colors"
            >
              {category.name}
            </Link>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}