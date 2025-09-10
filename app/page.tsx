"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  User,
  Briefcase,
  GraduationCap,
  Send,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="bg-animated-gradient" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-foreground">Trupti Tekam</div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

        {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 0 0 #fff", "0 0 60px 10px #a5b4fc55"] }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
            >
              <User className="w-16 h-16 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Hi, I'm <span className="text-primary">Trupti Tekam</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate Frontend Developer and UI/UX Designer passionate about intuitive, modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 button-premium" asChild>
                <a href="#projects">
                  <Briefcase className="w-4 h-4" />
                  View My Work
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent button-premium" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

       {/* About Section */}
      <motion.section
        id="about"
        className="py-16 px-4 bg-muted"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="card-glass">
              <CardContent className="p-8">
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                 I’m a UI/UX Designer and Frontend Developer passionate about creating clean, user-friendly, 
                 and responsive digital experiences. With a strong eye for design and a solid foundation in HTML, CSS, JavaScript, and React. 
                </p>
                <p className="text-lg text-card-foreground leading-relaxed">
                 I enjoy turning ideas into interactive products that blend creativity with functionality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: Portfolio Website */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-shadow card-glass">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Palette className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle>Personal Portfolio</CardTitle>
                  <CardDescription>
                    A responsive portfolio website to showcase my projects and skills, designed in Figma and built with React, Next.js, and Tailwind CSS.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Figma</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent button-premium">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2 button-premium">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 2: Task Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card className="group hover:shadow-xl transition-shadow card-glass">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <Database className="w-12 h-12 text-blue-600" />
                  </div>
                  <CardTitle>Task Tracker App</CardTitle>
                  <CardDescription>
                    A simple task management app with add, edit, and delete features. Built using React, Tailwind CSS, and SQLite for persistent storage.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">SQLite</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent button-premium">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2 button-premium">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 3: UI Kit Design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Card className="group hover:shadow-xl transition-shadow card-glass">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                    <Palette className="w-12 h-12 text-pink-500" />
                  </div>
                  <CardTitle>Modern UI Kit</CardTitle>
                  <CardDescription>
                    A collection of reusable UI components and layouts designed in Figma and implemented with React and Tailwind CSS.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent button-premium">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2 button-premium">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-16 px-4 bg-muted"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend */}
            <Card className="card-glass">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            {/* SQLite */}
            <Card className="card-glass">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>SQLite</Badge>
                </div>
              </CardContent>
            </Card>
            {/* Figma */}
            <Card className="card-glass">
              <CardHeader className="text-center">
                <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Figma</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 px-4 bg-sidebar"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-sidebar-foreground">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="card-glass">
              <CardHeader>
                <CardTitle>Let's work together!</CardTitle>
                <CardDescription>
                  I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like
                  to collaborate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2 button-premium">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t">
                  <div className="flex justify-center space-x-6">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent button-premium">
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent button-premium">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent button-premium">
                      <Mail className="w-4 h-4" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>
    </div>
  )

      {/* Footer */}
      {/* <footer className="py-8 px-4 bg-foreground text-muted">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Trupti Tekam. Built with React and Next.js.</p>
        </div>
      </footer> */}
    

}
