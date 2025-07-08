import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInquiryCart } from "@/contexts/InquiryCartContext";
import { InquiryCartDrawer } from "./InquiryCartDrawer";
import { useState } from "react";

export const FloatingInquiryCart = () => {
  const { state } = useInquiryCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed top-20 right-6 z-50">
        <Button
          onClick={() => setIsDrawerOpen(true)}
          className="h-14 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Inquiry Cart</span>
          <span className="sm:hidden">Cart</span>
          {state.items.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center bg-red-500 hover:bg-red-500 text-white border-2 border-white">
              {state.items.length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Cart Drawer */}
      {isDrawerOpen && (
        <InquiryCartDrawer onClose={() => setIsDrawerOpen(false)} />
      )}
    </>
  );
};
