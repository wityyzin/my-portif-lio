"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaGraduationCap,
  FaLanguage,
  FaArrowUp,

} from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,

  SiMongodb,

  SiDocker,
  SiGit,
  SiPython,
  SiVercel,
} from "react-icons/si"

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.2])

  // Refs for each section for navigation
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const coursesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePrint = () => {
    if (resumeRef.current) {
      window.print()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Corrigido para aceitar o tipo correto de ref
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }


  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/leandrobatista/project1",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/leandrobatista/project2",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers with data visualization and reporting tools.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/leandrobatista/project3",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
    },
    {
      title: "Weather Application",
      description: "A weather forecast application with location detection and interactive maps.",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/leandrobatista/project4",
      tags: ["React Native", "Weather API", "Geolocation"],
    },
  ]

  const skills = [
    { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
    { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
    { name: "React", icon: <SiReact />, category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
    { name: "Node.js", icon: <SiNodedotjs />, category: "backend" },
    { name: "HTML5", icon: <SiHtml5 />, category: "frontend" },
    { name: "CSS3", icon: <SiCss3 />, category: "frontend" },
    { name: "MongoDB", icon: <SiMongodb />, category: "backend" },
    { name: "Docker", icon: <SiDocker />, category: "devops" },
    { name: "Git", icon: <SiGit />, category: "devops" },
    { name: "Python", icon: <SiPython />, category: "backend" },
    { name: "Vercel", icon: <SiVercel />, category: "devops" },
  ]

  const education = [
    {
      degree: "Analise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário de Maringá",
      period: "2024 - 2026",
      description: "Technologist in Systems Analysis and Development databases, web and mobile development, software engineering, networks, systems analysis, project management, and basic math and logic."
    },
    
  ]

  const courses = [
    {
      title: "Logica de Programação - Nelio alves",
      institution: "Udemy",
      period: "2025",
      description:
        " i learned programming logic from basic to advanced using VisualG, with exercises in C, C++, Python, C#, and Java."
    },
    {
      title: "Full Stack Web Development",
      institution: "Coursera",
      period: "2021",
      description:
        "Complete web development bootcamp covering frontend and backend technologies including HTML, CSS, JavaScript, Node.js, and MongoDB.",
      
    },
    {
      title: "TypeScript Masterclass",
      institution: "Frontend Masters",
      period: "2021",
      description:
        "In-depth TypeScript course covering type systems, generics, and integration with React applications.",
      
    },
    {
      title: "UI/UX Design Fundamentals",
      institution: "Interaction Design Foundation",
      period: "2020",
      description:
        "Course focused on user interface design principles, user experience, and creating intuitive web applications.",
     
    },
  ]

  const languages = [
    { language: "Portuguese", proficiency: "Native" },
    { language: "English", proficiency: "Intermediate" },
    { language: "Spanish", proficiency: "Intermediate" },
  ]

  const testimonials = [
    {
      name: "Gian Bueno",
      position: "Project Manager at TechCorp",
      text: "Leandro is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him a valuable asset to any team.",
    },
    {
      name: "Carlos Mendes",
      position: "CTO at StartupX",
      text: "Working with Leandro was a pleasure. He has a deep understanding of modern web technologies and always finds elegant solutions to complex problems.",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-700 hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(educationRef)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Education
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(coursesRef)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Courses
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Download button - fixed position */}
      <motion.button
        onClick={handlePrint}
        className="fixed top-4 right-4 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaDownload className="text-xl" />
      </motion.button>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center border border-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl" ref={resumeRef}>
        {/* Header */}
        <motion.div style={{ opacity: headerOpacity }} className="text-center mb-16 pt-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500"
          >
            Leandro Batista
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl text-gray-300 mb-6"
          >
            Software Developer
          </motion.h2>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-2xl mx-auto text-gray-400"
          >
            Passionate programmer with expertise in web development and a strong focus on creating responsive,
            user-friendly applications using modern technologies.
          </motion.p>
        </motion.div>

        {/* Profile Section */}
        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg shadow-emerald-500/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="leandroeuu.png"
                alt="Leandro Batista"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex-1">
              <motion.h3
                className="text-3xl font-bold mb-4 text-emerald-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                About Me
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I am currently studying Systems Analysis and Development (ADS) and have been passionate about technology since I was a child. I enjoy exploring how things work, building solutions through code, and constantly learning new tools and concepts. My goal is to grow as a developer and contribute to innovative and impactful projects. I am especially interested in software development, programming logic, and problem-solving.

              </motion.p>
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
              
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-emerald-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Languages
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg"
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <FaLanguage className="text-4xl text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{lang.language}</h4>
                    <p className="text-emerald-300">{lang.proficiency}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-emerald-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h3>

          {/* Skill categories */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.div
                className="bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-emerald-300 font-medium">Frontend</span>
              </motion.div>
              <motion.div
                className="bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="text-blue-300 font-medium">Backend</span>
              </motion.div>
              <motion.div
                className="bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-purple-300 font-medium">DevOps</span>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg flex flex-col items-center justify-center border shadow-lg ${
                  skill.category === "frontend"
                    ? "bg-emerald-500/10 border-emerald-500/30 shadow-emerald-500/5"
                    : skill.category === "backend"
                      ? "bg-blue-500/10 border-blue-500/30 shadow-blue-500/5"
                      : "bg-purple-500/10 border-purple-500/30 shadow-purple-500/5"
                }`}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  boxShadow:
                    skill.category === "frontend"
                      ? "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)"
                      : skill.category === "backend"
                        ? "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
                        : "0 20px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className={`text-4xl mb-3 ${
                    skill.category === "frontend"
                      ? "text-emerald-400"
                      : skill.category === "backend"
                        ? "text-blue-400"
                        : "text-purple-400"
                  }`}
                >
                  {skill.icon}
                </div>
                <h4 className="text-lg font-medium text-center">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-emerald-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg relative"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="absolute -top-3 -left-3 text-5xl text-emerald-500 opacity-30">&quot;</div>
                <div className="relative z-10">
                  <p className="text-gray-300 mb-4 italic">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/30 flex items-center justify-center mr-3">
                      <span className="text-emerald-300 font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-emerald-300">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 text-5xl text-emerald-500 opacity-30 rotate-180">&quot;</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-emerald-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-emerald-300">{project.title}</h4>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-700 text-xs px-2 py-1 rounded-full text-emerald-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          ref={educationRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-emerald-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaGraduationCap className="text-3xl text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-emerald-300">{edu.institution}</p>
                    <p className="text-gray-400 mb-2">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Courses Section */}
        <motion.section
          ref={coursesRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-emerald-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Courses & Certifications
          </motion.h3>
          <div className="space-y-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FaGraduationCap className="text-3xl text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h4 className="text-xl font-bold text-white">{course.title}</h4>
                      <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/30">
                        Accomplished 
                      </span>
                    </div>
                    <p className="text-emerald-300">{course.institution}</p>
                    <p className="text-gray-400 mb-2">{course.period}</p>
                    <p className="text-gray-300">{course.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h3
            className="text-3xl font-bold mb-8 text-emerald-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="https://github.com/leandrobatista"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <FaGithub className="text-4xl mr-4 text-emerald-400" />
              <div>
                <h4 className="text-xl font-bold">GitHub</h4>
                <p className="text-gray-400">github.com/leandrocalian</p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/leandrobatista"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <FaLinkedin className="text-4xl mr-4 text-emerald-400" />
              <div>
                <h4 className="text-xl font-bold">LinkedIn</h4>
                <p className="text-gray-400">linkedin.com/in/leandrocalian</p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaEnvelope className="text-4xl mr-4 text-emerald-400" />
              <div>
                <h4 className="text-xl font-bold">Email</h4>
                <p className="text-gray-400">leandrobdn2013@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <FaPhone className="text-4xl mr-4 text-emerald-400" />
              <div>
                <h4 className="text-xl font-bold">Phone</h4>
                <p className="text-gray-400">+55 (21) 97267-7717</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="text-center text-gray-500 text-sm py-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Leandro Batista. All rights reserved.</p>
          <p className="mt-2">Made with React, Next.js, and Framer Motion</p>
        </motion.footer>
      </div>
    </div>
  )
}
