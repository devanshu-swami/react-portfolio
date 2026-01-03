import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Add Bootstrap CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add Font Awesome
    const faLink = document.createElement('link');
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    faLink.rel = 'stylesheet';
    document.head.appendChild(faLink);

    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
        color: #fff;
        overflow-x: hidden;
      }

      .bg-animation {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        overflow: hidden;
      }

      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(34, 211, 238, 0.4);
        border-radius: 50%;
        animation: float 6s infinite;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
        50% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
      }

      .navbar {
        background: rgba(10, 14, 39, 0.95) !important;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(34, 211, 238, 0.2);
        transition: all 0.3s;
      }

      .navbar.scrolled {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      }

      .navbar-brand {
        font-size: 1.8rem;
        font-weight: 700;
        background: linear-gradient(135deg, #22d3ee, #3b82f6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .nav-link {
        color: #94a3b8 !important;
        font-weight: 500;
        transition: all 0.3s;
        position: relative;
      }

      .nav-link:hover,
      .nav-link.active {
        color: #22d3ee !important;
        transform: translateY(-2px);
      }

      .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 2px;
        background: #22d3ee;
      }

      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding-top: 80px;
      }

      .hero-title {
        font-size: 5rem;
        font-weight: 800;
        background: linear-gradient(135deg, #22d3ee, #3b82f6, #a855f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: fadeInUp 1s ease-out;
        background-size: 200% 200%;
        animation: gradient 5s ease infinite, fadeInUp 1s ease-out;
      }

      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      .hero-subtitle {
        font-size: 2rem;
        color: #94a3b8;
        animation: fadeInUp 1s ease-out 0.2s backwards;
      }

      .hero-tech {
        font-size: 1.2rem;
        color: #64748b;
        animation: fadeInUp 1s ease-out 0.4s backwards;
      }

      .hero-description {
        color: #64748b;
        max-width: 700px;
        margin: 0 auto;
        animation: fadeInUp 1s ease-out 0.6s backwards;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .btn-primary-custom {
        background: linear-gradient(135deg, #22d3ee, #3b82f6);
        border: none;
        padding: 15px 40px;
        font-weight: 600;
        border-radius: 10px;
        transition: all 0.3s;
        animation: fadeInUp 1s ease-out 0.8s backwards;
      }

      .btn-primary-custom:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(34, 211, 238, 0.5);
      }

      .btn-outline-custom {
        border: 2px solid #334155;
        color: #fff;
        padding: 15px 40px;
        font-weight: 600;
        border-radius: 10px;
        transition: all 0.3s;
        background: transparent;
        animation: fadeInUp 1s ease-out 0.8s backwards;
      }

      .btn-outline-custom:hover {
        border-color: #22d3ee;
        background: rgba(34, 211, 238, 0.1);
        color: #fff;
        transform: translateY(-3px);
      }

      .section-title {
        font-size: 3rem;
        font-weight: 700;
        background: linear-gradient(135deg, #22d3ee, #3b82f6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 4rem;
      }

      .about-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(51, 65, 85, 0.5);
        border-radius: 20px;
        padding: 3rem;
        transition: all 0.3s;
        position: relative;
        overflow: hidden;
      }

      .about-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1));
        opacity: 0;
        transition: opacity 0.3s;
        border-radius: 20px;
      }

      .about-card:hover::before {
        opacity: 1;
      }

      .about-card:hover {
        border-color: rgba(34, 211, 238, 0.5);
        transform: translateY(-10px);
      }

      .about-icon {
        font-size: 4rem;
        background: linear-gradient(135deg, #22d3ee, #3b82f6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .skill-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(51, 65, 85, 0.5);
        border-radius: 15px;
        padding: 2rem;
        transition: all 0.3s;
        height: 100%;
      }

      .skill-card:hover {
        border-color: rgba(34, 211, 238, 0.5);
        transform: translateY(-10px) scale(1.05);
      }

      .skill-icon {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        font-size: 1.8rem;
        color: #fff;
        margin-bottom: 1rem;
      }

      .project-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(51, 65, 85, 0.5);
        border-radius: 20px;
        padding: 2.5rem;
        transition: all 0.3s;
        height: 100%;
        position: relative;
        overflow: hidden;
      }

      .project-card::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.3s;
        border-radius: 20px;
      }

      .project-card:hover::before {
        opacity: 1;
      }

      .project-card:hover {
        border-color: rgba(34, 211, 238, 0.5);
        transform: translateY(-10px) scale(1.03);
      }

      .project-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 1.5rem;
      }

      .tech-badge {
        display: inline-block;
        padding: 0.4rem 1rem;
        background: rgba(51, 65, 85, 0.5);
        border: 1px solid rgba(100, 116, 139, 0.5);
        border-radius: 20px;
        font-size: 0.85rem;
        color: #22d3ee;
        margin: 0.3rem;
      }

      .project-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: #22d3ee;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s;
      }

      .project-link:hover {
        color: #3b82f6;
        gap: 0.8rem;
      }

      .contact-form {
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(51, 65, 85, 0.5);
        border-radius: 20px;
        padding: 3rem;
      }

      .form-control,
      .form-control:focus {
        background: rgba(51, 65, 85, 0.3);
        border: 1px solid rgba(100, 116, 139, 0.5);
        color: #fff;
        border-radius: 10px;
        padding: 15px;
      }

      .form-control:focus {
        border-color: #22d3ee;
        box-shadow: 0 0 0 0.2rem rgba(34, 211, 238, 0.25);
      }

      .form-control::placeholder {
        color: #64748b;
      }

      .form-label {
        color: #94a3b8;
        font-weight: 600;
      }

      .contact-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.2rem;
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(51, 65, 85, 0.5);
        border-radius: 15px;
        text-decoration: none;
        color: #94a3b8;
        transition: all 0.3s;
        margin-bottom: 1rem;
      }

      .contact-link:hover {
        border-color: rgba(34, 211, 238, 0.5);
        transform: translateX(10px);
        color: #fff;
      }

      .contact-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 1.5rem;
        color: #fff;
        flex-shrink: 0;
      }

      .floating-whatsapp {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #25D366, #128C7E);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        cursor: pointer;
        transition: all 0.3s;
        z-index: 1000;
        text-decoration: none;
      }

      .floating-whatsapp:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        color: white;
      }

      footer {
        border-top: 1px solid rgba(51, 65, 85, 0.5);
        padding: 2rem 0;
        margin-top: 5rem;
        color: #64748b;
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 3rem;
        }
        .hero-subtitle {
          font-size: 1.5rem;
        }
        .section-title {
          font-size: 2rem;
        }
        .floating-whatsapp {
          width: 50px;
          height: 50px;
          font-size: 1.5rem;
          bottom: 20px;
          right: 20px;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(faLink);
      document.head.removeChild(style);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <>
      <BackgroundAnimation />
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      {/* <Footer /> */}
      <WhatsAppButton />
    </>
  );
};

const BackgroundAnimation = () => {
  const particles = [...Array(20)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${3 + Math.random() * 2}s`,
  }));

  return (
    <div className="bg-animation">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
};

const Navbar = ({ scrollToSection, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">DS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="hero-title mb-4">Devanshu Swami</h1>
            <h2 className="hero-subtitle mb-4">Full Stack Web Developer</h2>
            <p className="hero-tech mb-4">React.js • Node.js • Laravel • MySQL • Bootstrap</p>
            <p className="hero-description mb-5">
              Working on the development and maintenance of full-stack web applications using React.js, Node.js, Laravel, and MySQL.
              Responsible for API integration, UI/UX responsiveness, and backend logic optimization.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button 
                className="btn btn-primary-custom"
                onClick={() => scrollToSection('projects')}
              >
                View Projects <i className="fas fa-arrow-right ms-2"></i>
              </button>
              <a 
                href="mailto:adev80178@gmail.com" 
                className="btn btn-outline-custom"
                style={{ textDecoration: 'none' }}
              >
                Contact Me <i className="fas fa-envelope ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <h2 className="section-title text-center">About Me</h2>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="about-card">
              <i className="fas fa-code about-icon"></i>
              <h3 className="text-white fw-bold mt-3 mb-3">Full Stack Developer</h3>
              <p className="text-secondary">
                Passionate about creating seamless web experiences with modern technologies and best practices.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-secondary">
              <p className="fs-5 mb-4">
                I'm <span className="text-info fw-bold">Devanshu Swami</span>, a Full Stack Web Developer at 
                <span className="text-info"> ALINESOLUTION</span> with expertise in building scalable web applications.
              </p>
              <p className="fs-5 mb-4">
                Currently working with <span className="text-info fw-bold">React.js, Node.js, Laravel</span>, and MySQL to develop 
                and maintain full-stack applications. I specialize in API integration, responsive UI/UX design, 
                and backend optimization.
              </p>
              <p className="fs-5">
                Graduated with a <span className="text-info">Bachelor of Computer Applications</span> from 
                Shree Jain College with 75% in 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: 'fa-react', gradient: 'linear-gradient(135deg, #22d3ee, #3b82f6)' },
    { name: 'Node.js', icon: 'fa-node-js', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { name: 'Laravel', icon: 'fa-laravel', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
    { name: 'JavaScript', icon: 'fa-js', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)' },
    { name: 'PHP', icon: 'fa-php', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
    { name: 'MySQL', icon: 'fa-database', gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
    { name: 'Bootstrap', icon: 'fa-bootstrap', gradient: 'linear-gradient(135deg, #a855f7, #ec4899)' },
    { name: 'Git', icon: 'fa-git-alt', gradient: 'linear-gradient(135deg, #f59e0b, #dc2626)' },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container py-5">
        <h2 className="section-title text-center">Technical Skills</h2>
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="skill-card">
                <div className="skill-icon" style={{ background: skill.gradient }}>
                  <i className={`fab ${skill.icon}`}></i>
                </div>
                <h5 className="text-white fw-bold">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container py-5">
        <h2 className="section-title text-center">Professional Experience</h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="about-card">
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-briefcase about-icon me-3"></i>
                <div>
                  <h4 className="text-white fw-bold mb-1">Web Developer</h4>
                  <p className="text-info mb-0">ALINESOLUTION</p>
                  <small className="text-secondary">July 2024 - Present</small>
                </div>
              </div>
              <ul className="text-secondary">
                <li>Developing and maintaining full-stack web applications</li>
                <li>API integration and backend logic optimization</li>
                <li>Ensuring UI/UX responsiveness across devices</li>
                <li>Managing deployment and post-launch maintenance</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-card">
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-laptop-code about-icon me-3"></i>
                <div>
                  <h4 className="text-white fw-bold mb-1">Web Development Intern</h4>
                  <p className="text-info mb-0">ALINESOLUTION</p>
                  <small className="text-secondary">June 2023 - June 2024</small>
                </div>
              </div>
              <ul className="text-secondary">
                <li>Worked with React.js, Node.js, Laravel, and MySQL</li>
                <li>Developed responsive web applications</li>
                <li>Collaborated on client and internal projects</li>
                <li>Learned deployment and maintenance processes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Legal Fintax',
      description: 'Developed and deployed a secure online tax contribution platform, managing full stack development, testing, and maintenance single-handedly.',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      icon: 'fa-balance-scale',
      gradient: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
      link: 'https://legalfintax.com/',
      type: 'Laravel'
    },
    {
      title: 'Marudhara Crop',
      description: 'Developed and deployed an online small pot contributions platform, handling full stack development, testing, deployment, and maintenance.',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      icon: 'fa-seedling',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      link: 'https://marudharacrop.com/',
      type: 'Laravel'
    },
    {
      title: 'Madhavish',
      description: 'Developed and deployed a secure online food oil contribution platform, managing full stack development, testing, and maintenance single-handedly.',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      icon: 'fa-oil-can',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
      link: 'https://madhavish.com/',
      type: 'Laravel'
    },
    {
      title: 'Rupela.in',
      description: 'Developed and deployed an online software for comprehensive balance management, handling full stack development, testing, deployment, and maintenance single-handedly.',
      tech: ['React.js', 'Node.js', 'MySQL', 'Bootstrap'],
      icon: 'fa-rupee-sign',
      gradient: 'linear-gradient(135deg, #f59e0b, #dc2626)',
      link: 'https://rupela.in/',
      type: 'React & Node.js'
    },
    {
      title: 'Lakshya Udaan',
      description: 'E-commerce platform with comprehensive features including product listings, shopping cart, payment gateway integration, and user authentication.',
      tech: ['React.js', 'Node.js', 'MySQL', 'Bootstrap'],
      icon: 'fa-shopping-cart',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      link: 'https://lakshyaudaan.com/',
      type: 'React & Node.js'
    }
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        <h2 className="section-title text-center">Featured Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-6" key={index}>
              <div className="project-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="project-icon" style={{ background: project.gradient }}>
                    <i className={`fas ${project.icon}`}></i>
                  </div>
                  <span className="badge bg-secondary">{project.type}</span>
                </div>
                <h4 className="text-white fw-bold mb-3">{project.title}</h4>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="mb-3">
                  {project.tech.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Visit Website <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:adev80178@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="row g-4">
          <div className="col-lg-12">
            <h3 className="text-white fw-bold mb-4">Let's Work Together</h3>
            <p className="text-secondary fs-5 mb-5">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a href="mailto:adev80178@gmail.com" className="contact-link">
              <div className="contact-icon" style={{ background: 'linear-gradient(135deg, #22d3ee, #3b82f6)' }}>
                <i className="fas fa-envelope"></i>
              </div>
              <span>adev80178@gmail.com</span>
            </a>
            <a href="https://github.com/devanshu-swami" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-icon" style={{ background: 'linear-gradient(135deg, #6e5494, #24292e)' }}>
                <i className="fab fa-github"></i>
              </div>
              <span>github.com/devanshu-swami</span>
            </a>
            <a href="https://www.linkedin.com/in/devanshuswami" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-icon" style={{ background: 'linear-gradient(135deg, #0077b5, #0e76a8)' }}>
                <i className="fab fa-linkedin"></i>
              </div>
              <span>linkedin.com/in/devanshuswami</span>
            </a>
            <a href="tel:+918696282598" className="contact-link">
              <div className="contact-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                <i className="fas fa-phone"></i>
              </div>
              <span>+91-8696282598</span>
            </a>
          </div>
          {/* <div className="col-lg-6">
            <div className="contact-form">
              <div className="mb-4">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="btn btn-primary-custom w-100">
                Send Message
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/918696282598" 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">© 2026 Devanshu Swami. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="mailto:adev80178@gmail.com" className="text-decoration-none text-secondary me-3 hover-cyan">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/devanshu-swami" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary me-3 hover-cyan">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/devanshuswami" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary hover-cyan">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;