'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Globe, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ProjectPage({ params }) {
  // In a real app, you would fetch the project data based on the id
  const project = {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    image: '/api/placeholder/800/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Tailwind CSS'],
    link: '#',
    github: '#',
    details: `
      A comprehensive e-commerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js). 
      This project showcases modern web development practices and includes features such as:

      • User authentication and authorization
      • Product catalog with search and filtering
      • Shopping cart functionality
      • Secure payment processing
      • Order management system
      • Admin dashboard
      • Responsive design for all devices

      The frontend is built with React and uses Redux for state management, while the backend is powered
      by Node.js and Express. Data is stored in MongoDB, and the entire application follows REST API
      principles.

      Key technical achievements include:
      • Implemented JWT-based authentication
      • Built a responsive UI using Tailwind CSS
      • Integrated Stripe for payment processing
      • Optimized performance with Redis caching
      • Deployed on AWS using Docker containers
    `,
    challenges: `
      During development, several challenges were overcome:
      1. Implementing real-time inventory updates
      2. Handling concurrent user sessions
      3. Optimizing database queries for performance
      4. Managing complex state across multiple components
    `,
    technologies: {
      frontend: ['React', 'Redux', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      deployment: ['AWS', 'Docker', 'Nginx']
    },
    screenshots: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ]
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Back Button */}
          <Link 
            href="/projects"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          {/* Main Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>View Code</span>
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span>Live Demo</span>
            </a>
          </div>

          {/* Project Details */}
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {project.details}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Challenges & Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {project.challenges}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Technology Stack
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Deployment:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.deployment.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.img
                  key={index}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}