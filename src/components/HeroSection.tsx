import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-purple-dark">Victor Shittu</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Frontend Developer passionate about creating beautiful web
            experiences
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
            I specialize in building responsive websites with HTML, CSS, and
            JavaScript. Currently focusing on expanding my skills with modern
            frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-purple hover:bg-purple-dark" size="lg">
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
