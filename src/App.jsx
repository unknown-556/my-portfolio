import React, { useState } from 'react';
import Github from 'react-feather/dist/icons/github';
import Globe from 'react-feather/dist/icons/globe';
import useIntersectionObserver from './useIntersectionObserver'; 
import './App.css';
import TypingEffect from './TypingEffect';

const portfolioData = {
  home: "Hi, I'm Obasi, a backend web developer with a passion for creating efficient and scalable applications.",
  about: "With a robust background in backend development, I specialize in building scalable and efficient server-side applications using Node.js and Python. My expertise extends to designing and managing various database systems, including NoSQL technologies, ensuring optimal data storage and retrieval strategies tailored to diverse application needs. In addition to my backend proficiency, I am passionate about frontend development and actively explore React and other modern frontend frameworks. I continuously seek to deepen my understanding of emerging technologies and best practices to stay at the forefront of the development landscape.",
  projects: [
    {
      title: "Devly",
      description: "A community to find various developers.",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/unknown-556/connect",
    },
    {
      title: "Devly",
      description: "A community to find various developers.",
      technologies: ["React", "Tailwind CSS", "MongoDB"],
      complete: "https://devlyng.vercel.app",
    },
    {
      title: "Beta Health",
      description: "A health blog.",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/unknown-556/article",
    }
  ],
  skills: ["Backend Development", "Frontend Development", "Database Management", "API Design"],
  resumeLink: "path/to/your/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/obasi-obasi-bb5b7531a",
    whatsapp: "https://wa.me/+2348153554468",
    github: "https://github.com/unknown-556"
  }
};

const App = () => {
  const [homeRef, homeVisible] = useIntersectionObserver();
  const [aboutRef, aboutVisible] = useIntersectionObserver();
  const [projectsRef, projectsVisible] = useIntersectionObserver();
  const [skillsRef, skillsVisible] = useIntersectionObserver();
  const [resumeRef, resumeVisible] = useIntersectionObserver();
  const [contactRef, contactVisible] = useIntersectionObserver();
  const [socialRef, socialVisible] = useIntersectionObserver();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('');

  const greenColor = '#0DA16C';
  const blackColor = '#000000';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://connect-i645.onrender.com/api/connect/message/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      const data = await response.json();
      console.log('Response from API:', data);

      if (response.ok) {
        setModalMessage('MESSAGE SENT SUCCESSFULLY');
        setModalType('success');
      } else {
        setModalMessage('FAILED TO SEND MESSAGE');
        setModalType('error');
      }
      setModalOpen(true);

      setTimeout(() => {
        (window.location.reload)();
      }, 20);


    } catch (error) {
      setLoading(false);
      setModalMessage('FAILED TO SEND MESSAGE');
      setModalType('error');
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: blackColor, color: greenColor, margin: 0, padding: 0, minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#333', color: '#FFF', padding: '16px', textAlign: 'center' }}>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '16px', listStyleType: 'none', padding: 0, margin: 0 }}>
            {['home', 'about', 'projects', 'skills', 'resume', 'contact', 'social'].map(section => (
              <li key={section}>
                <a href={`#${section}`} style={{ color: greenColor, textDecoration: 'none', transition: 'color 0.3s' }}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main style={{ padding: 0, margin: 0 }}>
        <section
          id="home"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '32px 16px',
            opacity: homeVisible ? 1 : 0,
            transition: 'opacity 0.7s',
            background: `url('/path/to/your/background-image.jpg') no-repeat center center/cover`,
            color: '#FFF'
          }}
          ref={homeRef}
        >
          <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: greenColor }}>
            Welcome to My Portfolio
          </h1>
          <p style={{ textAlign: 'center', maxWidth: '600px' }}>
            {portfolioData.home}
          </p>
        </section>

        <section
          id="about"
          style={{
            minHeight: '100vh',
            padding: '32px 16px',
            opacity: aboutVisible ? 1 : 0,
            transition: 'opacity 0.7s',
            textAlign: 'center'
          }}
          ref={aboutRef}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: greenColor }}>About Me</h2>
          <TypingEffect text={portfolioData.about} />
        </section>

        <section
          id="projects"
          style={{
            minHeight: '100vh',
            padding: '32px 16px',
            opacity: projectsVisible ? 1 : 0,
            transition: 'opacity 0.7s'
          }}
          ref={projectsRef}
        >
          <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Projects</h2>
          <div className="flex justify-center overflow-x-auto mt-8">
            <div className="flex space-x-4">
              {portfolioData.projects.length === 0 ? (
                <p style={{ color: '#666', textAlign: 'center' }}>Add projects below</p>
              ) : (
                portfolioData.projects.map((project, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: '250px',
                      maxWidth: '300px',
                      backgroundColor: '#1a1a1a',
                      color: '#fff',
                      borderRadius: '8px',
                      padding: '16px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}
                    className="flex flex-col gap-4"
                  >
                    <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="flex gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: greenColor }}
                          className="flex items-center"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {project.complete && (
                        <a
                          href={project.complete}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: greenColor }}
                          className="flex items-center"
                        >
                          <Globe size={17} style={{ marginRight: '4px' }} /> {project.complete}
                        </a>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section
          id="skills"
          style={{
            minHeight: '100vh',
            padding: '32px 16px',
            opacity: skillsVisible ? 1 : 0,
            transition: 'opacity 0.7s'
          }}
          ref={skillsRef}
        >
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '24px' }}>Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section
          id="resume"
          style={{
            minHeight: '100vh',
            padding: '32px 16px',
            opacity: resumeVisible ? 1 : 0,
            transition: 'opacity 0.7s'
          }}
          ref={resumeRef}
        >
          <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Resume</h2>
          <div className="flex justify-center mt-8">
            <a
              href={portfolioData.resumeLink}
              download
              style={{
                backgroundColor: greenColor,
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Download Resume
            </a>
          </div>
        </section>

        <section
          id="contact"
          style={{
            minHeight: '100vh',
            padding: '32px 16px',
            opacity: contactVisible ? 1 : 0,
            transition: 'opacity 0.7s',
            textAlign: 'center'
          }}
          ref={contactRef}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Contact</h2>
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '150px' }}
                required
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: greenColor,
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </section>

        <footer
          id="social"
          style={{
            padding: '32px 16px',
            backgroundColor: '#333',
            color: '#FFF',
            textAlign: 'center'
          }}
          ref={socialRef}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Connect with Me</h2>
          <div className="flex justify-center gap-8">
            {Object.keys(portfolioData.social).map((platform) => (
              <a
                key={platform}
                href={portfolioData.social[platform]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: greenColor, fontSize: '1.5rem' }}
              >
                {platform === 'linkedin' && 'LinkedIn'}
                {platform === 'whatsapp' && 'WhatsApp'}
                {platform === 'github' && 'GitHub'}
              </a>
            ))}
          </div>
        </footer>
      </main>

      {modalOpen && (
        <div
          className="modal"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000
          }}
        >
          <p style={{ color: modalType === 'success' ? 'green' : 'red' }}>{modalMessage}</p>
          <button
            onClick={closeModal}
            style={{
              backgroundColor: greenColor,
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            Close
          </button>
        </div>
      )}

      <div
        className="backdrop"
        style={{
          display: modalOpen ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }}
        onClick={closeModal}
      />
    </div>
  );
};

export default App;

  