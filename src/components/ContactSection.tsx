import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="bg-purple hover:bg-purple-dark w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-purple mr-4 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:victorshittu@gmail.com"
                    className="text-gray-600 hover:text-purple-dark"
                  >
                    victorshittu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Github className="text-purple mr-4 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <a href="#" className="text-gray-600 hover:text-purple-dark">
                    github.com/victorshittu
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Linkedin className="text-purple mr-4 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="#" className="text-gray-600 hover:text-purple-dark">
                    linkedin.com/in/victorshittu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
