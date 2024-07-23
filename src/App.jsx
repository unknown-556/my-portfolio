import React from 'react';
import Github from 'react-feather/dist/icons/github';
import Globe from 'react-feather/dist/icons/globe';
import useIntersectionObserver from './useIntersectionObserver'; 
import './App.css'
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
    whatsapp: "https://wa.me/=2348153554468",
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

  const greenColor = '#0DA16C'; // Adjust green color as needed
  const blackColor = '#000000'; // Adjust black color as needed

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
                    padding: '16px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    minWidth: '150px',
                    textAlign: 'center'
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
              transition: 'opacity 0.7s',
              textAlign: 'center'
            }}
            ref={resumeRef}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Resume</h2>
            <a
              href={portfolioData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFF',
                backgroundColor: greenColor,
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1.2rem',
                display: 'inline-block',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
            >
              Download My Resume
            </a>
          </section>
    
          <section
            id="contact"
            style={{
              minHeight: '100vh',
              padding: '32px 16px',
              opacity: contactVisible ? 1 : 0,
              transition: 'opacity 0.7s'
            }}
            ref={contactRef}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '24px', textAlign: 'center' }}>Contact</h2>
            <form
              action="https://connect-i645.onrender.com/api/connect/message/add"
              method="POST"
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: '#222',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                color: '#FFF'
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: greenColor }}>Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    border: '1px solid #555',
                    padding: '12px',
                    borderRadius: '4px',
                    backgroundColor: '#333',
                    color: '#FFF'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: greenColor }}>Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    border: '1px solid #555',
                    padding: '12px',
                    borderRadius: '4px',
                    backgroundColor: '#333',
                    color: '#FFF'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', color: greenColor }}>Message:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  style={{
                    width: '100%',
                    border: '1px solid #555',
                    padding: '12px',
                    borderRadius: '4px',
                    backgroundColor: '#333',
                    color: '#FFF',
                    minHeight: '150px',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: greenColor,
                  color: '#FFF',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s',
                  display: 'block',
                  margin: '0 auto'
                }}
              >
                Send
              </button>
            </form>
          </section>
    
          <section
            id="social"
            style={{
              minHeight: '100vh',
              padding: '32px 16px',
              opacity: socialVisible ? 1 : 0,
              transition: 'opacity 0.7s'
            }}
            ref={socialRef}
          >
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '24px' }}>Connect with Me</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  maxWidth: '400px',
                  width: '100%',
                }}
              >
                {Object.entries(portfolioData.social).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: greenColor, textDecoration: 'none', fontSize: '1.2rem' }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
    
        <footer style={{ backgroundColor: '#333', color: '#FFF', padding: '16px', textAlign: 'center' }}>
    <div style={{ marginBottom: '12px' }}>
      <p style={{ margin: 0 }}>© 2024 Obasi. All rights reserved.</p>
    </div>
    <div style={{ marginBottom: '12px' }}>
      <a href="#home" style={{ color: greenColor, textDecoration: 'none', margin: '0 8px' }}>Home</a>
      <a href="#about" style={{ color: greenColor, textDecoration: 'none', margin: '0 8px' }}>About Me</a>
      <a href="#projects" style={{ color: greenColor, textDecoration: 'none', margin: '0 8px' }}>Projects</a>
      <a href="#skills" style={{ color: greenColor, textDecoration: 'none', margin: '0 8px' }}>Skills</a>
      <a href="#resume" style={{ color: greenColor, textDecoration: 'none', margin: '0 8px' }}>Resume</a>
      <a href="#contact" style={{ color: greenColor, textDecoration: 'none', margin: '0 8px' }}>Contact</a>
      <a href="#social" style={{ color: greenColor, textDecoration: 'none', margin: '0 8px' }}>Social</a>
    </div>
    <div>
      <p style={{ margin: 0 }}>Designed and developed by Obasi</p>
    </div>
  </footer>

      </div>
    );
  }
  
  export default App;
  