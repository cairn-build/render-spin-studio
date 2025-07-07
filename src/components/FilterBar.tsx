
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ["All", "Kitchen", "Bath", "Fireplace", "Furniture", "Fire", "Lifestyle"];

export const FilterBar = ({ selectedFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12 p-6 bg-white rounded-2xl shadow-lg border border-stone-200">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={selectedFilter === filter ? "default" : "outline"}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
            selectedFilter === filter
              ? "bg-stone-800 hover:bg-stone-700 text-white shadow-md"
              : "border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-stone-400"
          }`}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};
