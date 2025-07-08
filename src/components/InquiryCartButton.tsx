import { ShoppingCart, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInquiryCart } from '@/contexts/InquiryCartContext';
import { Product } from '@/types/Product';
import { useToast } from '@/hooks/use-toast';

interface InquiryCartButtonProps {
  product: Product;
}

export const InquiryCartButton = ({ product }: InquiryCartButtonProps) => {
  const { addItem, isInCart } = useInquiryCart();
  const { toast } = useToast();
  const inCart = isInCart(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!inCart) {
      addItem(product);
      toast({
        title: "Added to inquiry cart",
        description: `${product.title} has been added to your inquiry.`,
      });
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={inCart}
      size="sm"
      variant={inCart ? "secondary" : "default"}
      className="w-full mt-3"
    >
      {inCart ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          In Cart
        </>
      ) : (
        <>
          <Plus className="w-4 h-4 mr-2" />
          Add to Inquiry
        </>
      )}
    </Button>
  );
};