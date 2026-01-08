import { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Phone, ExternalLink, BookOpen, Award, GraduationCap, Users, Linkedin, Sparkles, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import profileImage from '../assets/78b537b139055dd0b4184f6e1295f3493ae1d6a0.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'research', 'publications', 'teaching', 'awards', 'demos', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'awards', label: 'Awards' },
    { id: 'demos', label: 'Work Demos' },
    { id: 'contact', label: 'Contact' }
  ];

  const publications = [
    {
      title: "Enhancing crowdsourcing through skill and willingness-aligned task assignment with workforce composition balance",
      venue: "Pervasive and Mobile Computing, 2025",
      type: "journal"
    },
    {
      title: "SoSTA: Skill-Oriented Stable Task Assignment With Bidirectional Preferences in Crowdsourcing",
      venue: "IEEE Transactions on Emerging Topics in Computing (TETC), 2025",
      type: "journal"
    },
    {
      title: "TinyTNAS: Time-Bound, GPU-Independent Hardware-Aware Neural Architecture Search for TinyML Time Series Classification",
      venue: "IEEE Embedded Systems Letters, 2025",
      type: "journal"
    },
    {
      title: "(Best Paper) Personalized human activity recognition: Real-time on-device training and inference",
      venue: "AIML Systems Conference, 2023",
      type: "award"
    },
    {
      title: "(Best Demo) From Wrist to World: Harnessing Wearable IMU Sensors and TinyML to Enable Smart Environment Interactions",
      venue: "AIML Systems Conference, 2023",
      type: "award"
    }
  ];

  const awards = [
    "Early Career Highlight Young Research Scientist Presentation Award at ACM CODS‑COMAD 2025",
    "Nominated for Aruna & Ram Gopal Khandelia Award 2023 (IIT Kharagpur)",
    "Best Paper Award at AIML Systems Conference 2023",
    "Best Demo Award at AIML Systems Conference 2023",
    "UGC Junior Research Fellowship (JRF) and Senior Research Fellowship (SRF)",
    "DST INSPIRE Fellowship for Doctoral Research",
    "Ranked 2nd in BTech,CSE, University of Calcutta",
    "Ranked 1st in MTech,CSE, University of Calcutta"
  ];

  const demos = [
    {
      id: "pehJozECCdI",
      title: "Project Demo 1",
    },
    {
      id: "jC7whbhFThc",
      title: "Project Demo 2",
    },
    {
      id: "CNJ4wyo7Dyo",
      title: "Project Demo 3",
    },
    {
      id: "_57USD7uBtk",
      title: "Project Demo 4",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#A51C30]/95 shadow-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Name */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection('home')}
                className="text-white text-xl tracking-wide hover:opacity-90 transition-opacity"
              >
                Dr. Riya Samanta
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm transition-all rounded-md ${activeSection === item.id
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-white/20 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base transition-colors rounded-md ${activeSection === item.id
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #A51C30 0%, #7D1624 50%, #A51C30 100%)`
        }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >


            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
              Dr. Riya Samanta
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-2 font-light">
              Assistant Professor
            </p>
            <p className="text-lg sm:text-xl text-white/90 mb-2 font-light">
              Department of Computer Science and Engineering
            </p>
            <p className="text-base sm:text-lg text-white/85 mb-12 font-light max-w-2xl mx-auto">
              Techno India University, Salt Lake, Sector V, EM Block, Plot No - 4/1, Kolkata, West Bengal 700091
            </p>
            <motion.a
              href="MyPortfolio/public/cv.pdf"
              download="cv.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-[#A51C30] px-8 py-4 text-lg rounded-full transition-all shadow-2xl"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} className="text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#A51C30]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-16 text-gray-900 text-center" style={{ color: '#A51C30' }}>
              About Me
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A51C30] to-[#7D1624] rounded-2xl transform rotate-3" />
                <img
                  src={profileImage}
                  alt="Dr. Riya Samanta"
                  className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 text-lg text-gray-700 leading-relaxed flex-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={itemVariants} className="text-justify">
                Dr. Riya Samanta is currently an Assistant Professor at Techno India University and a Postdoctoral Fellow at IIT Jodhpur (February–May 2025). She completed her Ph.D. from the Indian Institute of Technology Kharagpur (2020–2025), where her doctoral thesis focused on skill‑oriented crowdsourcing and advanced matching algorithms for task allocation. Prior to her current roles, she served as an Assistant Professor at Amity University Kolkata.
              </motion.p>
              <motion.p variants={itemVariants} className="text-justify">
                Her research bridges the domains of crowdsourcing, matching algorithms, and tiny‑machine learning. By integrating bidirectional preferences, workforce balance considerations, and on‑device intelligence, her work advances both the theoretical foundations and practical applications of intelligent task assignment systems and human‑computer interaction.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-justify font-medium italic text-[#A51C30] bg-[#A51C30]/5 p-4 rounded-xl border border-[#A51C30]/20"
              >
                "I am currently interested in working with enthusiastic Ph.D. students and research interns who wish to explore cutting-edge research at the convergence of Human–Computer Interaction (HCI), matching theory, Edge AI, and machine learning, with a shared goal of designing intelligent systems that advance sustainability and societal well-being."
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#A51C30]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-16 text-gray-900 text-center" style={{ color: '#A51C30' }}>
              Research Interests
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(165, 28, 48, 0.2)" }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-[#A51C30] to-[#7D1624]"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl mb-4 text-gray-900">Crowdsourcing & Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Skill‑oriented task allocation, bidirectional preferences, workforce balance, and stable matching mechanisms for optimizing crowdsourcing platforms.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(165, 28, 48, 0.2)" }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-[#A51C30] to-[#7D1624]"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl mb-4 text-gray-900">TinyML & HCI</h3>
              <p className="text-gray-600 leading-relaxed">
                Human activity recognition, gesture control, face tracking, and edge computing solutions enabling intelligent human‑computer interaction on resource‑constrained devices.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(165, 28, 48, 0.2)" }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-[#A51C30] to-[#7D1624]"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BookOpen className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl mb-4 text-gray-900">Generative AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Conditional Tabular Generative Adversarial Networks (GANs) for synthetic data generation, addressing data scarcity and privacy concerns in machine learning applications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#A51C30]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-16 text-gray-900 text-center" style={{ color: '#A51C30' }}>
              Selected Publications
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className={`bg-gradient-to-r ${pub.type === 'award'
                  ? 'from-[#A51C30]/5 to-transparent border-l-4'
                  : 'from-gray-50 to-transparent border-l-4'
                  } pl-6 pr-6 py-6 rounded-r-xl transition-all`}
                style={{ borderColor: pub.type === 'award' ? '#A51C30' : '#d1d5db' }}
              >
                <h3 className="text-xl mb-2 text-gray-900 font-semibold">
                  {pub.title}
                </h3>
                <p className="text-gray-600 italic">{pub.venue}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://scholar.google.com/citations?user=aDkuDDEAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(165, 28, 48, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full transition-all shadow-lg bg-gradient-to-r from-[#A51C30] to-[#7D1624]"
            >
              <ExternalLink size={20} />
              View Full Publications on Google Scholar
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#A51C30]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-16 text-gray-900 text-center" style={{ color: '#A51C30' }}>
              Teaching Experience
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A51C30] to-[#7D1624] flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold">Techno India University</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Autumn 2025</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-2" />
                  <span className="text-gray-700">Automata Theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-2" />
                  <span className="text-gray-700">Basic Computing Lab</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A51C30] to-[#7D1624] flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold">IIT Kharagpur</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Teaching Assistant</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-2" />
                  <span className="text-gray-700">Database Management Systems (DBMS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-2" />
                  <span className="text-gray-700">Operating Systems (OS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-2" />
                  <span className="text-gray-700">Geographical Information Systems (GIS)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A51C30] to-[#7D1624] flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold">NPTEL</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Online Courses</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-2" />
                  <span className="text-gray-700">Cloud Computing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A51C30] mt-2" />
                  <span className="text-gray-700">Computer Networks</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#A51C30]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-16 text-gray-900 text-center" style={{ color: '#A51C30' }}>
              Awards & Recognition
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(165, 28, 48, 0.1)" }}
                className="flex gap-4 items-start bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100 transition-all"
              >
                <motion.div
                  className="flex-shrink-0 mt-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="text-[#A51C30]" size={24} />
                </motion.div>
                <p className="text-lg text-gray-700 leading-relaxed">{award}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#A51C30]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-16 text-gray-900 text-center" style={{ color: '#A51C30' }}>
              Work Demos
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(165, 28, 48, 0.2)" }}
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${demo.id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#A51C30] to-[#7D1624] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-16 text-white text-center">
              Get In Touch
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex gap-4 items-start bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20">
                  <Mail className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-white font-semibold">Email</h3>
                <div className="text-white/90 text-sm space-y-1">
                  <p>study[dot]riya1792[at]gmail[dot]com</p>
                  <p>riya[dot]s[at]technoindiaeducation[dot]com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex gap-4 items-start bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20">
                  <Phone className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-white font-semibold">Phone</h3>
                <a
                  href="tel:+919832412650"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  +91 98324 12650
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex gap-4 items-start bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-white font-semibold">ORCID</h3>
                <a
                  href="https://orcid.org/0000-0002-8156-7636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  0000-0002-8156-7636
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex gap-4 items-start bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20">
                  <Linkedin className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-white font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/riya-samanta-19774a1a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  linkedin.com/in/riya-samanta
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#7D1624]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-center text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2026 Dr. Riya Samanta. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
