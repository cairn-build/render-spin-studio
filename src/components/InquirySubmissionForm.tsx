import { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useInquiryCart } from '@/contexts/InquiryCartContext';
import { useToast } from '@/hooks/use-toast';

interface InquirySubmissionFormProps {
  onClose: () => void;
}

export const InquirySubmissionForm = ({ onClose }: InquirySubmissionFormProps) => {
  const { state, clearCart } = useInquiryCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const itemsList = state.items.map(item => 
        `- ${item.title} (${item.category}${item.subcategory ? ` - ${item.subcategory}` : ''})`
      ).join('\n');

      const emailBody = `
New Inquiry from ANR Concrete Studio Website

Customer Information:
Name: ${formData.name}
Email: ${formData.email}

Selected Items:
${itemsList}

${formData.message ? `Additional Message:\n${formData.message}` : ''}

---
This inquiry was submitted through the ANR Concrete Studio website.
      `;

      // Create mailto link (fallback method)
      const subject = encodeURIComponent('New Inquiry from ANR Concrete Studio Website');
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:ethan@scelta.ca?subject=${subject}&body=${body}`;

      // Try to submit via a form service (you can replace this with your preferred service)
      const formSubmissionData = {
        to: 'ethan@scelta.ca',
        subject: 'New Inquiry from ANR Concrete Studio Website',
        name: formData.name,
        email: formData.email,
        message: formData.message,
        items: state.items,
        body: emailBody
      };

      // For now, we'll use the mailto method
      // In a real application, you'd want to use a backend service or email API
      window.location.href = mailtoLink;

      toast({
        title: "Inquiry submitted!",
        description: "Your inquiry has been submitted. We'll get back to you soon!",
      });

      clearCart();
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Submit Your Inquiry</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Selected Items Review */}
          <div>
            <h3 className="font-semibold mb-3">Selected Items ({state.items.length})</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto border rounded-md p-3">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.title}</span>
                  <div className="flex gap-1">
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    {item.subcategory && (
                      <Badge variant="outline" className="text-xs">{item.subcategory}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any additional details about your project or questions..."
                rows={4}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" onClick={onClose} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};