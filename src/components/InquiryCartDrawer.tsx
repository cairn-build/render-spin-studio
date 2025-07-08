import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useInquiryCart } from '@/contexts/InquiryCartContext';
import { InquirySubmissionForm } from './InquirySubmissionForm';

interface InquiryCartDrawerProps {
  onClose: () => void;
}

export const InquiryCartDrawer = ({ onClose }: InquiryCartDrawerProps) => {
  const { state, removeItem } = useInquiryCart();
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const handleRemoveItem = (productId: number) => {
    removeItem(productId);
  };

  if (showSubmissionForm) {
    return <InquirySubmissionForm onClose={() => setShowSubmissionForm(false)} />;
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Inquiry Cart ({state.items.length} items)</DialogTitle>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-96">
          {state.items.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Your inquiry cart is empty. Add some products to get started!
            </p>
          ) : (
            <div className="space-y-4 p-1">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors"
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
            </div>
          )}
        </div>
        
        {state.items.length > 0 && (
          <div className="pt-4 border-t">
            <Button
              onClick={() => setShowSubmissionForm(true)}
              className="w-full"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Inquiry
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};