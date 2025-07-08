
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const categoryFilters = [
  "All",
  "Countertops", 
  "Bathroom", 
  "Fireplaces", 
  "Landscaping", 
  "Fire Features", 
  "Shower Systems", 
  "Furniture", 
  "Range Hoods", 
  "Stair Treads"
];

// Group filters by type for better organization
const primaryFilters = ["All", "Countertops", "Bathroom", "Fireplaces"];
const secondaryFilters = ["Landscaping", "Fire Features", "Shower Systems", "Furniture", "Range Hoods", "Stair Treads"];

export const FilterBar = ({ selectedFilter, onFilterChange }: FilterBarProps) => {
  const [showAllFilters, setShowAllFilters] = useState(false);

  const isPrimaryFilter = primaryFilters.includes(selectedFilter);
  
  return (
    <div className="space-y-4">
      {/* Primary Filters - Always Visible */}
      <div className="flex flex-wrap justify-center gap-3">
        {primaryFilters.map((filter) => (
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

      {/* Secondary Filters Section */}
      <div className="flex justify-center">
        {!showAllFilters ? (
          // Dropdown for secondary filters when collapsed
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-50">
                <Filter className="w-4 h-4 mr-2" />
                More Categories
                {!isPrimaryFilter && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {selectedFilter}
                  </Badge>
                )}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 bg-white border-stone-200">
              {secondaryFilters.map((filter) => (
                <DropdownMenuItem
                  key={filter}
                  onClick={() => onFilterChange(filter)}
                  className={`cursor-pointer ${
                    selectedFilter === filter ? "bg-stone-100 font-medium" : ""
                  }`}
                >
                  {filter}
                  {selectedFilter === filter && (
                    <Badge variant="secondary" className="ml-auto text-xs">Active</Badge>
                  )}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem
                onClick={() => setShowAllFilters(true)}
                className="cursor-pointer border-t mt-1 pt-2 text-primary"
              >
                Show all filters
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          // Expanded view showing all secondary filters
          <div className="space-y-3 w-full">
            <div className="flex flex-wrap justify-center gap-2">
              {secondaryFilters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => onFilterChange(filter)}
                  className={`px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? "bg-stone-800 hover:bg-stone-700 text-white shadow-md"
                      : "border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-stone-400"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAllFilters(false)}
                className="text-stone-600 hover:text-stone-800"
              >
                Show less
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
