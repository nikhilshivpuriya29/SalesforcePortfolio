import React from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, Phone, Globe, MapPin, Calendar, GraduationCap, Briefcase, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header with updated navbar styling */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">Nikhil Shivpuriya</h1>
            <nav className="flex space-x-6">
              {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 font-medium relative group transition-colors duration-200"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Hero Section with added GitHub button */}
        <section className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQEWJRS6V7pUbA/profile-displayphoto-shrink_800_800/B4DZR_PZkdHkAc-/0/1737301531993?e=1743033600&v=beta&t=b9Gz_yFIe4QMi6iOAOcwHsyn_FRFKIvLSd-fqbqcUJE" 
                alt="Nikhil Shivpuriya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Software Developer & AI Engineer</h2>
              <p className="text-lg text-blue-600 mb-4">6x Salesforce Certified | AI & Machine Learning | Full-Stack Development</p>
              <p className="text-gray-600 mb-6">
                Passionate about tech and innovation. Proficient in C, C++, Python, Java, JavaScript, and Apex. 
                Excited about Machine Learning and NLP. Let's connect and explore new horizons!
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/in/nikhilshivpuriya/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/nikhilshivpuriya29" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a 
                  href="https://drive.google.com/file/d/18gi9N4RcLFvh5sp3JQUhHSuKNqd1rd1_/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <FileText size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">About Me</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Fueled by Curiosity, Driven by Innovation. Passionate about turning ideas into impactful solutions, 
                I thrive on exploring the intersection of technology and creativity. From developing robust software 
                to diving deep into the intricacies of AI and Machine Learning, I continuously seek opportunities to 
                learn, grow, and make a difference. Let's innovate together and create something extraordinary!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Calendar className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Birthday</p>
                    <p className="text-gray-700">29 Oct 2000</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Globe className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <MapPin className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">City</p>
                    <p className="text-gray-700">Indore, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <GraduationCap className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Degree</p>
                    <p className="text-gray-700">B.Tech in CSE</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Mail className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-700 break-all">nikhilshivpuriya91593@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Briefcase className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500"></p>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Salesforce Certified AI Specialist",
                      description: "Advanced certification in Salesforce AI implementation and integration"
                    },
                    {
                      title: "Salesforce Certified AI Associate",
                      description: "Specialized certification in Salesforce AI fundamentals"
                    },
                    {
                      title: "Salesforce Certified JavaScript Developer I",
                      description: "Expert-level certification in JavaScript development for Salesforce"
                    },
                    {
                      title: "Salesforce Certified OmniStudio Developer",
                      description: "Specialized in OmniStudio development and implementation"
                    },
                    {
                      title: "Salesforce Certified Platform Developer I",
                      description: "Core certification in Salesforce platform development"
                    },
                    {
                      title: "Salesforce Certified Administrator",
                      description: "Foundation certification in Salesforce administration"
                    }
                  ].map((cert, index) => (
                    <a 
                      key={index}
                      href="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=qwb/xNzlCOX2LwV2Ixq+2j8H0/UaKd+ylq7W4QfzYZbfXpGsaBvJQtMZE71wr3k6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-md hover:bg-white transition-colors"
                    >
                      <Award className="text-blue-600 flex-shrink-0" size={24} />
                      <div>
                        <h5 className="font-semibold text-gray-900">{cert.title}</h5>
                        <p className="text-sm text-gray-600">{cert.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
          <div className="space-y-8">
            {/* Salesforce Developer Role */}
            <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-xl font-semibold text-gray-900">Salesforce Developer</h4>
                  <span className="text-blue-600">@ Cloud SynApps</span>
                </div>
                <p className="text-gray-600">2023 - Present • Pune, India</p>
                <div className="prose text-gray-600">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Developed and integrated the CSA AI (Currently on App-Exchange) using OpenAI's CustomGPT, enhancing Salesforce functionality for intelligent document processing and data retrieval.</li>
                    <li>Led key features of a client's Grant Management portal, implementing FlexCards, layouts, flows, and email actions to optimize user experience and efficiency.</li>
                    <li>Supervised the assessment of all graphic materials to ensure quality and accuracy of the design.</li>
                    <li>Collaborated with teams to improve project delivery timelines by 20%, consistently meeting milestones and ensuring high-quality, on-time results.</li>
                    <li>Built and implemented custom Apex classes and Lightning Web Components(LWCs), focusing on scalable, secure, and high-performance solutions.</li>
                    <li>Recognized with 'Outstanding Team Player' award for exceptional teamwork, technical expertise, and problem-solving across critical projects.</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['APEX', 'JavaScript', 'OmniStudio', 'LWC', 'Aura Framework', 'Flows', 'OpenAI'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* MEVN Trainee Role */}
            <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-xl font-semibold text-gray-900">MEVN Trainee</h4>
                  <span className="text-blue-600">@ Fynd Academy</span>
                </div>
                <p className="text-gray-600">January 2023 - June 2023 • Remote</p>
                <div className="prose text-gray-600">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Developed expertise in MEVN stack technologies, including MongoDB, Express.js, Vue.js, and Node.js.</li>
                    <li>Collaborated in a team to create multiple projects, showcasing proficiency in front-end and back-end development.</li>
                    <li>Took ownership of projects, managing timelines and delivering high-quality results.</li>
                    <li>Created 4 websites as a part of project within 1.5 months.</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'Express.js', 'Vue.js', 'Node.js', 'JavaScript'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Java Full Stack Intern Role */}
            <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-xl font-semibold text-gray-900">Java Full Stack Intern</h4>
                  <span className="text-blue-600">@ Global Quest Technologies</span>
                </div>
                <p className="text-gray-600">July 2022 - January 2023 • Remote</p>
                <div className="prose text-gray-600">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Developed full-stack applications using Java, showcasing proficiency in frontend and backend development.</li>
                    <li>Received training in manual testing, demonstrating skills in writing test cases and ensuring high-quality deliverables.</li>
                    <li>Expanded expertise to include Python development, utilizing it for tasks such as data manipulation and automation.</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'Python', 'Manual Testing', 'Full Stack'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
          <p className="text-gray-600 mb-8">
            Here are the tools, technologies, and abilities that help me craft innovative solutions and deliver impactful results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Salesforce Development", percentage: 100 },
              { name: "CSS", percentage: 97 },
              { name: "C/C++", percentage: 95 },
              { name: "JAVA", percentage: 98 },
              { name: "JavaScript", percentage: 85 },
              { name: "HTML", percentage: 100 },
              { name: "WordPress/CMS", percentage: 90 },
              { name: "Machine Learning", percentage: 82 },
              { name: "Python", percentage: 100 },
              { name: "Apex", percentage: 97 }
            ].map((skill) => (
              <div key={skill.name} className="space-y-2 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-blue-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4 hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-900">B.Tech in Computer Science and Engineering</h4>
              <p className="text-gray-600">Samrat Ashok Technological Institute, Vidisha • 2019 - 2023</p>
              <p className="text-blue-600">CGPA: 8.44</p>
              <p className="text-gray-600">Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-900">Senior Secondary (PCM)</h4>
              <p className="text-gray-600">Sahara Public School • 2018</p>
              <p className="text-blue-600">Percentage: 78%</p>
              <p className="text-gray-600">Central Board of Secondary Education</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <h4 className="text-xl font-semibold text-gray-900">High School</h4>
              <p className="text-gray-600">Sahara Public School • 2016</p>
              <p className="text-blue-600">CGPA: 9.6</p>
              <p className="text-gray-600">Central Board of Secondary Education</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://www.linkedin.com/in/nikhilshivpuriya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all"
            >
              <Linkedin className="text-blue-600" size={24} />
              <div>
                <h4 className="font-semibold">LinkedIn</h4>
                <p className="text-sm text-gray-600">Connect with me</p>
              </div>
              <ExternalLink className="ml-auto text-gray-400" size={20} />
            </a>
            <a 
              href="https://github.com/nikhilshivpuriya29"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all"
            >
              <Github className="text-blue-600" size={24} />
              <div>
                <h4 className="font-semibold">GitHub</h4>
                <p className="text-sm text-gray-600">View my projects</p>
              </div>
              <ExternalLink className="ml-auto text-gray-400" size={20} />
            </a>
            <a 
              href="mailto:nikhilshivpuriya91593@gmail.com"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all"
            >
              <Mail className="text-blue-600" size={24} />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-600">Send me a message</p>
              </div>
            </a>
            <a 
              href="tel:+917771928222"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all"
            >
              <Phone className="text-blue-600" size={24} />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-600">+91 777 1928 222</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Nikhil Shivpuriya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;