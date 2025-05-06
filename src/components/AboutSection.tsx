import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Responsive Design", level: "Advanced" },
    { name: "React.js", level: "Beginner" },
    { name: "Git", level: "Intermediate" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About Me
          </h2>
          <div className="mb-12 text-gray-600">
            <p className="mb-4">
              I'm a junior frontend developer with a passion for building clean,
              functional websites. My journey into web development began with
              curiosity about how websites work, which led me to teach myself
              HTML and CSS.
            </p>
            <p className="mb-4">
              Since then, I've expanded my skills to include JavaScript and I'm
              currently learning React to build more interactive web
              applications. I enjoy solving problems and creating intuitive user
              experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or improving my skills
              through online courses and tutorials.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-center">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="border border-gray-100 hover:border-purple-light transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-900">{skill.name}</h4>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                  </div>
                  <div className="mt-2 bg-gray-100 h-2 rounded-full">
                    <div
                      className="bg-gradient-to-r from-purple to-purple-dark h-2 rounded-full"
                      style={{
                        width:
                          skill.level === "Advanced"
                            ? "90%"
                            : skill.level === "Intermediate"
                            ? "70%"
                            : "50%",
                      }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
