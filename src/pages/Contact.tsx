import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Get in touch to discuss your concrete project
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* Phone */}
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-stone-800">Call or Text</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-stone-700">
                (519) 981-6610
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-stone-800">Email Inquires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold text-stone-700">
                info@anrcs.ca
              </p>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="text-center md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-stone-800">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 leading-relaxed">
                921 Tecumseh Road West<br />
                Windsor, Ontario<br />
                N8X 2A9, Canada
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Hours */}
        <Card className="max-w-md mx-auto mt-8 text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-stone-800">Business Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700">
              Monday - Friday<br />
              8am - 5pm
            </p>
            <p className="text-sm text-stone-500 mt-2 italic">
              Appointments Preferred
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;