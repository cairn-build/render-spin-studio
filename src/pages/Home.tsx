import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import anrTeam from "@/assets/anrTeam.jpg";
import sceltaLogo from "@/assets/scelta-1.png";
import anrLogo from "@/assets/anr-1.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 pt-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Logos Above Title */}
          <div className="flex justify-center items-center gap-12 mb-6 h-16">
            <div className="h-80 w-auto">
              <img
                src={anrLogo}
                alt="ANR Logo"
                className="h-full w-auto object-contain filter invert"
              />
            </div>

            <div className="w-1/4 max-w-[260px] h-full">
              <img
                src={sceltaLogo}
                alt="Scelta Logo"
                className="w-full h-full object-contain filter invert"
              />
            </div>
          </div>

          {/* Title and Text */}
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Welcome to ANR Concrete Studio
          </h1>

          <p className="text-2xl text-stone-300 max-w-3xl mx-auto mb-8">
            Creating beautiful and functional concrete products that excite our
            clients
          </p>

          <div className="flex gap-4 justify-center mb-4">
            <Link to="/catalogue">
              <Button
                size="lg"
                className="bg-white text-stone-800 hover:bg-stone-100"
              >
                View Catalogue
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-stone-800 hover:bg-stone-100"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            The passionate professionals behind ANR Concrete Studio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <div className="w-full h-96 rounded-2xl shadow-lg overflow-hidden">
            <img
              src={anrTeam}
              alt="ANR Concrete Studio Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Team Information */}
          <div className="order-1 lg:order-2 space-y-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-stone-800 mb-4">
                  Adam Rossetto
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Adam Rossetto, the founder of ANR Concrete Studio, has been
                  around concrete and construction in one form or another for
                  over 30 years. Growing up in a construction family, he became
                  familiar with the material and how to work with it in its
                  conventional form at an early age. Adam completed his
                  engineering degree, and was later married in 2011. On a trip
                  to California, Adam was introduced to GFRC countertops and
                  furniture. From that day forward, the learning hasn't stopped!
                  Adam's passion is creating beautiful and functional concrete
                  products that excite his clients. Adam lives in Lasalle,
                  Ontario, with his wife, two sons and daughter, who enjoy the
                  creations he comes up with almost as much as he does making
                  them!
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-stone-800 mb-4">
                  Andrew Schincariol
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Andrew Schincariol and Adam have been friends since childhood.
                  Aside from being lifelong friends, Andrew was one of the
                  original "clients" of ANR, in the infancy of Adam's adventure
                  with GFRC. Andrew's concrete countertops have been serving him
                  well since 2011! His belief in the product, and complimentary
                  skill sets to Adam's made for a natural fit that became the
                  partnership that is ANR Concrete Studio. Andrew is a partner
                  in ANR, lives in Windsor, Ontario, with his wife and two
                  daughters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Discover our range of custom concrete solutions and bring your
            vision to life
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-white text-stone-800 hover:bg-stone-100"
              >
                Our Services
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-stone-800 hover:bg-stone-100"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
