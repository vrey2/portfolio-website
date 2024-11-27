import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />
      <main className="flex-grow p-8 sm:p-16 lg:p-24">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="mt-4 text-lg text-gray-600">
            Hi, I'm Vianca Reynoso, a passionate software developer with a knack for problem solving. 
            I thrive at the intersection of creativity and logic,
            constantly striving to bring ideas to life through code.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12 flex-box justify-center">
          <div className="flex justify-self-center">
            <h2 className="text-2xl font-semibold text-gray-700">My Skills</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            <div className="text-center">
              <span className="text-teal-600 text-3xl">👨‍💻</span>
              <p className="text-gray-700 mt-2">Python/C++</p>
            </div>
            <div className="text-center">
              <span className="text-purple-600 text-3xl">💻</span>
              <p className="text-gray-700 mt-2">Full-Stack Development</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700">Experience</h2>
          <ul className="mt-6 space-y-6">
            <li>
              <h3 className="text-lg font-bold text-gray-800">Software Engineer</h3>
              <p className="text-gray-600">
                <span className="italic">XYZ Tech Solutions</span> | Jan 2020 - Present
              </p>
              <p className="text-gray-600 mt-2">
                Building and maintaining robust web applications, contributing to a 20% increase
                in system performance.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold text-gray-800">Intern</h3>
              <p className="text-gray-600">
                <span className="italic">Startup Inc.</span> | Jun 2019 - Dec 2019
              </p>
              <p className="text-gray-600 mt-2">
                Designed responsive components and contributed to developing an e-commerce
                platform.
              </p>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Let’s Connect</h2>
          <p className="mt-4 text-gray-600">
            I’d love to hear from you! Whether it’s a project, job opportunity, or just a chat,
            feel free to reach out.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="text-teal-600 hover:text-teal-800 text-xl"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 text-xl"
            >
              🐙 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 text-xl"
            >
              💼 LinkedIn
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
