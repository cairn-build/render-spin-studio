import { useState } from 'react';
import { ShoppingCart, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Badge } from '@/components/ui/badge';
import { useInquiryCart } from '@/contexts/InquiryCartContext';
import { InquirySubmissionForm } from './InquirySubmissionForm';

export const InquiryCartDrawer = () => {
  const { state, removeItem } = useInquiryCart();
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const handleRemoveItem = (productId: number) => {
    removeItem(productId);
  };

  if (showSubmissionForm) {
    return <InquirySubmissionForm onClose={() => setShowSubmissionForm(false)} />;
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Inquiry Cart
          {state.items.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
              {state.items.length}
            </Badge>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Inquiry Cart ({state.items.length} items)</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 max-h-96 overflow-y-auto">
          {state.items.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Your inquiry cart is empty. Add some products to get started!
            </p>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-lg bg-card"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="secondary">{item.category}</Badge>
                      {item.subcategory && (
                        <Badge variant="outline">{item.subcategory}</Badge>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleRemoveItem(item.id)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <div className="pt-4 border-t">
                <Button
                  onClick={() => setShowSubmissionForm(true)}
                  className="w-full"
                  disabled={state.items.length === 0}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Inquiry
                </Button>
              </div>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};