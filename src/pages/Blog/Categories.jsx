import { Link } from "react-router";
import Badge from "../../components/common/Badge";

export default function Categories() {
  // Mock categories with post counts
  const categories = [
    { name: "Healthy Eating", count: 12 },
    { name: "Organic Farming", count: 8 },
    { name: "Sustainable Living", count: 15 },
    { name: "Food Storage", count: 6 },
    { name: "Recipes", count: 20 },
    { name: "Food Trends", count: 9 },
    { name: "Gardening", count: 7 },
  ];

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-soft">
      <h3 className="text-2xl font-black text-neutral-900 font-heading mb-8">
        Topics
      </h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              to={`/blog/category/${category.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="flex justify-between items-center p-4 rounded-2xl hover:bg-neutral-50 transition-all group"
            >
              <span className="font-bold text-neutral-600 group-hover:text-primary-600 transition-colors">
                {category.name}
              </span>
              <Badge
                variant="neutral"
                size="sm"
                className="bg-neutral-100 text-neutral-400 font-black border-none"
              >
                {category.count}
              </Badge>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
